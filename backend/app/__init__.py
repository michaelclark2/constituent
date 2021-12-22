from flask import Flask
from flask_awscognito import AWSCognitoAuthentication
from flask_cors import CORS

from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
aws_auth = AWSCognitoAuthentication(app)

from app import routes
