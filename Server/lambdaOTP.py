import json
import boto3
import re

def is_valid_email(email):
    pattern = r'^\S+@\S+\.\S+$'
    return re.match(pattern, email)
    
def lambda_handler(event, context):
    body = json.loads(event['body'])
    email = body["email"]
    otp = body["otp"]
    
    if not is_valid_email(email):
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid email address'})
        }

    mail_client = boto3.client('ses')
    response = mail_client.send_email(
      Source="no-reply@velocified.net",
      Destination={
        'ToAddresses': [email]
      },
      Message = {
        'Subject': {
          'Data': "OTP for verification of velocified account"
        },
        'Body': {
          'Text': {
            'Data': f"Your OTP is: {otp}"
          }
        }
      }
    )
  
    return {
        'statusCode': 200,
        "data": {
          "email": email,
          "otp": otp,
        },
        "response": response
    }
