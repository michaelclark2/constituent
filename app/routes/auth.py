from flask import redirect, request
from flask.json import jsonify

from app import app, aws_auth

@app.route('/login')
def login():
    return redirect(aws_auth.get_sign_in_url())

@app.route('/redirect')
def aws_redirect():
    access_token = aws_auth.get_access_token(request.args)
    return jsonify({"access_token": access_token})


@app.route('/auth_test')
@aws_auth.authentication_required
def auth_test():
    claims = aws_auth.claims
    return jsonify({'claims': claims})