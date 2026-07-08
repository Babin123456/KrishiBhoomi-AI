from fastapi import APIRouter, Depends
from app.schemas.schemas import CropRecommendRequest, CropRecommendationResponse
from app.core.dependencies import get_current_user
from app.models.models import User
import random

router = APIRouter(prefix="/crop", tags=["Crop Intelligence"])

@router.post("/recommend", response_model=CropRecommendationResponse)
async def recommend_crop(request: CropRecommendRequest, current_user: User = Depends(get_current_user)):
    # Standard fallback simulation that fits agricultural criteria
    soil_type_lower = request.soilType.lower()
    ph = request.ph
    nitrogen = request.nitrogen
    
    # Simple logic simulating XGBoost model behavior
    if soil_type_lower in ["alluvial", "loamy"] and 6.0 <= ph <= 7.5 and nitrogen > 150:
        recommended = "Wheat"
        confidence = 94.2
        expected_yield = "4.5 tonnes/hectare"
        estimated_profit = "Rs 95,000 - 1,20,000"
        water_req = "450-650 mm"
        risk_level = "Low"
        explanation = f"Based on your rich {request.soilType} soil with a pH of {request.ph} and high nitrogen ({request.nitrogen} kg/ha), Wheat is highly recommended. The moisture holding capability and Rabi temperature profiles match wheat perfectly."
        alternatives = [
            {"crop": "Mustard", "confidence": 85.0, "yield_est": "1.8 tonnes/ha"},
            {"crop": "Barley", "confidence": 76.5, "yield_est": "3.8 tonnes/ha"},
            {"crop": "Chickpea", "confidence": 71.0, "yield_est": "2.2 tonnes/ha"}
        ]
    elif "black" in soil_type_lower or request.temperature > 30:
        recommended = "Cotton"
        confidence = 88.5
        expected_yield = "2.5 tonnes/hectare"
        estimated_profit = "Rs 1,10,000 - 1,40,000"
        water_req = "700-1000 mm"
        risk_level = "Medium"
        explanation = f"Your {request.soilType} soil with high temperatures is highly suitable for growing Cotton. Black soil has high moisture retentivity, which cotton thrives on."
        alternatives = [
            {"crop": "Soybean", "confidence": 82.0, "yield_est": "2.8 tonnes/ha"},
            {"crop": "Sorghum", "confidence": 79.0, "yield_est": "3.5 tonnes/ha"},
            {"crop": "Maize", "confidence": 73.0, "yield_est": "4.2 tonnes/ha"}
        ]
    else:
        recommended = "Rice (Paddy)"
        confidence = 85.0
        expected_yield = "3.8 tonnes/hectare"
        estimated_profit = "Rs 70,000 - 90,000"
        water_req = "1200-1500 mm"
        risk_level = "High" if request.rainfall < 1000 else "Low"
        explanation = f"Due to high expected water parameters, Rice (Paddy) is suggested. Ensure correct puddling for the clayey/{request.soilType} layout."
        alternatives = [
            {"crop": "Maize", "confidence": 80.0, "yield_est": "4.5 tonnes/ha"},
            {"crop": "Sugarcane", "confidence": 75.0, "yield_est": "70.0 tonnes/ha"},
            {"crop": "Jute", "confidence": 68.0, "yield_est": "3.0 tonnes/ha"}
        ]

    feature_importance = [
        {"feature": "Soil Type", "importance": 0.22},
        {"feature": "Rainfall", "importance": 0.19},
        {"feature": "Temperature", "importance": 0.16},
        {"feature": "Nitrogen", "importance": 0.14},
        {"feature": "pH Level", "importance": 0.11},
        {"feature": "Market Trend", "importance": 0.08},
        {"feature": "Phosphorus", "importance": 0.06},
        {"feature": "Potassium", "importance": 0.04}
    ]

    return {
        "crop": recommended,
        "confidence": confidence,
        "yield_estimate": expected_yield,
        "estimated_profit": estimated_profit,
        "water_requirement": water_req,
        "risk_level": risk_level,
        "explanation": explanation,
        "alternatives": alternatives,
        "featureImportance": feature_importance
    }
