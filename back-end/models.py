from py2neo import authenticate, Graph, Node, Relationship, remote, NodeSelector
from werkzeug.security import generate_password_hash, check_password_hash

authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
             "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
              user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
              bolt=True, secure=True, http_port=24786, https_port=24780)


class User:

    def find_one(self, user_id):
        user = graph.run(f"MATCH (user:Person) WHERE ID(user)={user_id} RETURN user").data()
        return user

    @staticmethod
    def find_all():
        users = graph.run("MATCH (user:Person) RETURN user").data()
        users_list = []
        for user in users:
            users_list.append(user['user'])
        return users_list

