from app import app

from app.routes import auth


@app.route('/')
def index():
    return 'Hello World!'