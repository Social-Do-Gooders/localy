from flask_restful import Resource
from faker import Faker

#### CLASSES

class Organizations(Resource):
     
     # GET method
     def get(self):
         return {'organizations': []}