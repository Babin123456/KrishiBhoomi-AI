from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Dict, Any
import datetime

# --- Base Schemas ---
class UserBase(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    role: Optional[str] = "farmer"
    language: Optional[str] = "English"

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(UserBase):
    id: int
    avatar: Optional[str] = None
    created_at: datetime.datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

# --- Farm & Field ---
class FarmBase(BaseModel):
    name: str
    size: float
    soil_type: str
    location_lat: Optional[float] = None
    location_lng: Optional[float] = None

class FarmCreate(FarmBase):
    pass

class FarmResponse(FarmBase):
    id: int
    user_id: int
    created_at: datetime.datetime

    class Config:
        from_attributes = True

class FieldBase(BaseModel):
    name: str
    area: float
    crop_type: Optional[str] = None
    boundary_geojson: Optional[Dict[str, Any]] = None

class FieldCreate(FieldBase):
    pass

class FieldResponse(FieldBase):
    id: int
    farm_id: int
    created_at: datetime.datetime

    class Config:
        from_attributes = True

# --- soil ---
class SoilRecordBase(BaseModel):
    ph: float
    nitrogen: float
    phosphorus: float
    potassium: float
    organic_carbon: Optional[float] = None

class SoilRecordCreate(SoilRecordBase):
    pass

class SoilRecordResponse(SoilRecordBase):
    id: int
    field_id: int
    created_at: datetime.datetime

    class Config:
        from_attributes = True

# --- Crop AI ---
class CropRecommendRequest(BaseModel):
    soilType: str
    ph: float
    nitrogen: float
    phosphorus: float
    potassium: float
    rainfall: float
    temperature: float
    groundwater: float
    farmSize: float
    previousCrop: Optional[str] = "None"
    marketTrend: Optional[str] = "Stable"

class AlternativeCrop(BaseModel):
    crop: str
    confidence: float
    yield_est: str

class FeatureImportance(BaseModel):
    feature: str
    importance: float

class CropRecommendationResponse(BaseModel):
    crop: str
    confidence: float
    yield_estimate: str
    estimated_profit: str
    water_requirement: str
    risk_level: str
    explanation: str
    alternatives: List[AlternativeCrop]
    featureImportance: List[FeatureImportance]

# --- Weather ---
class WeatherAlertResponse(BaseModel):
    type: str
    severity: str
    message: str
    time: str

class WeatherRecommendationResponse(BaseModel):
    current_temp: float
    humidity: float
    wind_speed: float
    rain_chance: float
    condition: str
    alerts: List[WeatherAlertResponse]
    ai_recommendations: List[str]

# --- Irrigation ---
class IrrigationRequest(BaseModel):
    soil_moisture: float
    crop_type: str
    growth_stage: str

class IrrigationResponse(BaseModel):
    water_requirement: str
    water_saving: str
    recommended_time: str
    expected_rain: str
    confidence: float
    reasoning: str
    consumption_trend: List[Dict[str, Any]]

# --- Disease ---
class DiseaseResponse(BaseModel):
    disease: str
    confidence: float
    severity: str
    cause: str
    symptoms: List[str]
    organicTreatment: List[str]
    chemicalTreatment: List[str]
    recoveryTime: str
    preventiveMeasures: List[str]
    explanation: str

# --- Satellite ---
class SatelliteDataResponse(BaseModel):
    ndvi: float
    evi: float
    moisture: float
    timestamp: datetime.datetime
    history: List[Dict[str, Any]]

# --- Voice ---
class VoiceRequest(BaseModel):
    language: str
    audio_base64: Optional[str] = None # Or uploaded files

class VoiceResponse(BaseModel):
    transcript: str
    response_text: str
    audio_url: Optional[str] = None

# --- Market ---
class MarketPriceResponse(BaseModel):
    crop: str
    current_price: float
    predicted_price: float
    trend: str
    mandis: List[Dict[str, Any]]
    explanation: str
    history: List[Dict[str, Any]]

# --- Alerts ---
class AlertResponse(BaseModel):
    id: int
    type: str
    severity: str
    message: str
    is_read: bool
    created_at: datetime.datetime

    class Config:
        from_attributes = True

# --- Chat ---
class ChatMessage(BaseModel):
    role: str # user, assistant
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    response: str
    sources: List[str]
