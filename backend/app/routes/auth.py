from flask import redirect, request
from flask.json import jsonify
from flask_awscognito.utils import extract_access_token

from app import app, aws_auth


@app.route("/auth_test")
@aws_auth.authentication_required
def auth_test():
    claims = aws_auth.claims
    user_info = aws_auth.get_user_info(extract_access_token(request.headers))
    return jsonify({"claims": claims, "user_info": user_info})
