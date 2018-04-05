from flask import Flask
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import Column, Integer, String, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine

Base = declarative_base()


class User(UserMixin, Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    username = Column(String(255), unique=True, nullable=False)
    email = Column(String(255), unique=True)
    password = Column(String(255), nullable=False)
    position = Column(String(50))
    is_admin = Column(Boolean)
    status = Column(String(50))
    avatar = Column(String(255))


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
            'avatar': self.avatar

        }

    def __repr__(self):
        return self.username



engine = create_engine('sqlite:///v-manDB.db')
Base.metadata.create_all(engine)
