from flask import Flask, render_template, request, redirect, url_for, jsonify, make_response
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import jwt
import datetime
from functools import wraps
from flask_cors import CORS

from models import Base, User, Project

from py2neo import authenticate, Graph, Node, Relationship, remote
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

    print(current_user['name'])
    users = graph.run("MATCH (user:Person) RETURN user").data()
    return jsonify(Users=users)


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
    is_admin = False
    if data["is_admin"] == 'True':
        is_admin = True

    new_user = Node("Person",
                    name=data['name'],
                    surname=data['surname'],
                    email=data['email'],
                    password=generate_password_hash(data['password']),
                    position=data['position'],
                    gender=data['gender'],
                    education=data['education'],
                    address=data['address'],
                    city=data['city'],
                    phone=data['phone_number'],
                    day=data['day'],
                    month=data['month'],
                    year=data['year'],
                    umcn=data['address'],
                    is_admin=is_admin,
                    admin_type=data['admin_type']
                    )

    graph.create(new_user)

    #new_user.set_password(data['password'])
    #new_user.set_password('123')
    #session.add(new_user)
    #session.commit()

    # data.headers.add('Access-Control-Allow-Origin', '*')

    return jsonify({'message': 'new user created'})

@app.route('/user/<user_id>', methods=['PUT'])
def edit_user(user_id):
    user = session.query(User).filter_by(id=user_id).first()

    if not user:
        return jsonify({'message': 'No user found!'})

    return ''

@app.route('/user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    #user = session.query(User).filter_by(id=user_id).first()
    delete_user = graph.run("MATCH (user:Person) WHERE ID(user)={id} DETACH DELETE user".format(id=user_id)).data()
    print(delete_user)
    # if not user:
    #     return jsonify({'message': 'No user found!'})

    # session.delete(user)
    # session.commit()

    return jsonify({'message': 'The user has been deleted'})

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
        token = jwt.encode({'user_id': user_id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)},
                           app.config['SECRET_KEY'])

        # if user.check_password(auth.password):
    #     token = jwt.encode({'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])

        return jsonify({'token': token.decode('UTF-8')})

    return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})


@app.route('/project', methods=['GET'])
@token_required
def get_all_projects(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    projects = session.query(Project).all()
    return jsonify(Projects=[p.serialize for p in projects])


@app.route('/project', methods=['POST'])
@token_required
def create_project(current_user):
    data = request.get_json()
    print(data)

    new_project = Project(name=data['name'],
                        users=[current_user]
                    )
    session.add(new_project)
    session.commit()

    return jsonify({'message': 'new project created'})


if __name__ == '__main__':
    app.run( debug=True )
