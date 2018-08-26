from flask import Flask, render_template, request, redirect, url_for, jsonify, make_response
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import jwt
import json
import datetime
from functools import wraps
from flask_cors import CORS

from models import Base, User, Project

from py2neo import authenticate, Graph, Node, Relationship, remote, NodeSelector
from werkzeug.security import generate_password_hash, check_password_hash

authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
             "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
              user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
              bolt=True, secure=True, http_port=24786, https_port=24780)

app = Flask(__name__)
app.secret_key = 'supersecretkey'

CORS(app)

engine = create_engine('sqlite:///v-manDB.db')
Base.metadata.bind = engine

DBsession = sessionmaker(bind=engine)
session = DBsession()

 
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        # try:
        data = jwt.decode(token, app.config["SECRET_KEY"])
        #current_user = session.query(User).filter_by(id=data['user_id']).first()
        current_user = graph.run("MATCH (user:Person) WHERE ID(user) = {user_id} RETURN user".format(user_id=data['user_id'])).data()[0]["user"]
        # except:
        #     return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app.route('/user', methods=['GET'])
@token_required
def get_all_users(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    #users = session.query(User).all()
    #return jsonify(Users=[u.serialize for u in users])

    # print(current_user['name'])
    users = graph.run("MATCH (user:Person) RETURN user").data()
    users_list = []
    for user in users:
        users_list.append(user['user'])
    return jsonify(Users=users_list)


@app.route('/thisuser', methods=['GET'])
@token_required
def get_this_users(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    return jsonify(current_user)

@app.route('/user/<user_id>', methods=['GET'])
#@token_required
def get_one_user(user_id):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    #user = session.query(User).filter_by(id=user_id).first()

    user = graph.run("MATCH (user:Person) WHERE ID(user)={id} RETURN user".format(id=user_id)).data()
    print(user)
    if not user:
        return jsonify({'message': 'No user found!'})

    return jsonify(user)

@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    print(data)

    birthday_day = data['birthday']['day']
    birthday_month = data['birthday']['month']
    birthday_year = data['birthday']['year']
    birthday = f"{birthday_day}.{birthday_month}.{birthday_year}"

    IdExpireDate_day = data['IdExpireDate']['day']
    IdExpireDate_month = data['IdExpireDate']['month']
    IdExpireDate_year = data['IdExpireDate']['year']
    IdExpireDate = f"{IdExpireDate_day}.{IdExpireDate_month}.{IdExpireDate_year}"

    employmentDate_day = data['employmentDate']['day']
    employmentDate_month = data['employmentDate']['month']
    employmentDate_year = data['employmentDate']['year']
    employmentDate = f"{employmentDate_day}.{employmentDate_month}.{employmentDate_year}"

    new_user = Node("Person",
                    name=data['name'],
                    surname=data['surname'],
                    email=data['email'],
                    password=generate_password_hash("123"),
                    position=data['position'],
                    gender=data['gender'],
                    education=data['education'],
                    birthday=birthday,
                    address=data['address'],
                    city=data['city'],
                    phone=data['phone'],
                    umcn=data['umcn'],
                    is_admin=str(data['is_admin']).lower(),
                    admin_type=data['admin_type'],
                    IdNumber=data['IdNumber'],
                    IdExpireDate=IdExpireDate,
                    bank=data['bank'],
                    accNumber=data['accNumber'],
                    employmentDate=employmentDate,
                    payment=data['payment']
                    )

    graph.create(new_user)

    return jsonify(new_user)

@app.route('/user/<user_id>', methods=['PUT'])
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

@app.route('/user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    deleted_user = graph.run("MATCH (user:Person) WHERE user.umcn = '{user_id}' DETACH DELETE user".format(user_id=user_id)).data()

    if not deleted_user:
        return jsonify({'message': 'User not found!'})

    return jsonify({'message': 'The user has been deleted'})




@app.route('/project', methods=['GET'])
@token_required
def get_all_projects(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    # users = graph.run("MATCH (person:Person)-[:IS_ADMIN]->(project:Project) RETURN person")
    # print(users)

    # {id: id(n), labels: labels(n), data: n}

    projects = graph.run("MATCH (project:Project) RETURN project").data()
    projects_ids = graph.run("MATCH (project:Project) RETURN {id: ID(project), data: project}").data()
    # print(projects)
    # print(projects_ids)
    # projects_with_ids = []
    # for project_id in projects_ids:
    #     project_with_id = project_id['{id: ID(project), data: project}']
    #     projects_with_ids.append(project_with_id)
    #
    # print(projects_with_ids)

    projects_list = []
    for project in projects:
        project_name = project['project']['name']
        # project_id = graph.run("MATCH (project:Project) WHERE project.name='{project_name}' RETURN ID(project)".format(project_name=project_name)).data()
        # print(project_id)
        #project['project']['id'] = project_id
        users = graph.run("MATCH (n:Person)-[:IS_USER]->(m:Project) WHERE m.name='{project_name}' RETURN n.umcn".format(project_name=project_name))
        users_list = []
        for user in users:
            users_list.append(user['n.umcn'])
        project['project']['users'] = users_list
        projects_list.append(project['project'])

    return jsonify(Projects=projects_list)



@app.route('/project', methods=['POST'])
@token_required
def create_project(current_user):
    data = request.get_json()
    print(data)

    deadline_day = data['deadline']['day']
    deadline_month = data['deadline']['month']
    deadline_year = data['deadline']['year']
    deadline = f"{deadline_day}.{deadline_month}.{deadline_year}"

    new_project = Node("Project",
                    name=data['name'],
                    deadline=deadline,
                    priority=data['priority'],
                    client=data['client']
                    )

    graph.create(new_project)

    admin_id = data['admin_id']
    admin = graph.run("MATCH (user:Person) WHERE user.umcn = '{user_id}' RETURN user".format(user_id=admin_id)).data()[0]["user"]

    user_admin_project = Relationship(admin, 'IS_ADMIN', new_project)
    graph.create(user_admin_project)


    user_ids = data['user_ids']
    print(user_ids)
    for user_id in user_ids:
        user = graph.run("MATCH (user:Person) WHERE user.umcn='{id}' RETURN user".format(id=user_id)).data()[0]["user"]
        user_project = Relationship(user, 'IS_USER', new_project)
        graph.create(user_project)

    return jsonify(new_project)


@app.route('/tasks', methods=['GET'])
@token_required
def get_all_tasks(current_user):


    tasks = graph.run("MATCH (task:Task) RETURN task").data()

    tasks_list = []
    for task in tasks:
        tasks_list.append(task['task'])

    return jsonify(Tasks=tasks_list)

@app.route('/task', methods=['POST'])
@token_required
def create_task(current_user):
    data = request.get_json()
    print(data)

    print(data['users'])
    print(data['notes'])

    new_task = Node("Task",
                    name=data['name'],
                    priority=data['priority'],
                    state=data['state'],
                    thumbnail=data['thumbnail'],
                    deadline=data['deadline'],
                    download=data['download'],
                    created=data['created'],
                    finished=data['finished'],
                    upload=data['upload']
                    )

    graph.create(new_task)

    return jsonify(new_task)



# @app.route('/project/<project_id>', methods=['PUT'])
# def edit_user(project_id):
#
#     data = request.get_json()
#
#     project = Node('Project', umcn=user_id)
#     graph.merge(user)
#     for key in data:
#         user[key] = data[key]
#     user.push()
#
#     if not user:
#         return jsonify({'message': 'No user found!'})
#
#     return jsonify({'message': 'User updated'})
#
# @app.route('/project/<project_id>', methods=['DELETE'])
# def delete_user(project_id):
#     deleted_user = graph.run("MATCH (user:Person) WHERE user.umcn = '{user_id}' DETACH DELETE user".format(user_id=user_id)).data()
#
#     if not deleted_user:
#         return jsonify({'message': 'User not found!'})
#
#     return jsonify({'message': 'The user has been deleted'})


@app.route('/login', methods = ['POST'])
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})

    #user = session.query(User).filter_by(email=auth.username).first()
    user = graph.run("MATCH (user:Person) WHERE user.email = '{authuser}' RETURN user".format(authuser=auth.username))
    user_id = remote(user.evaluate())._id
    print(user_id)
    user = graph.run("MATCH (user:Person) WHERE user.email = '{authuser}' RETURN user".format(authuser=auth.username))
    user_data = list(user)[0][0]
    print(user_data)
    print(user_data["password"])

    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})

    if check_password_hash(user_data["password"], auth.password):
        token = jwt.encode({'user_id': user_id},
                           app.config['SECRET_KEY'])

        # if user.check_password(auth.password):
    #     token = jwt.encode({'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])

        return jsonify({'token': token.decode('UTF-8')})

    return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})



if __name__ == '__main__':
    app.run(debug=True)
