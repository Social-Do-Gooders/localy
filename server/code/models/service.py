from db import db

class ServiceModel(db.Document):

    name = db.StringField(required=True)
  
    meta = {'collection': 'services'}

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()
