from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Use your actual PostgreSQL credentials here
DATABASE_URL = "postgresql://postgres:dhia@localhost:5432/myfastapi_db"

engine = create_engine(DATABASE_URL,echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
