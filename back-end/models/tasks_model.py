from flask import request
import datetime
from py2neo import Node, Relationship, remote, NodeSelector

from models.users_model import User

from config import graph


class Task:

    @staticmethod
    def make_connections(users, task, connection_type):
        if users:
            if type(users) == list:

                for user_id in users:
                    user = User.find_one(user_id)
                    if user.get("message") == "User not found!":
                        return {"message": f"User {user_id} not found"}
                    user_task_rel = Relationship(user, connection_type, task)
                    graph.create(user_task_rel)
                return {}
            else:
                return {"message": "The users attributes must be lists!"}
        else:
            return {}

    @staticmethod
    def find_users(task, connection_type):
        users_list = []
        for rel in graph.match(end_node=task, rel_type=connection_type):
            user_id = remote(rel.start_node())._id
            users_list.append(user_id)

        return users_list

    @staticmethod
    def find_one(task_id):
        task = graph.run(f"MATCH (task:Task) WHERE ID(task)={task_id} RETURN task").evaluate()

        if task:
            task['id'] = task_id
            users = Task.find_users(task, "IS_USER")
            task['users'] = users
            return task
        else:
            return {"message": "Task not found!"}

    @staticmethod
    def find_all(project_id):
        tasks = graph.run(
            f"MATCH (task:Task)-[:IS_TASK_OF]->(project:Project) WHERE ID(project)={project_id} RETURN task").data()

        tasks_list = []
        for t in tasks:
            task = t['task']
            task_id = remote(task)._id
            task['id'] = task_id
            users = Task.find_users(task, "IS_USER")
            task['users'] = users

            tasks_list.append(task)

        return tasks_list

    @staticmethod
    def add(project_id, data):

            all_attributes = ["name", "priority", "state", "thumbnail", "deadline", "download", "created",
                              "finished", "upload"]

            date_created = str(datetime.datetime.now()).replace(' ', 'T') + "Z"

            try:
                new_task = Node("Task",
                                name=data['name'],
                                priority=data['priority'],
                                state=data['state']
                                )
            except KeyError as e:
                return {"message": f"You are missing a key element: {e}"}

            new_task['date_created'] = date_created

            for attribute in all_attributes:
                if attribute in data:
                    new_task[attribute] = data[attribute]
                else:
                    new_task[attribute] = ""
                    #return {"message": f"The element {attribute} is not allowed"}

            graph.create(new_task)

            project = graph.run(f"MATCH (project:Project) WHERE ID(project)={project_id} RETURN project").evaluate()

            task_project_rel = Relationship(new_task, 'IS_TASK_OF', project)
            graph.create(task_project_rel)

            new_task['project'] = project_id
            new_task['id'] = remote(new_task)._id
            new_task['users'] = []

            return new_task


    @staticmethod
    def update(task_id):
        task = Task.find_one(task_id)

        if task.get("message") == "Task not found!":
            return {"message": f"Task {task_id} not found!"}

        data = request.get_json()

        for attribute in data:
            if task[attribute] is not None:
                task[attribute] = data[attribute]
            else:
                return {"message": f"The attribute {attribute} is not found!"}
        task.push()

        users = data.get('users')
        users_msg = Task.make_connections(users, task, "IS_USER")

        if users_msg.get('message'):
            return users_msg

        return task


    @staticmethod
    def delete(task_id):
        task = Task.find_one(task_id)

        if task.get("message") == "Task not found!":
            return {"message": f"Task {task_id} not found!"}

        graph.run(f"MATCH (task:Task) WHERE ID(task)={task_id} DETACH DELETE task").evaluate()
        return {"message": f"The Task with id {task_id} has been deleted"}
