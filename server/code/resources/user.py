from flask_restful import Resource
from faker import Faker
import random

#### GENERATE FAKE DATA

# initialize Faker
fake = Faker()

# initialize list
users = []

# generate users
for _ in range(10):

    # generate user
    user = {}
    user['id'] = fake.uuid4()
    user['first_name'] = fake.first_name()
    user['last_name'] = fake.last_name()
    user['email_address'] = fake.email()
    user['password'] = fake.password()
    user['address'] = fake.address()
    #user['date_of_birth'] = fake.date_of_birth()
    user['organizations_following'] = [fake.company() for _ in range(random.randint(1,3))]
    user['users_following'] = [fake.name() for _ in range(random.randint(1,3))]
    user['services'] = [fake.job() for _ in range(random.randint(1,3))]

    # append to list
    users.append(user)



class Users(Resource):

    # GET method
    def get(self):
        return {'users': users}