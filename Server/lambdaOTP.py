import json
import boto3
import re

def is_valid_email(email):
    pattern = r'^\S+@\S+\.\S+$'
    return re.match(pattern, email)
    
def lambda_handler(event, context):
    email = event["mail"]
    otp = event["otp"]
    
    if not is_valid_email(email):
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid email address'})
        }
    # Send the mail.
    print(email, otp)
    mail_client = boto3.client('ses')
    response = mail_client.send_email(
      Source="vardhansai39@gmail.com",
      Destination={
        'ToAddresses': [email]
      },
      Message = {
        'Subject': {
          'Data': "OTP for velocified"
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
