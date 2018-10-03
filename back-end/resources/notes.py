from flask import jsonify, request
from flask_restful import Resource

from resources.token import token_required
from models.users_model import User
from models.projects_model import Project
from models.tasks_model import Task
from models.notes_model import Note


class AllNotesOfTask(Resource):

    @staticmethod
    def get(task_id):
        notes = Note.find_all(task_id)
        return jsonify(Notes=notes)

    @staticmethod
    @token_required
    def post(current_user_id, task_id):
        data = request.get_json()
        note = Note.add(current_user_id, task_id, data)
        return jsonify(note)


class OneNote(Resource):

    @staticmethod
    def get(note_id):
        note = Note.find_one(note_id)
        return jsonify(note)

    @staticmethod
    def patch(note_id):
        note = Note.update(note_id)
        return jsonify(note)

    @staticmethod
    def delete(note_id):
        del_msg = Note.delete(note_id)
        return jsonify(del_msg)

