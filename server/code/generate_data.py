from faker import Faker
import random

from models.user import UserModel
from models.organization import OrganizationModel
from models.event import EventModel


# initialize Faker
fake = Faker()

# initialize list
users = []

# generate users
for _ in range(20):

    # generate user
    user = {}
    user['first_name'] = fake.first_name()
    user['last_name'] = fake.last_name()
    user['email_address'] = f"{user['first_name'].lower()}@{user['last_name'].lower()}.com"
    user['password'] = "password"
    user['organizations_following'] = []
    user['users_following'] = []
    user['services'] = []
    #user['organizations_following'] = [fake.company() for _ in range(random.randint(1,3))]
    #user['users_following'] = [fake.name() for _ in range(random.randint(1,3))]
    #user['services'] = [fake.job() for _ in range(random.randint(1,3))]

    # append to list
    user_model = UserModel(**user)
    users.append(user_model)

# initialize list
organizations = []
organization_type = ['business', 'school', 'hospital', 'orphanage', 'other']

# generate organizations
for _ in range(10):

    # generate organization
    organization = {}
    organization['name'] = fake.company()
    #organization['owner'] = fake.name()
    organization['address'] = fake.address()
    organization['about'] = fake.text()
    organization['followers'] = []
    #organization['followers'] = [fake.name() for _ in range(random.randint(1, 5))]
    organization['image_url'] = fake.image_url()
    organization['organization_type'] = organization_type[random.randint(0, len(organization_type)-1)]

    # append to list
    organization_model = OrganizationModel(**organization)
    organizations.append(organization_model)




# initialize list
events = []
event_type = ['tech', 'science', 'finance', 'artisan skills', 'health', 'education', 'art', 'other']

# generate event
for _ in range(10):

    # generate event
    event = {}
    event['name'] = fake.sentence()
    event['organizer'] = fake.name()
    event['location'] = fake.address()
    event['about'] = fake.text()
    event['attendees'] = []
    event['date'] = fake.date()
    event['event_type'] = event_type[random.randint(0, len(event_type)-1)]


    # append to list
    event_model = EventModel(**event)
    events.append(event_model)
    

#### RESOURCES


print([f"{user.first_name} {user.last_name}" for user in users])
print('\n')
print([organization.name for organization in organizations])
print('\n')
print([event.name for event in events])
