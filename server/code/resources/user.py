from flask_restful import Resource

users = [
    {'first_name': 'Andrea', 'last_name': 'Jones', 'email_address': 'andrea@jones.com'},
    {'first_name': 'Bob', 'last_name': 'Smith', 'email_address': 'bob@smith.com'},
    {'first_name': 'Catherine', 'last_name': 'Jones', 'email_address': 'catherine@jones.com'},
    {'first_name': 'David', 'last_name': 'Murphy', 'email_address': 'david@murphy.com'},

]



class Users(Resource):

    # GET method
    def get(self):
        return {'users': users}