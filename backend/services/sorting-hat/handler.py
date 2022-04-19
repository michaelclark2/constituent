import json
import requests

import boto3

dynamodb_client = boto3.client('dynamodb')
secrets_client = boto3.client('secretsmanager')

def lambda_handler(event, context):
    print(event)
    new_user = event.get('request').get('userAttributes')

    try:
        secret_res = secrets_client.get_secret_value(SecretId="google_civics_api_key")
        google_civics_api_key = json.loads(secret_res['SecretString']).get('GOOGLE_CIVICS_API_KEY')
    except:
        raise

    try:
        query = {
            'key': google_civics_api_key,
            'address': new_user.get('address'),
            'roles': 'legislatorLowerBody'
        }
        response = requests.get("https://www.googleapis.com/civicinfo/v2/representatives", params=query)
        response.raise_for_status()

        normalized_address = response.json().get('normalizedInput')
        divisions = response.json().get('divisions')

        congressional_district = 0
        for key in divisions.keys():
            if "/cd:" in key:
                congressional_district = key.split(":")[-1] * 1

    except requests.exceptions.HTTPError:
        raise Exception(f"Invalid address: {new_user.get('address')}")

    response = dynamodb_client.put_item(
        TableName="constituent.users",
        Item={
            "uid": {"S": event.get('userName')},
            "username": {"S": new_user.get('email')},
            "state": {"S": normalized_address.get('state')},
            "district": {"N": congressional_district},
        }
    )
    print(response)
    return event
