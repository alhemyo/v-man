from flask import request
import datetime
from py2neo import authenticate, Graph, Node, Relationship, remote, NodeSelector
from werkzeug.security import generate_password_hash, check_password_hash

authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
             "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
              user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
              bolt=True, secure=True, http_port=24786, https_port=24780)


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
    def add():
            data = request.get_json()

            date_created = str(datetime.datetime.now()).replace(' ', 'T') + "Z"

            new_user = Node("Person",
                            name=data['name'],
                            surname=data['surname'],
                            email=data['email'],
                            password=generate_password_hash("123"),
                            position=data['position'],
                            gender=data['gender'],
                            education=data['education'],
                            birthday=data['birthday'],
                            address=data['address'],
                            city=data['city'],
                            phone=data['phone'],
                            umcn=data['umcn'],
                            is_admin=str(data['is_admin']).lower(),
                            admin_type=data['admin_type'],
                            IdNumber=data['IdNumber'],
                            IdExpireDate=data['IdExpireDate'],
                            bank=data['bank'],
                            accNumber=data['accNumber'],
                            employmentDate=data['employmentDate'],
                            payment=data['payment'],
                            date_created=date_created
                            )

            graph.create(new_user)

            new_user['id'] = remote(new_user)._id

            return new_user

    @staticmethod
    def update(user_id):
        user = graph.run(f"MATCH (user:Person) WHERE ID(user)={user_id} RETURN user").evaluate()

        data = request.get_json()

        for attribute in data:
            if user[attribute]:
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