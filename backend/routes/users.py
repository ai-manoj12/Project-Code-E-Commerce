from fastapi import APIRouter
from db.client import db
from bson import ObjectId
from fastapi import HTTPException


router = APIRouter()

@router.get("/users")
def get_users():
    users = list(db["users"].find({}, {"_id": 0}))
    return {"users": users}

@router.get("/users/{user_id}")
def get_user_by_id(user_id: str):
    collection = db["users"]
    user = collection.find_one({"_id": ObjectId(user_id)}, {"_id": 0})

    if not user:
        raise HTTPException(status_code=404, detail="Order not found")

    return user