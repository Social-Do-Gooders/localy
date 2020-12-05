from flask_restful import Resource

class UserList(Resource):

    # GET method
    def get(self):
        return {'users': ['Andrea', 'Bob', 'Catherine', 'David']}