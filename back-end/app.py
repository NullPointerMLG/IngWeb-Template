from flask import Flask
from flask_restful import Api
from flask_cors import CORS
import mongoengine
from config import MONGO_URL

mongoengine.connect(alias="default", host=MONGO_URL)

APP = Flask(__name__)
CORS(APP)
API = Api(APP)


# Endpoints
#API.add_resource(Events, '/events')
#API.add_resource(Event, '/events/<string:id>')

if __name__ == '__main__':
    print("Deploying service in port 5000")
    APP.run(host="0.0.0.0", port=5000, debug=True)
