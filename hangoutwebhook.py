from json import dumps
import os
from dotenv import load_dotenv
from httplib2 import Http

load_dotenv()

def main():
    url = os.getenv("WEB_HOOK_HANGOUT")
    bot_message = {
        'text' : 'Hello from a Python script!'
    }

    message_headers = {'Content-Type': 'application/json; charset=UTF-8'}

    http_obj = Http()

    response = http_obj.request(
        uri=url,
        method='POST',
        headers=message_headers,
        body=dumps(bot_message),
    )

    print(response)

if __name__ == '__main__':
    main()
