from flask import Flask
from flask_restful import Api
from flask_cors import CORS
import sys

from resources import login, users


app = Flask(__name__)
api = Api(app)

CORS(app)

api.add_resource(login.Login, '/api/login')
api.add_resource(users.AllUsers, '/api/users')
api.add_resource(users.ThisUser, '/api/users/self')
api.add_resource(users.OneUser, '/api/users/<int:user_id>')


if __name__ == '__main__':
    app.run(debug=True)