from flask import Flask
from flask_awscognito import AWSCognitoAuthentication

from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)

aws_auth = AWSCognitoAuthentication(app)

from app import routes
