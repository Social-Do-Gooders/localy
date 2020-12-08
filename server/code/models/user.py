from db import db

class UserModel(db.Document):

    first_name = db.StringField(required=True)
    last_name = db.StringField(required=True)
    email_address = db.StringField(required=True)
    password = db.StringField(required=True)
    organizations_following = db.ListField(default=[])
    users_following = db.ListField(default=[])
    services = db.ListField(default=[])
  
    meta = {'collection': 'users'}
    
  

    def json(self):
        return {**self.kwargs}