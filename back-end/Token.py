from functools import wraps
from flask import request, jsonify, Blueprint
from py2neo import authenticate, Graph
import jwt

token_api = Blueprint('token_api', __name__)

authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
             "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
              user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
              bolt=True, secure=True, http_port=24786, https_port=24780)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        # try:
        data = jwt.decode(token, "supersecretkey")
        #current_user = session.query(User).filter_by(id=data['user_id']).first()
        current_user = graph.run("MATCH (user:Person) WHERE ID(user) = {user_id} RETURN user".format(user_id=data['user_id'])).data()[0]["user"]
        # except:
        #     return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated