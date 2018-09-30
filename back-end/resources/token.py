from functools import wraps
from flask import request, jsonify, Response
import jwt
import json

import config

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            message = json.dumps({'message': "Token not found!"})
            return Response(message, status=401)

        data = jwt.decode(token, config.secret_key)
        user_id = data["user_id"]

        return f(user_id, *args, **kwargs)

    return decorated
