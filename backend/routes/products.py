from fastapi import APIRouter
from db.client import db
from bson import ObjectId
from fastapi import HTTPException

router = APIRouter()

@router.get("/products")
def get_products():
    products = list(db["products"].find({}, {"_id": 0}))
    return {"products": products}

@router.get("/products/{product_id}")
def get_product_by_id(product_id: str):
    collection = db["products"]
    product = collection.find_one({"_id": ObjectId(product_id)}, {"_id": 0})

    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    return product