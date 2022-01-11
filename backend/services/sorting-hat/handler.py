import boto3

dynamodb_client = boto3.client('dynamodb')

def lambda_handler(event, context):

    response = dynamodb_client.put_item(
        TableName="users",
        Item={"uid": {"S": event.get('userName')}}
    )
    print(response)
    return event