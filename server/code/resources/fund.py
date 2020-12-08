from flask_restful import Resource
from faker import Faker
import random

#### GENERATE FAKE DATA

# initialize Faker
fake = Faker()

# initialize list
funds = []

# generate fund
for _ in range(20):

    # generate fund
    fund = {}
    fund['id'] = fake.uuid4()
    fund['from'] = fake.name()
    fund['to'] = fake.company()
    fund['amount'] = random.randint(10, 100)
    fund['date'] = fake.date()
    
    # append to list
    funds.append(fund)

#### RESOURCES

class Funds(Resource):

    # GET method
    def get(self):
        return {'funds': funds}