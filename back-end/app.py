from flask import Flask, render_template, request, redirect, url_for, json, jsonify
from flask_login import LoginManager, current_user, login_user, logout_user, login_required
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models import Base, User

app = Flask(__name__)
app.secret_key = 'supersecretkey'

engine = create_engine('sqlite:///v-manDB.db')
Base.metadata.bind = engine

DBsession = sessionmaker(bind=engine)
session = DBsession()

login = LoginManager(app)
login.login_view = 'user_login'

@login.user_loader
def load_user(id):
    return session.query(User).get(int(id))

@app.route('/')
def index():
    return "Hello"

@app.route('/api/login', methods=['GET', 'POST'])
def user_login():
    if current_user.is_authenticated:
        return redirect(url_for('users_list'))
    if request.method == 'POST':
        user = session.query(User).filter_by(username=request.form['username']).first()
        if user is None or not user.check_password(request.form['password']):
            # print("Wrong Password")
            # return redirect(url_for('user_login'))
            return '{"error": "username or password is not correct!"}'
        login_user(user)
        return '{"message": "Login Successful"}'
    elif request.method == 'GET':
        return render_template('user_login.html')

@app.route('/api/logout')
def user_logout():
    logout_user()
    return '{"message": "You have logged out"}'

@app.route('/api/users_list')
@login_required
def users_list():
    users = session.query(User).all()
    return jsonify(Users=[u.serialize for u in users])

@app.route('/api/users_add', methods=['GET', 'POST'])
@login_required
def users_add():
    if request.method == 'POST':
        try:
            if request.form['is_admin']:
                is_admin = True
        except:
            is_admin = False
        new_user = User(username=request.form['username'],
                        email=request.form['email'],
                        position=request.form['position'],
                        is_admin=is_admin,
                        status=request.form['status'],
                        avatar=request.form['avatar']
                        )
        new_user.set_password(request.form['password'])
        session.add(new_user)
        session.commit()
        return redirect(url_for('users_list'))

    elif request.method == 'GET':
        return render_template('users_add.html')

@app.route('/api/users/<int:user_id>')
@login_required
def user_detail(user_id):
    user = session.query(User).filter_by(id=user_id).one()
    return jsonify(user.serialize)


if __name__ == '__main__':
    app.run(debug=True)
