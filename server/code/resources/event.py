from flask_restful import Resource
from faker import Faker
import random

#### GENERATE FAKE DATA

# initialize Faker
fake = Faker()

# initialize list
events = []

# generate event
for _ in range(10):

    # generate event
    event = {}
    event['id'] = fake.uuid4()
    event['name'] = fake.sentence()
    event['about'] = fake.text()
    event['organizer'] = fake.name()
    event['date'] = fake.date()

    # append to list
    events.append(event)
    

#### RESOURCES

class Events(Resource):

    # GET method
    def get(self):
        return {'events': events}