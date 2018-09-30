import unittest
import json
from base64 import b64encode
import jwt
import config
from run import app
from models.users_model import User

from config import graph


class LoginTestCase(unittest.TestCase):
    default_username = "ignat.petrov@vertigo.com.mk"
    default_password = "123"
    auth = 'Basic ' + b64encode((default_username + ":" + default_password).encode('utf-8')).decode('utf-8')
    auth_fail = 'Basic ' + b64encode(("FakeUser" + ":" + "FakePassword").encode('utf-8')).decode('utf-8')

    def SetUp(self):
        graph.delete_all()
        User.add({"email": self.default_username,
                  "name": "Ignat",
                  "surname": "Petrov"
                  })

    def test_successful_login(self):
        self.SetUp()
        tester = app.test_client(self)
        response = tester.post('/api/login',
                               headers={'Authorization': self.auth}
                               )
        data = json.loads(response.data.decode())
        self.assertTrue("token" in data.keys())

    def test_unsuccessful_login(self):
        tester = app.test_client(self)
        response = tester.post('/api/login',
                               headers={'Authorization': self.auth_fail}
                               )
        data = json.loads(response.data.decode())
        self.assertEqual(data["message"], "Could not verify")

    def test_all_users(self):
        tester = app.test_client(self)
        response = tester.get('/api/users')
        data = json.loads(response.data.decode())
        data_email = data['Users'][0]["email"]
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data_email, self.default_username)

    def test_user_self_not_signed(self):
        tester = app.test_client(self)
        response = tester.get('/api/users/self')
        self.assertEqual(response.status_code, 401)

    def test_user_self_signed(self):
        tester = app.test_client(self)
        response = tester.post('/api/login',
                               headers={'Authorization': self.auth}
                               )
        data = json.loads(response.data.decode())
        token = data['token']

        response2 = tester.get('/api/users/self',
                               headers={'x-access-token': token})
        self.assertEqual(response2.status_code, 200)

    def test_post_user(self):
        graph.delete_all()
        tester = app.test_client(self)
        body = {"email": "mail@yahoo.com",
                "name": "Pero",
                "surname": "Perov"}
        response = tester.post('/api/users',
                               headers={'Content-Type': 'application/json'},
                               data=json.dumps(body))
        data = json.loads(response.data.decode())
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['email'], 'mail@yahoo.com')

    def test_patch_user(self):
        self.SetUp()
        tester = app.test_client(self)
        body = {"name": "ChangedName"
                }
        id = User.find_all()[0]['id']
        response = tester.patch(f'/api/users/{id}',
                                headers={'Content-Type': 'application/json'},
                                data=json.dumps(body))
        data = json.loads(response.data.decode())
        print(data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['name'], 'ChangedName')

    def test_one_user_dont_exist(self):
        self.SetUp()
        tester = app.test_client(self)
        response = tester.post('/api/login',
                               headers={'Authorization': self.auth}
                               )
        data = json.loads(response.data.decode())
        token = data['token']

        id = User.find_all()[0]['id']
        response = tester.get(f'/api/users/{64512341235126431}',
                              headers={'x-access-token': token}
                              )
        data = json.loads(response.data.decode())
        self.assertEqual(data['message'], "User not found!")


if __name__ == '__main__':
    if config.test:
        unittest.main()
    else:
        print("You are not in test mode. Set test=True in the config file")
