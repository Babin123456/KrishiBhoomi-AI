from fastapi import APIRouter, Depends
from app.schemas.schemas import MarketPriceResponse
from app.core.dependencies import get_current_user
from app.models.models import User

router = APIRouter(prefix="/market", tags=["Market Intelligence"])

@router.get("/prices", response_model=MarketPriceResponse)
async def get_market_prices(crop: str = "Wheat", current_user: User = Depends(get_current_user)):
    mandis = [
        {"name": "Lucknow Mandi", "price": 2450.0, "distance": "12 km"},
        {"name": "Kanpur Mandi", "price": 2480.0, "distance": "78 km"},
        {"name": "Sitapur Mandi", "price": 2410.0, "distance": "54 km"}
    ]
    
    history = [
        {"date": "Jun 20", "price": 2300.0},
        {"date": "Jun 25", "price": 2350.0},
        {"date": "Jun 30", "price": 2380.0},
        {"date": "Jul 05", "price": 2450.0}
    ]

    return {
        "crop": crop,
        "current_price": 2450.0,
        "predicted_price": 2580.0,
        "trend": "Up",
        "mandis": mandis,
        "history": history,
        "explanation": "Wheat demand is rising steadily across Uttar Pradesh due to low buffer stocks and increased procurement. Mandi prices in Kanpur are currently showing a Rs 30 premium. Prices are predicted to peak at Rs 2580/quintal within 14 days. Selling 60% of your harvest now and retaining 40% is recommended to maximize gains."
    }
