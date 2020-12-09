from db import db

class EventModel(db.Document):

    name = db.StringField(required=True)
    organizer = db.StringField()
    location = db.StringField()
    about = db.StringField()
    attendees = db.ListField(default=[])
    date = db.DateTimeField()
    event_type = db.StringField(default='other', choices=['tech', 'science', 'finance', 'artisan skills', 'health', 'education', 'art', 'other'])
  
    meta = {'collection': 'events'}

    def json(self):
        return self.to_json()

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()
