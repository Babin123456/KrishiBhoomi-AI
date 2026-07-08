from fastapi import APIRouter, Depends
from app.schemas.schemas import SatelliteDataResponse
from app.core.dependencies import get_current_user
from app.models.models import User
import datetime

router = APIRouter(prefix="/satellite", tags=["Satellite Monitoring"])

@router.get("/ndvi", response_model=SatelliteDataResponse)
async def get_satellite_ndvi(current_user: User = Depends(get_current_user)):
    history = [
        {"date": "May 10", "ndvi": 0.52, "evi": 0.41, "moisture": 0.35},
        {"date": "May 24", "ndvi": 0.58, "evi": 0.44, "moisture": 0.38},
        {"date": "Jun 07", "ndvi": 0.61, "evi": 0.47, "moisture": 0.40},
        {"date": "Jun 21", "ndvi": 0.68, "evi": 0.52, "moisture": 0.43},
        {"date": "Jul 05", "ndvi": 0.72, "evi": 0.55, "moisture": 0.42}
    ]

    return {
        "ndvi": 0.72,
        "evi": 0.55,
        "moisture": 0.42,
        "timestamp": datetime.datetime.utcnow(),
        "history": history
    }
