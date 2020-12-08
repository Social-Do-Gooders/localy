from db import db

class UserModel(db.Document):
    
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def json(self):
        return {'name': self.name, 'email': self.email}