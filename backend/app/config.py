import os


class Config:

    AWS_DEFAULT_REGION = "us-east-1"
    AWS_COGNITO_DOMAIN = os.environ.get(
        "AWS_COGNITO_DOMAIN", "https://constituent.auth.us-east-1.amazoncognito.com"
    )
    AWS_COGNITO_USER_POOL_ID = os.environ.get("AWS_COGNITO_USER_POOL_ID")
    AWS_COGNITO_USER_POOL_CLIENT_ID = os.environ.get("AWS_COGNITO_USER_POOL_CLIENT_ID")
    AWS_COGNITO_USER_POOL_CLIENT_SECRET = os.environ.get(
        "AWS_COGNITO_USER_POOL_CLIENT_SECRET"
    )

    CORS_HEADERS = "Content-Type"
