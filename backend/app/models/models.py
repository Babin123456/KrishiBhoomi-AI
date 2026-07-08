from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Boolean, JSON, Text
from sqlalchemy.orm import relationship
import datetime
from app.db.session import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String, nullable=True)
    password_hash = Column(String, nullable=False)
    role = Column(String, default="farmer") # farmer, officer, admin
    language = Column(String, default="English")
    avatar = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    farms = relationship("Farm", back_populates="owner", cascade="all, delete-orphan")
    alerts = relationship("Alert", back_populates="user", cascade="all, delete-orphan")
    conversations = relationship("Conversation", back_populates="user", cascade="all, delete-orphan")
    audit_logs = relationship("AuditLog", back_populates="user", cascade="all, delete-orphan")

class Farm(Base):
    __tablename__ = "farms"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    name = Column(String, nullable=False)
    location_lat = Column(Float, nullable=True)
    location_lng = Column(Float, nullable=True)
    size = Column(Float, nullable=False) # In acres
    soil_type = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    owner = relationship("User", back_populates="farms")
    fields = relationship("Field", back_populates="farm", cascade="all, delete-orphan")
    weather_records = relationship("WeatherRecord", back_populates="farm", cascade="all, delete-orphan")

class Field(Base):
    __tablename__ = "fields"

    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey("farms.id", ondelete="CASCADE"), nullable=False)
    name = Column(String, nullable=False)
    crop_type = Column(String, nullable=True)
    area = Column(Float, nullable=False) # In acres
    boundary_geojson = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    farm = relationship("Farm", back_populates="fields")
    soil_records = relationship("SoilRecord", back_populates="field", cascade="all, delete-orphan")
    disease_records = relationship("DiseaseRecord", back_populates="field", cascade="all, delete-orphan")
    crop_predictions = relationship("CropPrediction", back_populates="field", cascade="all, delete-orphan")
    satellite_data = relationship("SatelliteData", back_populates="field", cascade="all, delete-orphan")

class SoilRecord(Base):
    __tablename__ = "soil_records"

    id = Column(Integer, primary_key=True, index=True)
    field_id = Column(Integer, ForeignKey("fields.id", ondelete="CASCADE"), nullable=False)
    ph = Column(Float, nullable=False)
    nitrogen = Column(Float, nullable=False) # kg/ha
    phosphorus = Column(Float, nullable=False) # kg/ha
    potassium = Column(Float, nullable=False) # kg/ha
    organic_carbon = Column(Float, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    field = relationship("Field", back_populates="soil_records")

class WeatherRecord(Base):
    __tablename__ = "weather_records"

    id = Column(Integer, primary_key=True, index=True)
    farm_id = Column(Integer, ForeignKey("farms.id", ondelete="CASCADE"), nullable=False)
    temperature = Column(Float, nullable=False)
    humidity = Column(Float, nullable=False)
    rainfall = Column(Float, nullable=False)
    wind_speed = Column(Float, nullable=True)
    forecast_json = Column(JSON, nullable=True) # Full 7-day forecast cache
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    farm = relationship("Farm", back_populates="weather_records")

class DiseaseRecord(Base):
    __tablename__ = "disease_records"

    id = Column(Integer, primary_key=True, index=True)
    field_id = Column(Integer, ForeignKey("fields.id", ondelete="CASCADE"), nullable=False)
    image_url = Column(String, nullable=False)
    disease_name = Column(String, nullable=False)
    confidence = Column(Float, nullable=False)
    severity = Column(String, nullable=False) # Low, Medium, High, Critical
    treatment_json = Column(JSON, nullable=True) # Organic and Chemical recommendations
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    field = relationship("Field", back_populates="disease_records")

class CropPrediction(Base):
    __tablename__ = "crop_predictions"

    id = Column(Integer, primary_key=True, index=True)
    field_id = Column(Integer, ForeignKey("fields.id", ondelete="CASCADE"), nullable=False)
    recommended_crop = Column(String, nullable=False)
    confidence = Column(Float, nullable=False)
    yield_estimate = Column(String, nullable=True)
    estimated_profit = Column(String, nullable=True)
    water_requirement = Column(String, nullable=True)
    risk_level = Column(String, nullable=True)
    feature_importance_json = Column(JSON, nullable=True)
    alternatives_json = Column(JSON, nullable=True)
    explanation = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    field = relationship("Field", back_populates="crop_predictions")

class SatelliteData(Base):
    __tablename__ = "satellite_data"

    id = Column(Integer, primary_key=True, index=True)
    field_id = Column(Integer, ForeignKey("fields.id", ondelete="CASCADE"), nullable=False)
    ndvi = Column(Float, nullable=False)
    evi = Column(Float, nullable=True)
    moisture = Column(Float, nullable=True)
    source = Column(String, default="Sentinel-2")
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    field = relationship("Field", back_populates="satellite_data")

class MarketPrice(Base):
    __tablename__ = "market_prices"

    id = Column(Integer, primary_key=True, index=True)
    crop = Column(String, nullable=False, index=True)
    mandi = Column(String, nullable=False)
    price = Column(Float, nullable=False) # Price per quintal
    trend = Column(String, default="Stable") # Up, Down, Stable
    date = Column(DateTime, default=datetime.datetime.utcnow)

class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    type = Column(String, nullable=False) # Weather, Disease, Market, Irrigation, Crop
    severity = Column(String, default="info") # info, warning, danger, success
    message = Column(String, nullable=False)
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="alerts")

class Conversation(Base):
    __tablename__ = "conversations"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    messages_json = Column(JSON, default=list) # List of chat messages
    context = Column(String, nullable=True)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    user = relationship("User", back_populates="conversations")

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=True)
    action = Column(String, nullable=False)
    details = Column(String, nullable=True)
    ip_address = Column(String, nullable=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="audit_logs")
