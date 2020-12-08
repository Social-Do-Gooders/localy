#### IMPORT

# python imports
from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv
load_dotenv()
import os

# project imports
from resources.user import Users
from resources.organization import Organizations
from resources.article import Articles
from resources.fund import Funds
from resources.event import Events
from db import db
from models.user import UserModel

#### APP SETUP
app = Flask(__name__)

# config db to app
app.config['MONGODB_SETTINGS'] = {
    'host': os.environ.get('DB_URI')
}

# config Api to app
api = Api(app)

# ROUTES
@app.route('/')
def index():
    user = UserModel(first_name='alice', last_name='smith', email_address='alice@smith.com', password='password')
    user.save()
    return {'Users': UserModel.objects()}

#### API
api.add_resource(Users, '/users')
api.add_resource(Organizations, '/organizations')
api.add_resource(Articles, '/articles')
api.add_resource(Funds, '/funds')
api.add_resource(Events, '/events')


# Run app
if __name__ == "__main__":
    db.init_app(app)
    app.run(port=5000, debug=True)