# app/schemas/item_schema.py

from pydantic import BaseModel

class ItemCreate(BaseModel):
    name: str
    price: float

class ItemUpdate(BaseModel):
    name: str
    price: float

class ItemResponse(BaseModel):
    id: int
    name: str
    price: float

    class Config:
        from_attributes = True