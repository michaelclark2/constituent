import boto3

client = boto3.client('lambda')

def lambda_handler(event, context):
    return event