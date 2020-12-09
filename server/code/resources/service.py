from flask_restful import Resource
from models.service import ServiceModel


class Services(Resource):

    # GET method
    def get(self):
        return {'services': [service.json() for service in ServiceModel.objects()]}
