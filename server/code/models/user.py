import json
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
        return json.loads(self.to_json())

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()

    def add_service(self, service_object):
        self.services.append(service_object)

    def follow_organization(self, organization_object):
        self.organizations_following.append(organization_object)
    
    def follow_user(self, user_object):
        self.users_following.append(user_object)

    @classmethod
    def find_by_email(cls, email_address):
        return UserModel.objects(email_address=email_address).first()