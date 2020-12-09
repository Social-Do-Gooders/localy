#### IMPORT
import os
# python imports
from flask import Flask
from flask_restful import Api

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
SECRET_API_KEY = os.getenv("REACT_APP_NEWS_API_KEY")
#### APP SETUP
app = Flask(__name__)

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
    main_url = "https://newsapi.org/v2/everything?q="+newsType+"&sortBy=publishedAt&apiKey="+SECRET_API_KEY
    
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
    

    return articles

@app.route('/news/<query>')
def news(query):
    print('query =',str(query),sep=' ')
    return newsJSON(query)

#Incase of no query provided
@app.route('/news/')
def emptyquery():
    print('empty query')
    return json.dumps([{
        'status' : 'No response',
        'error' : 'Empty query'
    }])

# Run app
if __name__ == "__main__":
    app.run(port=5000, debug=True)