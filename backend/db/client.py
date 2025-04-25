from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os

# Load variables from .env file
load_dotenv()

# Get URI from environment
MONGODB_URI = os.getenv("MONGODB_URI")
print(MONGODB_URI)

# Connect to MongoDB Atlas using Server API
client = MongoClient(MONGODB_URI, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("✅ Pinged your deployment. Successfully connected to MongoDB!")
except Exception as e:
    print("❌ Failed to connect to MongoDB:", e)

# Now expose the database
db = client["eCommerceDB"]