from flask import Flask, render_template, request
from flask_restful import Api
from flask_cors import CORS
from flask_socketio import SocketIO, emit, join_room, send, disconnect

from resources import login, users, projects, tasks, notes

from models.users_model import User
from models.tasks_model import Task
import json
import jwt
import config

app = Flask(__name__)
api = Api(app)
socketio = SocketIO(app)

CORS(app)

api.add_resource(login.Login, '/api/login')
api.add_resource(users.AllUsers, '/api/users')
api.add_resource(users.ThisUser, '/api/users/self')
api.add_resource(users.OneUser, '/api/users/<int:user_id>')

api.add_resource(projects.MyProjects, '/api/users/self/projects')
api.add_resource(projects.ProjectsOfUser, '/api/users/<int:user_id>/projects')
api.add_resource(projects.AllProjects, '/api/projects')
api.add_resource(projects.OneProject, '/api/projects/<int:project_id>')

api.add_resource(tasks.AllTasksOfProject, '/api/projects/<int:project_id>/tasks')
api.add_resource(tasks.OneTask, '/api/tasks/<int:task_id>')

api.add_resource(notes.AllNotesOfTask, '/api/tasks/<int:task_id>/notes')
api.add_resource(notes.OneNote, '/api/notes/<int:note_id>')


@app.route('/')
def index():
    """Serve the index HTML"""
    return render_template('index.html')


CONNECTED_USERS = {}


@socketio.on('connect')
def on_connect():
    socket_id = request.sid
    print(f"Client {socket_id} just connected")


@socketio.on('login')
def on_login(data):
    socket_id = request.sid
    token = data['token']
    token_data = jwt.decode(token, config.secret_key)
    user_id = token_data["user_id"]

    CONNECTED_USERS[socket_id] = user_id
    print(CONNECTED_USERS)
    print("Online users: ", set(CONNECTED_USERS.values()))
    emit('online_users', list(set(CONNECTED_USERS.values())), namespace='/', broadcast=True)


@socketio.on('disconnect')
def on_disconnect():
    socket_id = request.sid
    print(f'Client {socket_id} disconnected')
    CONNECTED_USERS.pop(socket_id)
    print(CONNECTED_USERS)
    print("Online users: ", set(CONNECTED_USERS.values()))

@socketio.on('logout')
def on_logout(socket_id):
    CONNECTED_USERS.pop(socket_id)
    print(CONNECTED_USERS)
    print("Online users: ", set(CONNECTED_USERS.values()))
    emit('online_users', list(set(CONNECTED_USERS.values())), namespace='/', broadcast=True)
    disconnect(socket_id)


if __name__ == '__main__':
    socketio.run(app, debug=True)
