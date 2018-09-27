from flask import Blueprint, jsonify, request
from Token import token_required
from py2neo import authenticate, Graph, Node, Relationship, remote, NodeSelector
from datetime import datetime

tasks_api = Blueprint('tasks_api', __name__)


authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
             "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
              user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
              bolt=True, secure=True, http_port=24786, https_port=24780)




@tasks_api.route('/task/<task_id>/notes', methods=['GET'])
@token_required
def get_notes_of_task(current_user, task_id):

    print(current_user, task_id)

    notes = graph.run(f"MATCH (note:Note)-[:IS_NOTE_OF]->(task:Task) WHERE ID(task)={task_id} RETURN note").data()
    print(notes)

    notes_list = []
    for note in notes:
        notes_list.append(note['note'])

    return jsonify(Notes=notes_list)


@tasks_api.route('/task/<task_id>/users', methods=['POST'])
@token_required
def assign_users_to_task(current_user, task_id):

    data = request.get_json()
    users = data['users']

    task = graph.run("MATCH (task:Task) WHERE ID(task)={id} RETURN task".format(id=task_id)).data()[0]["task"]
    print(task)

    for user_id in users:
        user = graph.run("MATCH (user:Person) WHERE user.umcn='{id}' RETURN user".format(id=user_id)).data()[0]["user"]
        print(user)
        user_task = Relationship(user, 'IS_USER', task)
        graph.create(user_task)

    return jsonify(Users=users)


@tasks_api.route('/task/<task_id>/note', methods=['POST'])
@token_required
def create_note(current_user, task_id):
    data = request.get_json()

    task = graph.run(f"MATCH (task:Task) WHERE ID(task)={task_id} RETURN task").data()[0]["task"]

    new_note = Node("Note",
                    user=current_user['umcn'],
                    client=data['client'],
                    date=data['date'],
                    message=data['message'])

    note_task = Relationship(new_note, 'IS_NOTE_OF', task)
    graph.create(note_task)

    return jsonify(new_note)

@tasks_api.route('/task', methods=['POST'])
@token_required
def create_task(current_user):
    data = request.get_json()

    new_task = Node("Task",
                    name=data['name'],
                    priority=data['priority'],
                    state=data['state'],
                    thumbnail=data['thumbnail'],
                    deadline=data['deadline'],
                    download=data['download'],
                    created=data['created'],
                    finished=data['finished'],
                    upload=data['upload'],
                    description=data['description']
                    )

    graph.create(new_task)

    project_id = data["project"]
    project = graph.run(f"MATCH (project:Project) WHERE ID(project)={project_id} RETURN project").data()[0]["project"]

    task_project = Relationship(new_task, 'IS_TASK_OF', project)
    graph.create(task_project)

    new_task['project'] = project_id
    new_task['id'] = remote(new_task)._id

    return jsonify(new_task)


@tasks_api.route('/task/<task_id>', methods=['PATCH'])
def edit_task(task_id):

    data = request.get_json()

    print(task_id)

    task = Node('Task', _id=task_id)
    graph.merge(task)
    for key in data:
        task[key] = data[key]
    task.push()

    print(remote(task)._id)

    if not task:
        return jsonify({'message': 'Task not found!'})

    return jsonify(task)

