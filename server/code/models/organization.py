from db import db

class OrganizationModel(db.Document):

    name = db.StringField(required=True)
    owner = db.StringField(required=True)
    address = db.StringField(required=True, unique=True)
    about = db.StringField(required=True)
    followers = db.ListField(default=[])
    image = db.StringField()
    organization_type = db.StringField()
  
    meta = {'collection': 'organizations'}

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()
