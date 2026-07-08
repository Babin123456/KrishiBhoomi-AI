from fastapi import APIRouter, Depends
from app.schemas.schemas import IrrigationRequest, IrrigationResponse
from app.core.dependencies import get_current_user
from app.models.models import User
import datetime

router = APIRouter(prefix="/irrigation", tags=["Irrigation Intelligence"])

@router.post("/analyze", response_model=IrrigationResponse)
async def analyze_irrigation(request: IrrigationRequest, current_user: User = Depends(get_current_user)):
    # Calculate soil moisture advice
    sm = request.soil_moisture
    crop = request.crop_type.lower()
    
    if sm < 30:
        water_req = "High (approx 45,000 Litres/acre)"
        saving = "15% saved via automated drip controls"
        time_advice = "6:00 AM - 8:00 AM (optimal thermal profile)"
        reasoning = f"Your soil moisture is critically low ({sm}%). In the current {request.growth_stage} stage of {request.crop_type}, moisture stress will lead to reduced node count. Daily irrigation is required until moisture levels reach 55%."
    elif sm < 50:
        water_req = "Moderate (approx 20,000 Litres/acre)"
        saving = "35% saved via targeted scheduling"
        time_advice = "5:00 PM - 7:00 PM (reduces evaporation loss)"
        reasoning = f"Moisture level ({sm}%) is in the yellow zone. A light watering cycle is recommended. Weather forecast indicates no rain for 48 hours, so manual supplementation is required."
    else:
        water_req = "None (No irrigation needed)"
        saving = "100% saved (fully optimized)"
        time_advice = "N/A"
        reasoning = f"Soil moisture is at a healthy {sm}%. Saturated roots do not require further irrigation. Over-irrigating at this stage of {request.crop_type} runs the risk of root rot."

    consumption_trend = [
        {"day": "Mon", "consumption": 12000, "limit": 15000},
        {"day": "Tue", "consumption": 14000, "limit": 15000},
        {"day": "Wed", "consumption": 9000, "limit": 15000},
        {"day": "Thu", "consumption": 11000, "limit": 15000},
        {"day": "Fri", "consumption": 0, "limit": 15000},
        {"day": "Sat", "consumption": 8000, "limit": 15000},
        {"day": "Sun", "consumption": 10000, "limit": 15000}
    ]

    return {
        "water_requirement": water_req,
        "water_saving": saving,
        "recommended_time": time_advice,
        "expected_rain": "1.2 mm in next 3 days",
        "confidence": 91.5,
        "reasoning": reasoning,
        "consumption_trend": consumption_trend
    }
