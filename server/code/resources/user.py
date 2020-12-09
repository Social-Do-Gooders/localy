from flask_restful import Resource
from models.user import UserModel


class Users(Resource):

    # GET method
    def get(self):
        return {'users': [user.json() for user in UserModel.objects()]}
