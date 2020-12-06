#### IMPORT

# python imports
from flask import Flask
from flask_restful import Api

# project imports
from resources.user import Users
from resources.organization import Organizations
from resources.article import Articles
from resources.fund import Funds

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


# Run app
if __name__ == "__main__":
    app.run(port=5000, debug=True)