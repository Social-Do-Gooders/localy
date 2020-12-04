# IMPORT
from flask import Flask

# APP SETUP
app = Flask(__name__)

# ROUTES
@app.route('/')
def index():
    return "Hello World"


# Run app
if __name__ == "__main__":
    app.run(port=5000, debug=True)