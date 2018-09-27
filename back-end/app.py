from flask import Flask, render_template, request, redirect, url_for, jsonify, make_response
import jwt
import datetime
from flask_cors import CORS

from UsersAPI import users_api
from ProjectsAPI import projects_api
from TasksAPI import tasks_api
from Token import token_required

from py2neo import authenticate, Graph, Node, Relationship, remote, NodeSelector
from werkzeug.security import generate_password_hash, check_password_hash

authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
             "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
              user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
              bolt=True, secure=True, http_port=24786, https_port=24780)

app = Flask(__name__)
app.register_blueprint(users_api)
app.register_blueprint(projects_api)
app.register_blueprint(tasks_api)
app.secret_key = 'supersecretkey'

CORS(app)


@app.route('/thisuser', methods=['GET'])
@token_required
def get_this_users(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    return jsonify(current_user)


@app.route('/myprojects', methods=['GET'])
@token_required
def my_projects(current_user):

    umcn = current_user['umcn']

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


@app.route('/login', methods=['POST'])
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
