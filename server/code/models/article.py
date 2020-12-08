from db import db

class ArticleModel(db.Document):

    title = db.StringField(required=True)
    content = db.StringField(required=True)
    author = db.StringField(required=True)
    date = db.DateTimeField()
    article_type = db.StringField()
   
    meta = {'collection': 'articles'}

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()
