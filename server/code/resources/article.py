from flask_restful import Resource
from models.article import ArticleModel


class Articles(Resource):

    # GET method
    def get(self):
        return {'articles': [article.json() for article in ArticleModel.objects()]}
