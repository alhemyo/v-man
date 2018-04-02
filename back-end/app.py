from flask import Flask, render_template, request, redirect, url_for, json, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models import Base, User

app = Flask(__name__)

engine = create_engine('sqlite:///v-manDB.db')
Base.metadata.bind = engine

DBsession = sessionmaker(bind=engine)
session = DBsession()


@app.route('/')
def index():
    return "Hello"

@app.route('/api/users_list')
def users_list():
    users = session.query(User).all()
    return jsonify(Users=[u.serialize for u in users])

@app.route('/api/users_add', methods=['GET', 'POST'])
def users_add():
    if request.method == 'POST':
        try:
            if request.form['is_admin']:
                is_admin = True
        except:
            is_admin = False
        new_user = User(username=request.form['username'],
                        email=request.form['email'],
                        password=request.form['password'],
                        position=request.form['position'],
                        is_admin=is_admin,
                        status=request.form['status'],
                        avatar=request.form['avatar']
                        )
        session.add(new_user)
        session.commit()
        return redirect(url_for('users_list'))

    elif request.method == 'GET':
        return render_template('users_add.html')

@app.route('/api/users/<int:user_id>')
def user_detail(user_id):
    user = session.query(User).filter_by(id=user_id).one()
    return render_template('user_detail.html', user=user)


if __name__ == '__main__':
    app.run(debug=True)
