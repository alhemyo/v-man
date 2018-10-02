from flask import jsonify, request
from flask_restful import Resource

from resources.token import token_required
from models.users_model import User
from models.projects_model import Project
from models.tasks_model import Task


class AllTasksOfProject(Resource):

    @staticmethod
    def get(project_id):
        tasks = Task.find_all(project_id)
        return jsonify(Tasks=tasks)

    @staticmethod
    def post(project_id):
        data = request.get_json()
        task = Task.add(project_id, data)
        return jsonify(task)


class OneTask(Resource):

    @staticmethod
    def get(task_id):
        task = Task.find_one(task_id)
        return jsonify(task)

    @staticmethod
    def patch(task_id):
        task = Task.update(task_id)
        return jsonify(task)

    @staticmethod
    def delete(task_id):
        del_msg = Task.delete(task_id)
        return jsonify(del_msg)
