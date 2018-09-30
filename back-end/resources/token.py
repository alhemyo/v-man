from functools import wraps
from flask import request, jsonify
import jwt

import config

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        data = jwt.decode(token, config.secret_key)
        user_id = data["user_id"]

        return f(user_id, *args, **kwargs)

    return decorated
