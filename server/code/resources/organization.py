from flask_restful import Resource
from models.organization import OrganizationModel


class Organizations(Resource):
     
     # GET method
     def get(self):
        return {'organizations': [organization.json() for organization in OrganizationModel.objects()]}
