from flask import jsonify, request
from flask_restful import Resource

from resources.token import token_required
from models.users_model import User
from models.projects_model import Project


class AllProjects(Resource):

    @staticmethod
    def get():
        projects = Project.find_all()
        return jsonify(Projects=projects)

    @staticmethod
    def post():
        data = request.get_json()
        project = Project.add(data)
        return jsonify(project)


class OneProject(Resource):

    @staticmethod
    def get(project_id):
        project = Project.find_one(project_id)
        return jsonify(project)

    @staticmethod
    def patch(project_id):
        project = Project.update(project_id)
        return jsonify(project)

    @staticmethod
    def delete(project_id):
        del_msg = Project.delete(project_id)
        return jsonify(del_msg)
