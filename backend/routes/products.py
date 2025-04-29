from fastapi import APIRouter
from db.client import db
from bson import ObjectId
from fastapi import HTTPException
from pydantic import BaseModel
from typing import Optional




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



class ProductUpdate(BaseModel):
    product_name: Optional[str] = None
    price: Optional[float] = None
    description: Optional[str] = None
    seller: Optional[str] = None

@router.put("/products/{product_id}")
def update_product(product_id: str, updated_product: ProductUpdate):
    collection = db["products"]

    # Try to convert product_id to ObjectId
    try:
        object_id = ObjectId(product_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid product ID")
    
    update_data = {k: v for k, v in updated_product.dict().items() if v is not None}

    if not update_data:
        raise HTTPException(status_code=400, detail="No fields provided for update")


    # Attempt to update the product
    result = collection.update_one(
        {"_id": object_id},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")

    return {"message": "Product updated successfully"}