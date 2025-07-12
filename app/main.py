from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from app.routers import item_router
from app.database import Base, engine
from app.models import item


Base.metadata.create_all(bind=engine)

class Item(BaseModel):
    id: int
    name: str
    price: float


app = FastAPI()
app.include_router(item_router.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/items/", response_model=List[Item])
def read_items():
    return [
        {"id": 1, "name": "Laptop", "price": 900},
        {"id": 2, "name": "Phone", "price": 500}
    ]
