from flask_restful import Resource

from models.event import EventModel


class Events(Resource):

    # GET method
    def get(self):
        return {'events': [event.json() for event in EventModel.objects()]}
