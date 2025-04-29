from fastapi import APIRouter
from db.client import db
from bson import ObjectId
from fastapi import HTTPException


router = APIRouter()

@router.get("/orders")
def get_orders():
    orders = list(db["orders"].find({}, {"_id": 0}))
    return {"orders": orders}

@router.get("/orders/{order_id}")
def get_order_by_id(order_id: str):
    collection = db["orders"]
    order = collection.find_one({"_id": ObjectId(order_id)}, {"_id": 0})

    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    return order

