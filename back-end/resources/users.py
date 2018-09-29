from flask import jsonify
from flask_restful import Resource

from resources.token import token_required
from models.users_model import User


class AllUsers(Resource):

    @staticmethod
    def get():
        users = User.find_all()
        return jsonify(Users=users)

    @staticmethod
    def post():
        user = User.add()
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
        user = User.update(user_id)
        return jsonify(user)

    @staticmethod
    def delete(user_id):
        del_msg = User.delete(user_id)
        return jsonify(del_msg)
