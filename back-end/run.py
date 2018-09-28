from flask import Flask
from flask_restful import Api

app = Flask(__name__)
api = Api(app)

from resources import users

api.add_resource(users.AllUsers, '/api/users')
api.add_resource(users.User, '/api/users/<int:user_id>')


if __name__ == '__main__':
    app.run(debug=True)