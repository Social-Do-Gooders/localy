from db import db

class ArticleModel(db.Document):

    title = db.StringField(required=True)
    content = db.StringField()
    author = db.StringField()
    date = db.DateTimeField()
    article_type = db.StringField(default='other', choices=['business news', 'tech news', 'science news', 'other'])
   
    meta = {'collection': 'articles'}

    def json(self):
        return self.to_json()

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()
