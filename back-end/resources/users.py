from flask import jsonify, request
from flask_restful import Resource

from resources.token import token_required
from models.users_model import User

from flask_socketio import SocketIO, emit, join_room, send
import json

class AllUsers(Resource):

    @staticmethod
    def get():
        users = User.find_all()
        return jsonify(Users=users)

    @staticmethod
    def post():
        data = request.get_json()
        user = User.add(data)
        return jsonify(user)


class ThisUser(Resource):

    @staticmethod
    @token_required
    def get(current_user_id):
        user = User.find_one(current_user_id)

        return jsonify(user)


class OneUser(Resource):

    @staticmethod
    @token_required
    def get(current_user_id, user_id):
        user = User.find_one(user_id)
        return jsonify(user)

    @staticmethod
    def patch(user_id):
        data = request.get_json()
        user = User.update(user_id, data)

        user_string = json.dumps(user)
        user_json = json.loads(user_string)
        emit('user_changed', user_json, namespace='/', broadcast=True)

        return jsonify(user)

    @staticmethod
    def delete(user_id):
        del_msg = User.delete(user_id)
        return jsonify(del_msg)
