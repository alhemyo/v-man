from flask import jsonify, request
from flask_restful import Resource

from resources.token import token_required
from models.users_model import User
from models.projects_model import Project
from models.tasks_model import Task

from flask_socketio import SocketIO, emit, join_room, send
import json


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
        task = Task.find_one_with_users(task_id)
        return jsonify(task)

    @staticmethod
    def patch(task_id):
        data = request.get_json()
        task = Task.update(task_id, data)
        task_string = json.dumps(task)
        task_json = json.loads(task_string)

        emit('task_changed', task_json, namespace='/', broadcast=True)
        return jsonify(task)

    @staticmethod
    def delete(task_id):
        del_msg = Task.delete(task_id)
        return jsonify(del_msg)
