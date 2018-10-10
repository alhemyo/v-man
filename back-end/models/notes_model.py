from flask import request
import datetime
from py2neo import Node, Relationship, remote, NodeSelector

from models.users_model import User

from config import graph


class Note:

    @staticmethod
    def find_one(note_id):
        note = graph.run(f"MATCH (note:Note) WHERE ID(note)={note_id} RETURN note").evaluate()

        if note:
            note['id'] = note_id
            return note
        else:
            return {"message": "Note not found!"}

    @staticmethod
    def find_all(task_id):
        notes = graph.run(
            f"MATCH (note:Note)-[:IS_NOTE_OF]->(task:Task) WHERE ID(task)={task_id} RETURN note").data()

        notes_list = []
        for n in notes:
            note = n['note']
            note_id = remote(note)._id
            note['id'] = note_id

            notes_list.append(note)

        return notes_list

    @staticmethod
    def add(current_user_id, task_id, data):

            all_attributes = ["client", "date", "message", "user"]

            date_created = str(datetime.datetime.now()).replace(' ', 'T') + "Z"

            try:
                new_note = Node("Note",
                                client=data['client'],
                                date=data['date'],
                                message=data['message']
                                )
            except KeyError as e:
                return {"message": f"You are missing a key element: {e}"}

            new_note['date_created'] = date_created

            graph.create(new_note)

            task = graph.run(f"MATCH (task:Task) WHERE ID(task)={task_id} RETURN task").evaluate()

            note_task_rel = Relationship(new_note, 'IS_NOTE_OF', task)
            graph.create(note_task_rel)

            new_note['user'] = current_user_id
            new_note['id'] = remote(new_note)._id

            return new_note

    @staticmethod
    def update(note_id):
        note =  Note.find_one(note_id)

        if note.get("message") == "Note not found!":
            return {"message": f"Note {note_id} not found!"}

        data = request.get_json()

        for attribute in data:
            if note[attribute] is not None:
                note[attribute] = data[attribute]
            else:
                return {"message": f"The attribute {attribute} is not found!"}
        note.push()

        return note

    @staticmethod
    def delete(note_id):
        note = Note.find_one(note_id)

        if note.get("message") == "Note not found!":
            return {"message": f"Note {note_id} not found!"}

        graph.run(f"MATCH (note:Note) WHERE ID(note)={note_id} DETACH DELETE note").evaluate()
        return {"message": f"The Note with id {note_id} has been deleted"}