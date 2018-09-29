from flask import jsonify, request, make_response
from flask_restful import Resource
from models.users_model import graph, User
import jwt
from werkzeug.security import generate_password_hash, check_password_hash
from py2neo import remote


class Login(Resource):

    @staticmethod
    def post():
        auth = request.authorization

        if not auth or not auth.username or not auth.password:
            return jsonify({"message": "Could not verify"})

        user = graph.run(f"MATCH (user:Person) WHERE user.email = '{auth.username}' RETURN user").evaluate()
        user_id = remote(user)._id

        if not user:
            return jsonify({"message": "Could not verify"})

        if check_password_hash(user["password"], auth.password):
            token = jwt.encode({'user_id': user_id}, "supersecretkey")

            return jsonify({'token': token.decode('UTF-8')})

        return jsonify({"message": "Could not verify"})
