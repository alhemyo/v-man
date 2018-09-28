from flask import jsonify
from flask_restful import Resource
from models import graph, User

class AllUsers(Resource):
    def get(self):
        users = User.find_all()
        return jsonify(Users=users)


class OneUser(Resource):
    def get(self, user_id):
        user = User.find_one(user_id)
        return jsonify(user)