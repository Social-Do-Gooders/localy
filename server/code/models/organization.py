import json
from db import db

class OrganizationModel(db.Document):

    name = db.StringField(required=True, unique=True)
    owner = db.StringField()
    address = db.StringField()
    about = db.StringField()
    followers = db.ListField(default=[])
    image_url = db.StringField()
    organization_type = db.StringField(default='other', choices=['business', 'school', 'hospital', 'orphanage', 'other'])
  
    meta = {'collection': 'organizations'}

    def json(self):
        return json.loads(self.to_json())

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()

    @classmethod
    def find_by_name(cls, name):
        return OrganizationModel.objects(name=name).first()