from flask import Flask, render_template, request, redirect, url_for, jsonify, make_response
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import jwt
import datetime
from functools import wraps
from flask_cors import CORS

from models import Base, User, Project

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
        current_user = session.query(User).filter_by(id=data['user_id']).first()
        # except:
        #     return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app.route('/user', methods=['GET'])
@token_required
def get_all_users(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    users = session.query(User).all()
    return jsonify(Users=[u.serialize for u in users])


@app.route('/thisuser', methods=['GET'])
@token_required
def get_this_users(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    return jsonify(current_user.serialize)

@app.route('/user/<user_id>', methods=['GET'])
@token_required
def get_one_user(current_user, user_id):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    user = session.query(User).filter_by(id=user_id).first()

    if not user:
        return jsonify({'message': 'No user found!'})

    return jsonify(user.serialize)

@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    print(data)
    is_admin = False
    if data["is_admin"] == 'True':
        is_admin=True
    new_user = User(username=data['username'],
                    email=data['email'],
                    position=data['position'],
                    is_admin=is_admin,
                    status=data['status'],
                    avatar=data['avatar'],
                    projects=[]
                    )
    new_user.set_password(data['password'])
    session.add(new_user)
    session.commit()

    return jsonify({'message': 'new user created'})

@app.route('/user/<user_id>', methods=['PUT'])
def edit_user(user_id):
    user = session.query(User).filter_by(id=user_id).first()

    if not user:
        return jsonify({'message': 'No user found!'})

    return ''

@app.route('/user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = session.query(User).filter_by(id=user_id).first()

    if not user:
        return jsonify({'message': 'No user found!'})

    session.delete(user)
    session.commit()

    return jsonify({'message': 'The user has been deleted'})

@app.route('/login', methods = ['POST'])
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})

    user = session.query(User).filter_by(username=auth.username).first()

    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})

    if user.check_password(auth.password):
        token = jwt.encode({'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])

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
