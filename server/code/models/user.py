from db import db

class UserModel(db.Document):

    first_name = db.StringField(required=True)
    last_name = db.StringField(required=True)
    email_address = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True)
    organizations_following = db.ListField(default=[])
    users_following = db.ListField(default=[])
    services = db.ListField(default=[])
  
    meta = {'collection': 'users'}

    def json(self):
        return self.to_json()

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()

    @classmethod
    def find_by_email(cls, email_address):
        return UserModel.objects(email_address=email_address).first()