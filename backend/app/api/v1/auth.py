from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.db.session import get_db
from app.models.models import User, Farm, Field
from app.schemas.schemas import UserCreate, UserLogin, Token, UserResponse
from app.core.security import get_password_hash, verify_password, create_access_token
import datetime

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model=Token)
async def register(user_in: UserCreate, db: AsyncSession = Depends(get_db)):
    # Check if user already exists
    result = await db.execute(select(User).where(User.email == user_in.email))
    existing_user = result.scalars().first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A user with this email address already exists."
        )
    
    # Hash password and create user
    hashed_pwd = get_password_hash(user_in.password)
    new_user = User(
        name=user_in.name,
        email=user_in.email,
        phone=user_in.phone,
        password_hash=hashed_pwd,
        role=user_in.role,
        language=user_in.language
    )
    db.add(new_user)
    await db.flush() # Populate ID

    # Create dummy Farm/Field for the farmer to populate dashboard initially
    if new_user.role == "farmer":
        dummy_farm = Farm(
            user_id=new_user.id,
            name="My Main Farm",
            size=5.0,
            soil_type="Alluvial",
            location_lat=26.8467,
            location_lng=80.9462
        )
        db.add(dummy_farm)
        await db.flush()
        
        dummy_field = Field(
            farm_id=dummy_farm.id,
            name="Field A (Wheat)",
            crop_type="Wheat",
            area=5.0
        )
        db.add(dummy_field)

    await db.commit()
    await db.refresh(new_user)

    # Generate token
    token_data = {"sub": str(new_user.id), "role": new_user.role}
    access_token = create_access_token(data=token_data)
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": new_user
    }

@router.post("/login", response_model=Token)
async def login(user_in: UserLogin, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.email == user_in.email))
    user = result.scalars().first()
    if not user or not verify_password(user_in.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password."
        )
    
    token_data = {"sub": str(user.id), "role": user.role}
    access_token = create_access_token(data=token_data)
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user
    }
