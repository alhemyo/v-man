from flask import request
import datetime
from py2neo import Node, Relationship, remote, NodeSelector
from werkzeug.security import generate_password_hash, check_password_hash

from config import graph


class User:

    @staticmethod
    def find_one(user_id):
        user = graph.run(f"MATCH (user:Person) WHERE ID(user)={user_id} RETURN user").evaluate()

        if user:
            user['id'] = user_id
            return user
        else:
            return {"message: ": "User not found!"}

    @staticmethod
    def find_all():
        users = graph.run("MATCH (user:Person) RETURN user").data()

        users_list = []
        for u in users:
            user = u['user']
            user_id = remote(user)._id
            user['id'] = user_id

            users_list.append(user)

        return users_list

    @staticmethod
    def add(data):

            password = generate_password_hash("123")
            date_created = str(datetime.datetime.now()).replace(' ', 'T') + "Z"

            try:
                new_user = Node("Person",
                                name=data['name'],
                                surname=data['surname'],
                                email=data['email']
                                )
            except KeyError as e:
                return {"message": f"You are missing a key element: {e}"}

            new_user['password'] = password
            new_user['date_created'] = date_created

            for attribute in data:
                new_user[attribute] = data[attribute]

            graph.create(new_user)

            new_user['id'] = remote(new_user)._id

            return new_user

    @staticmethod
    def update(user_id):
        user = graph.run(f"MATCH (user:Person) WHERE ID(user)={user_id} RETURN user").evaluate()

        data = request.get_json()

        for attribute in data:
            if user[attribute] is not None:
                user[attribute] = data[attribute]
            else:
                return {"message": f"The attribute {attribute} is not found!"}
        user.push()

        return user

    @staticmethod
    def delete(user_id):
        user = graph.run(f"MATCH (user:Person) WHERE ID(user)={user_id} DETACH DELETE user").evaluate()

        print(user)

        return {"message": "The User has been deleted"}