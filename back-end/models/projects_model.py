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

            for admin in admins:
                admin = User.find_one(admin)
                admin_project_rel = Relationship(admin, 'IS_ADMIN', new_project)
                graph.create(admin_project_rel)

            for user in users:
                user = User.find_one(user)
                user_project_rel = Relationship(user, 'IS_USER', new_project)
                graph.create(user_project_rel)

            new_project['id'] = remote(new_project)._id
            return new_project

    @staticmethod
    def delete(project_id):
        project = graph.run(f"MATCH (project:Project) WHERE ID(project)={project_id} RETURN project").evaluate()

        if not project:
            return {"message": "Project not found!"}

        graph.run(f"MATCH (project:Project) WHERE ID(project)={project_id} DETACH DELETE project").evaluate()
        return {"message": f"The Project with id = {project_id} has been deleted"}