from flask import request
import datetime
from py2neo import Node, Relationship, remote, NodeSelector

from models.users_model import User

from config import graph


class Project:

    @staticmethod
    def find_one(project_id):
        project = graph.run(f"MATCH (project:Project) WHERE ID(project)={project_id} RETURN project").evaluate()

        if project:
            project['id'] = project_id
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
            projects.append(project)

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

            if type(admins) == list and type(users) == list:

                for admin_id in admins:
                    admin = User.find_one(admin_id)
                    if admin.get("message") == "User not found!":
                        return {"message": f"User {admin_id} not found"}
                    admin_project_rel = Relationship(admin, 'IS_ADMIN', new_project)
                    graph.create(admin_project_rel)

                for user_id in users:
                    user = User.find_one(user_id)
                    if user.get("message") == "User not found!":
                        return {"message": f"User {user_id} not found"}
                    user_project_rel = Relationship(user, 'IS_USER', new_project)
                    graph.create(user_project_rel)
            else:
                return {"message": "The users and admins attributes must be lists!"}

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

        return project


    @staticmethod
    def delete(project_id):
        project = Project.find_one(project_id)

        if project.get("message") == "Project not found!":
            return {"message": f"Project {project_id} not found!"}

        graph.run(f"MATCH (project:Project) WHERE ID(project)={project_id} DETACH DELETE project").evaluate()
        return {"message": f"The Project with id {project_id} has been deleted"}