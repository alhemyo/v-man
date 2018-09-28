from flask import Blueprint, jsonify, request
from Token import token_required
from py2neo import authenticate, Graph, Node, Relationship, remote, NodeSelector
from datetime import datetime

projects_api = Blueprint('projects_api', __name__)


authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
             "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
              user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
              bolt=True, secure=True, http_port=24786, https_port=24780)




@projects_api.route('/project', methods=['GET'])
@token_required
def get_all_projects(current_user):

    #if not current_user.is_admin:
        #return jsonify({'message': 'User not authorized!'})

    selector = NodeSelector(graph)
    projects = selector.select("Project")

    projects_list = []
    for project in projects:

        users_list = []
        for rel in graph.match(end_node=project, rel_type="IS_USER"):
            user_umcn = rel.start_node()["umcn"]
            users_list.append(user_umcn)

        admin = ""
        for rel in graph.match(end_node=project, rel_type="IS_ADMIN"):
            admin_umcn = rel.start_node()["umcn"]
            admin = admin_umcn

        project_obj = ({"id": remote(project)._id,
                        "name": project['name'],
                        "client": project['client'],
                        "deadline": project['deadline'],
                        "priority": project['priority'],
                        "users": users_list,
                        "admin": admin
                        })
        projects_list.append(project_obj)

    return jsonify(Projects=projects_list)


@projects_api.route('/project', methods=['POST'])
@token_required
def create_project(current_user):
    data = request.get_json()
    print(data)

    new_project = Node("Project",
                    name=data['name'],
                    deadline=data['deadline'],
                    priority=data['priority'],
                    client=data['client']
                    )

    graph.create(new_project)

    admin_ids = data['admin_id']
    for admin_id in admin_ids:
        admin = graph.run("MATCH (user:Person) WHERE user.umcn = '{user_id}' RETURN user".format(user_id=admin_id)).data()[0]["user"]
        user_admin_project = Relationship(admin, 'IS_ADMIN', new_project)
        graph.create(user_admin_project)


    user_ids = data['user_ids']
    print(user_ids)
    for user_id in user_ids:
        user = graph.run("MATCH (user:Person) WHERE user.umcn='{id}' RETURN user".format(id=user_id)).data()[0]["user"]
        user_project = Relationship(user, 'IS_USER', new_project)
        graph.create(user_project)

    project_obj = ({"id": remote(new_project)._id,
                    "name": data['name'],
                    "client": data['client'],
                    "deadline": data['deadline'],
                    "priority": data['priority'],
                    "users": data['user_ids'],
                    "admin": data['admin_id']
                    })

    return jsonify(project_obj)


@projects_api.route('/project/<project_id>/users', methods=['POST'])
@token_required
def assign_users_to_project(current_user, project_id):

    data = request.get_json()
    users = data['users']
    admins = data['admins']

    project = graph.run("MATCH (project:Project) WHERE ID(project)={id} RETURN project".format(id=project_id)).data()[0]["project"]
    print(project)

    for user_id in users:
        user = graph.run("MATCH (user:Person) WHERE user.umcn='{id}' RETURN user".format(id=user_id)).data()[0]["user"]
        print(user)
        user_project = Relationship(user, 'IS_USER', project)
        graph.create(user_project)

    for user_id in admins:
        user = graph.run("MATCH (user:Person) WHERE user.umcn='{id}' RETURN user".format(id=user_id)).data()[0]["user"]
        print(user)
        user_project = Relationship(user, 'IS_ADMIN', project)
        graph.create(user_project)

    return jsonify(data)


@projects_api.route('/project/<project_id>/tasks', methods=['GET'])
@token_required
def get_tasks_of_project(current_user, project_id):

    tasks = graph.run(f"MATCH (task:Task)-[:IS_TASK_OF]->(project:Project) WHERE ID(project)={project_id} RETURN task, project").data()

    tasks_list = []
    for task in tasks:
        task_id = remote(task['task'])._id

        users = graph.run(f'MATCH (user:Person)-[:IS_USER]->(task:Task) WHERE ID(task)={task_id} RETURN user').data()

        users_list = []
        for user in users:
            umcn = user['user']['umcn']
            users_list.append(umcn)

        task['task']['project'] = project_id
        task['task']['id'] = task_id
        task['task']['users'] = users_list
        tasks_list.append(task['task'])

    return jsonify(Tasks=tasks_list)
