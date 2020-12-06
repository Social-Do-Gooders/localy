from flask_restful import Resource
from faker import Faker
import random

#### GENERATE FAKE DATA

# initialize Faker
fake = Faker()

# initialize list
articles = []

# generate articles
for _ in range(10):

    # generate article
    article = {}
    article['id'] = fake.uuid4()
    article['title'] = fake.sentence()
    article['content'] = fake.text()
    article['created_date'] = fake.date()
    article['author'] = fake.name()
    
    # append to list
    articles.append(article)

#### RESOURCES

class Articles(Resource):

    # GET method
    def get(self):
        return {'articles': articles}