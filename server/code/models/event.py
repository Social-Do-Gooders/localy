from db import db

class EventModel(db.Document):

    name = db.StringField(required=True)
    organizer = db.StringField(required=True)
    location = db.StringField(required=True)
    about = db.StringField(required=True)
    attendees = db.ListField(default=[])
    date = db.DateTimeField()
    event_type = db.StringField()
  
    meta = {'collection': 'events'}

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()
