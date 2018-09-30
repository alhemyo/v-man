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
        response = tester.post('/api/login', content_type="application/json",
                               headers={'Authorization': self.auth},
                               data=dict(Authorization=self.auth)
                               )
        data = json.loads(response.data.decode())
        self.assertTrue("token" in data.keys())

    def test_unsuccessful_login(self):
        tester = app.test_client(self)
        response = tester.post('/api/login', content_type="application/json",
                               headers={'Authorization': self.auth_fail}
                               )
        data = json.loads(response.data.decode())
        self.assertEqual(data["message"], "Could not verify")

    def test_all_users(self):
        tester = app.test_client(self)
        response = tester.get('/api/users', content_type="application/json")
        self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    if config.test:
        unittest.main()
    else:
        print("You are not in test mode. Set test=True in the config file")
