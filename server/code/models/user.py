from db import db
from models.organization import OrganizationModel
from models.service import ServiceModel

class UserModel(db.Document):

    first_name = db.StringField(required=True)
    last_name = db.StringField(required=True)
    email_address = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True)
    organizations_following = db.ListField(db.ReferenceField(OrganizationModel), default=[])
    users_following = db.ListField(db.ReferenceField("self"), default=[])
    services = db.ListField(db.ReferenceField(ServiceModel), default=[])
  
    meta = {'collection': 'users'}

    def json(self):
        return self.to_json()

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()

    def add_service(self, service_object):
        self.services.append(service_object)

    def follow_organization(self, organization_object):
        self.organizations_following.append(organization_object)

    @classmethod
    def find_by_email(cls, email_address):
        return UserModel.objects(email_address=email_address).first()