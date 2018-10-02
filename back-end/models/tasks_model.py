from flask import request
import datetime
from py2neo import Node, Relationship, remote, NodeSelector

from models.users_model import User

from config import graph


class Task:

    @staticmethod
    def find_one(task_id):
        task = graph.run(f"MATCH (task:Task) WHERE ID(task)={task_id} RETURN task").evaluate()

        if task:
            task['id'] = task_id
            return task
        else:
            return {"message": "Task not found!"}

    @staticmethod
    def find_all(project_id):
        tasks = graph.run("MATCH (task:Task) RETURN task").data()

        tasks_list = []
        for t in tasks:
            task = t['task']
            task_id = remote(task)._id
            task['id'] = task_id

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

            task_project_rel = Relationship(new_task, 'IS_TASK', project)
            graph.create(task_project_rel)

            new_task['project'] = project_id
            new_task['id'] = remote(new_task)._id

            return new_task


    @staticmethod
    def update(task_id):
        task = Task.find_one(task_id)

        if task.get("message") == "Task not found!":
            return {"message": f"Project {task_id} not found!"}

        data = request.get_json()

        for attribute in data:
            if task[attribute] is not None:
                task[attribute] = data[attribute]
            else:
                return {"message": f"The attribute {attribute} is not found!"}
        task.push()

        return task


    @staticmethod
    def delete(task_id):
        task = Task.find_one(task_id)

        if task.get("message") == "Task not found!":
            return {"message": f"Task {task_id} not found!"}

        graph.run(f"MATCH (task:Task) WHERE ID(task)={task_id} DETACH DELETE task").evaluate()
        return {"message": f"The Task with id {task_id} has been deleted"}
