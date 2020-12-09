from faker import Faker
import random

from models.user import UserModel
from models.organization import OrganizationModel
from models.event import EventModel
from models.article import ArticleModel
from models.service import ServiceModel


# initialize Faker
fake = Faker()

# initialize list
users = []

# generate users
for _ in range(100):

    # generate user
    user = {}
    user['first_name'] = fake.first_name()
    user['last_name'] = fake.last_name()
    user['email_address'] = f"{user['first_name'].lower()}@{user['last_name'].lower()}.com"
    user['password'] = "password"
    user['organizations_following'] = [fake.company() for _ in range(random.randint(1,3))]
    user['users_following'] = [fake.name() for _ in range(random.randint(1,3))]
    user['services'] = [fake.job() for _ in range(random.randint(1,3))]

    # append to list
    user_model = UserModel(**user)
    users.append(user_model)

# initialize list
organizations = []
organization_type = ['business', 'school', 'hospital', 'orphanage', 'other']

# generate organizations
for _ in range(50):

    # generate organization
    organization = {}
    organization['name'] = fake.company()
    organization['owner'] = fake.name()
    organization['address'] = fake.address()
    organization['about'] = fake.text()
    organization['followers'] = []
    organization['followers'] = [fake.name() for _ in range(random.randint(1, 5))]
    organization['image_url'] = fake.image_url()
    organization['organization_type'] = organization_type[random.randint(0, len(organization_type)-1)]

    # append to list
    organization_model = OrganizationModel(**organization)
    organizations.append(organization_model)




# initialize list
events = []
event_type = ['tech', 'science', 'finance', 'artisan skills', 'health', 'education', 'art', 'other']

# generate event
for _ in range(50):

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
    

# initialize list
articles = []
article_type = ['business news', 'tech news', 'science news', 'other']

# generate articles
for _ in range(50):

    # generate article
    article = {}
    article['title'] = fake.sentence()
    article['content'] = fake.text()
    article['author'] = fake.name()
    article['date'] = fake.date()
    article['article_type'] = article_type[random.randint(0, len(article_type)-1)]

    
    # append to list
    article_model = ArticleModel(**article)
    articles.append(article_model)

# initialize list
services = []

# generate services
for _ in range(100):
    service = {}
    service['name'] = fake.job()

    # append to list
    service_model = ServiceModel(**service)
    services.append(service_model)




#print("Users")
#print([f"{user.first_name} {user.last_name}" for user in users])
#print('\n')
#print("Organizations")
#print([organization.name for organization in organizations])
#print('\n')
#print("Events")
#print([event.name for event in events])
#print('\n')
#print("Articles")
#print([article.title for article in articles])
#print('\n')
#print("Services")
#print([service.name for service in services])