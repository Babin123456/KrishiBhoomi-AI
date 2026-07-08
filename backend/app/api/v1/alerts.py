from fastapi import APIRouter, Depends
from typing import List
from app.schemas.schemas import AlertResponse
from app.core.dependencies import get_current_user
from app.models.models import User
import datetime

router = APIRouter(prefix="/alerts", tags=["Alerts System"])

@router.get("", response_model=List[AlertResponse])
async def get_user_alerts(current_user: User = Depends(get_current_user)):
    return [
        {
            "id": 1,
            "type": "Weather",
            "severity": "warning",
            "message": "Heavy rain expected tomorrow — delay fertilizer application.",
            "is_read": False,
            "created_at": datetime.datetime.utcnow()
        },
        {
            "id": 2,
            "type": "Disease",
            "severity": "danger",
            "message": "High humidity indicates elevated Blight risk. Inspect lower leaves.",
            "is_read": False,
            "created_at": datetime.datetime.utcnow()
        },
        {
            "id": 3,
            "type": "Market",
            "severity": "success",
            "message": "Wheat price rose 5% in Lucknow Mandi. Selling recommended.",
            "is_read": True,
            "created_at": datetime.datetime.utcnow() - datetime.timedelta(days=1)
        }
    ]
