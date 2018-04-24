from flask import Flask
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import Column, Integer, String, Boolean, Table, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine

Base = declarative_base()


user_project = Table('user_project',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('user.id')),
    Column('project_id', Integer, ForeignKey('project.id'))
    )


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    username = Column(String(255), unique=True, nullable=False)
    email = Column(String(255), unique=True)
    password = Column(String(255), nullable=False)
    position = Column(String(50))
    is_admin = Column(Boolean)
    status = Column(String(50))
    avatar = Column(String(255))
    projects = relationship("Project", secondary=user_project)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


    @property
    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'email': self.email,
            'position': self.position,
            'is_admin': self.is_admin,
            'status': self.status,
            'avatar': self.avatar,
            'projects': [s.serialize for s in self.projects]

        }

    def __repr__(self):
        return self.username


class Project(Base):
    __tablename__ = "project"

    id = Column(Integer, primary_key=True)
    name = Column(String(255), unique=True, nullable=False)
    users = relationship('User', secondary=user_project)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            #'users': [s.serialize for s in self.users]
        }

engine = create_engine('sqlite:///v-manDB.db')
Base.metadata.create_all(engine)
