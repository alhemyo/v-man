from flask import request
import datetime
from py2neo import Node, Relationship, remote, NodeSelector

from models.users_model import User

from config import graph


class Project:

    @staticmethod
    def make_connections(users, project, connection_type):
        if users:
            if type(users) == list:

                for user_id in users:
                    user = User.find_one(user_id)
                    if user.get("message") == "User not found!":
                        return {"message": f"User {user_id} not found"}
                    user_project_rel = Relationship(user, connection_type, project)
                    graph.create(user_project_rel)
                return {}
            else:
                return {"message": "The users and admins attributes must be lists!"}
        else:
            return {}

    @staticmethod
    def find_users(project, connection_type):
        users_list = []
        for rel in graph.match(end_node=project, rel_type=connection_type):
            user_id = remote(rel.start_node())._id
            users_list.append(user_id)

        return users_list

    @staticmethod
    def find_one(project_id):
        project = graph.run(f"MATCH (project:Project) WHERE ID(project)={project_id} RETURN project").evaluate()

        if project:
            project['id'] = project_id
            users = Project.find_users(project, "IS_USER")
            admins = Project.find_users(project, "IS_ADMIN")
            project['users'] = users
            project['admins'] = admins
            return project
        else:
            return {"message": "Project not found!"}

    @staticmethod
    def find_all():
        projects = graph.run("MATCH (project:Project) RETURN project").data()

        projects_list = []
        for u in projects:
            project = u['project']
            project_id = remote(project)._id
            project['id'] = project_id
            users = Project.find_users(project, "IS_USER")
            admins = Project.find_users(project, "IS_ADMIN")
            project['users'] = users
            project['admins'] = admins

            projects_list.append(project)

        return projects_list

    @staticmethod
    def find_all_projects_of_user(user_id):

        user = User.find_one(user_id)

        if user.get('message') == "User not found!":
            return {"message": f"User {user_id} not found"}

        projects = []
        for rel in graph.match(start_node=user, rel_type="IS_USER"):
            project = rel.end_node()
            project['id'] = remote(project)._id
            project['users'] = Project.find_users(project, "IS_USER")
            project['admins'] = Project.find_users(project, "IS_ADMIN")
            projects.append(project)

        # for rel in graph.match(start_node=user, rel_type="IS_ADMIN"):
        #     project = rel.end_node()
        #     project['id'] = remote(project)._id
        #     if project not in projects:
        #         projects.append(project)

        return projects


    @staticmethod
    def add(data):

            date_created = str(datetime.datetime.now()).replace(' ', 'T') + "Z"

            try:
                new_project = Node("Project",
                                   name=data['name'],
                                   deadline=data['deadline'],
                                   priority=data['priority'],
                                   client=data['client']
                                   )
                new_project['date_created'] = date_created
                admins = data['admins']
                users = data['users']
            except KeyError as e:
                return {"message": f"You are missing a key element: {e}"}

            graph.create(new_project)

            admins = data.get('admins')
            users = data.get('users')

            users_msg = Project.make_connections(users, new_project, "IS_USER")
            admins_msg = Project.make_connections(admins, new_project, "IS_ADMIN")

            if users_msg.get('message'):
                return users_msg
            if admins_msg.get('message'):
                return admins_msg

            new_project['id'] = remote(new_project)._id
            return new_project

    @staticmethod
    def update(project_id):
        project = Project.find_one(project_id)

        if project.get("message") == "Project not found!":
            return {"message": f"Project {project_id} not found!"}

        data = request.get_json()

        for attribute in data:
            if project[attribute] is not None:
                project[attribute] = data[attribute]
            else:
                return {"message": f"The attribute {attribute} is not found!"}
        project.push()

        admins = data.get('admins')
        users = data.get('users')

        users_msg = Project.make_connections(users, project, "IS_USER")
        admins_msg = Project.make_connections(admins, project, "IS_ADMIN")

        if users_msg.get('message'):
            return users_msg
        if admins_msg.get('message'):
            return admins_msg

        return project


    @staticmethod
    def delete(project_id):
        project = Project.find_one(project_id)

        if project.get("message") == "Project not found!":
            return {"message": f"Project {project_id} not found!"}

        graph.run(f"MATCH (project:Project) WHERE ID(project)={project_id} DETACH DELETE project").evaluate()
        return {"message": f"The Project with id {project_id} has been deleted"}