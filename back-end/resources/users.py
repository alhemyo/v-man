from flask import jsonify
from flask_restful import Resource
from models import graph

class AllUsers(Resource):
    def get(self):
        users = graph.run("MATCH (user:Person) RETURN user").data()
        users_list = []
        for user in users:
            users_list.append(user['user'])
        return jsonify(Users=users_list)


class User(Resource):
    def get(self, user_id):
        return {'message': 'User:' + str(user_id)}