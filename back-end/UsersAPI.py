from flask import Blueprint, jsonify, request
from Token import token_required
from py2neo import authenticate, Graph, Node, Relationship, remote, NodeSelector
from datetime import datetime

users_api = Blueprint('users_api', __name__)


authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
             "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
              user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
              bolt=True, secure=True, http_port=24786, https_port=24780)


@users_api.route('/user', methods=['GET'])
@token_required
def get_all_users(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    users = graph.run("MATCH (user:Person) RETURN user").data()
    users_list = []
    for user in users:
        users_list.append(user['user'])
    return jsonify(Users=users_list)



@users_api.route('/user/<user_id>', methods=['GET'])
@token_required
def get_one_user(user_id):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    user = graph.run("MATCH (user:Person) WHERE ID(user)={id} RETURN user".format(id=user_id)).data()
    print(user)
    if not user:
        return jsonify({'message': 'No user found!'})

    return jsonify(user)

@users_api.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    print(data)

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

    return jsonify(new_user)

@users_api.route('/user/<user_id>', methods=['PUT'])
def edit_user(user_id):

    data = request.get_json()

    user = Node('Person', umcn=user_id)
    graph.merge(user)
    for key in data:
        user[key] = data[key]
    user.push()

    if not user:
        return jsonify({'message': 'No user found!'})

    return jsonify({'message': 'User updated'})

@users_api.route('/user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    deleted_user = graph.run("MATCH (user:Person) WHERE user.umcn = '{user_id}' DETACH DELETE user".format(user_id=user_id)).data()

    if not deleted_user:
        return jsonify({'message': 'User not found!'})

    return jsonify({'message': 'The user has been deleted'})



@users_api.route('/user/<umcn>/projects', methods=['GET'])
@token_required
def get_projects_of_user(current_user, umcn):

    selector = NodeSelector(graph)
    users = selector.select("Person", umcn=umcn)
    user = list(users)[0]

    myprojects = []
    for rel in graph.match(start_node=user, rel_type="IS_USER"):
        project = rel.end_node()
        myprojects.append(project)

    projects_list = []
    for project in myprojects:

        users_list = []
        for rel in graph.match(end_node=project, rel_type="IS_USER"):
            user_umcn = rel.start_node()["umcn"]
            users_list.append(user_umcn)

        admin = ""
        for rel in graph.match(end_node=project, rel_type="IS_ADMIN"):
            admin_umcn = rel.start_node()["umcn"]
            admin = admin_umcn

        project_obj = ({"id": remote(project)._id,
                        "name": project['name'],
                        "client": project['client'],
                        "deadline": project['deadline'],
                        "priority": project['priority'],
                        "users": users_list,
                        "admin": admin
                        })
        projects_list.append(project_obj)

    return jsonify(Projects=projects_list)
