#### IMPORT
import os
# python imports
from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS

# project imports
from resources.user import Users
from resources.organization import Organizations
from resources.article import Articles
from resources.fund import Funds
from resources.event import Events

# importing requests, json package
import requests
import json


#### API
NEWS_API_KEY = os.getenv("NEWS_API_KEY")

#### APP SETUP
app = Flask(__name__)
CORS(app)

# config Api to app
api = Api(app)

# ROUTES
@app.route('/')
def index():
    return "Hello World"

#### API
api.add_resource(Users, '/users')
api.add_resource(Organizations, '/organizations')
api.add_resource(Articles, '/articles')
api.add_resource(Funds, '/funds')
api.add_resource(Events, '/events')

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
