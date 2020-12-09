from db import db

class ServiceModel(db.Document):

    name = db.StringField(required=True)
  
    meta = {'collection': 'services'}

    def json(self):
        return self.to_json()

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()

    @classmethod
    def find_by_name(cls, name):
        return ServiceModel.objects(name=name).first()
