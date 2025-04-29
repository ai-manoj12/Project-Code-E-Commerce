from fastapi import APIRouter
from db.client import db
from bson import ObjectId
from fastapi import HTTPException
from pydantic import BaseModel
from typing import Optional


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

class UserUpdate(BaseModel):
    username: Optional[str] = None
    password: Optional[str] = None

@router.put("/users/{user_id}")
def update_user(user_id: str, updated_user: UserUpdate):
    collection = db["users"]

    # Try to convert user_id to ObjectId
    try:
        object_id = ObjectId(user_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid user ID")
    
    update_data = {k: v for k, v in updated_user.dict().items() if v is not None}

    if not update_data:
        raise HTTPException(status_code=400, detail="No fields provided for update")


    # Attempt to update the product
    result = collection.update_one(
        {"_id": object_id},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")

    return {"message": "User updated successfully"}