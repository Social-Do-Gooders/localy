#### IMPORT
import os
# python imports
from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()


# project imports
from resources.user import Users
from resources.organization import Organizations, OrganizationName
from resources.article import Articles
from resources.fund import Funds
from resources.event import Events
from resources.service import Services
from db import db

# importing requests, json package
import requests
import json

#### APP SETUP
app = Flask(__name__)
CORS(app)
# config db to app
app.config['MONGODB_SETTINGS'] = {
    'host': os.environ.get('DB_URI')
}
# config Api to app
api = Api(app)
db.init_app(app)

NEWS_API_KEY = os.getenv("NEWS_API_KEY")

#### API
@app.route('/')
def index():
    return 'Hello World'

api.add_resource(Users, '/server/users')
api.add_resource(OrganizationName, '/server/organization/<string:name>')
api.add_resource(Organizations, '/server/organization')
api.add_resource(Articles, '/server/articles')
api.add_resource(Funds, '/server/funds')
api.add_resource(Events, '/server/events')
api.add_resource(Services, '/server/services')

# Fetch Articles
def newsJSON(newsType):

    #news api
    main_url = "https://newsapi.org/v2/everything?q="+newsType+"&sortBy=publishedAt&apiKey="+NEWS_API_KEY

    articles = []
    # fetching data in json format
    data = requests.get(main_url).json()
    # return an array of objects
    for allArticles in data['articles'] :
        news = {
            'newsTitle' : allArticles['title'],
            'newsUrl' : allArticles['url'],
            'imgUrl': allArticles['urlToImage']
        }
        articles.append(news)

    return json.dumps(articles)

@app.route('/server/news',methods=['POST'])
def news():
    query = request.json

    return newsJSON(query['type'])

# Run app
if __name__ == "__main__":
    app.run(port=5000, debug=True)
