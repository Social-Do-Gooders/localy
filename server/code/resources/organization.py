from flask_restful import Resource
from models.organization import OrganizationModel

class OrganizationName(Resource):

   # GET method
   def get(self, name):
      org = OrganizationModel.find_by_name(name)
      if org:
         return org.json()
      return {'message': 'Organization not found'}, 404

class Organizations(Resource):

     # GET method
     def get(self):
        return [organization.json() for organization in OrganizationModel.objects()]
