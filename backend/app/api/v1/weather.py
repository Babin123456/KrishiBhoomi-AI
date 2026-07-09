from fastapi import APIRouter, Depends
from app.schemas.schemas import WeatherRecommendationResponse, WeatherAlertResponse
from app.core.dependencies import get_current_user
from app.models.models import User

from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from app.core.security import decode_token
from typing import Optional

router = APIRouter(prefix="/weather", tags=["Weather Intelligence"])
security_scheme = HTTPBearer(auto_error=False)

@router.get("/recommendations", response_model=WeatherRecommendationResponse)
async def get_weather_recommendations(
    token: Optional[HTTPAuthorizationCredentials] = Depends(security_scheme)
):
    alerts = [
        WeatherAlertResponse(
            type="warning",
            severity="warning",
            message="Heavy rain expected tomorrow afternoon — delay fertilizer application.",
            time="2 hours ago"
        ),
        WeatherAlertResponse(
            type="frost",
            severity="info",
            message="Night temperature dipping to 8 C — monitor Rabi crops.",
            time="5 hours ago"
        )
    ]
    
    recommendations = [
        "Delay fertilizer application: Heavy downpour will wash away nitrogen content.",
        "Avoid irrigation today: Saturated soil with 85% probability of precipitation.",
        "Spray pesticides tomorrow evening: Wind speeds will decrease to 5 km/h, preventing drift."
    ]

    return {
        "current_temp": 31.5,
        "humidity": 68.0,
        "wind_speed": 12.5,
        "rain_chance": 85.0,
        "condition": "Partly Cloudy",
        "alerts": alerts,
        "ai_recommendations": recommendations
    }
