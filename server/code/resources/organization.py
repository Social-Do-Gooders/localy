from flask_restful import Resource
from faker import Faker
import random

#### GENERATE FAKE DATA

# initialize Faker
fake = Faker()

# initialize list
organizations = []

# generate organizations
for _ in range(10):

    # generate organization
    organization = {}
    organization['id'] = fake.uuid4()
    organization['name'] = fake.company()
    organization['owner'] = fake.name()
    organization['address'] = fake.address()
    organization['about'] = fake.paragraph()
    organization['followers'] = [fake.name() for _ in range(random.randint(1, 5))]

    # append to list
    organizations.append(organization)

#### CLASSES

class Organizations(Resource):
     
     # GET method
     def get(self):
         return {'organizations': organizations}