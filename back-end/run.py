from flask import Flask
from flask_restful import Api
from flask_cors import CORS
import sys

from resources import login, users, projects


app = Flask(__name__)
api = Api(app)

CORS(app)

api.add_resource(login.Login, '/api/login')
api.add_resource(users.AllUsers, '/api/users')
api.add_resource(users.ThisUser, '/api/users/self')
api.add_resource(users.OneUser, '/api/users/<int:user_id>')

api.add_resource(projects.MyProjects, '/api/users/self/projects')
api.add_resource(projects.UserProjects, '/api/users/<int:user_id>/projects')

api.add_resource(projects.AllProjects, '/api/projects')
api.add_resource(projects.OneProject, '/api/projects/<int:project_id>')

if __name__ == '__main__':
    app.run(debug=True)
