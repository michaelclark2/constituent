import boto3

dynamodb_client = boto3.client('dynamodb')

def lambda_handler(event, context):
    print(event)

    new_user = event.get('request').get('userAttributes')
    response = dynamodb_client.put_item(
        TableName="constituent.users",
        Item={
            "uid": {"S": event.get('userName')}, 
            "username": {"S": new_user.get('email')},
            "state": {"S": new_user.get('custom:state')},
            "district": {"N": "0"},
        }
    )
    print(response)
    return event
