from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1 import auth, crop, weather, irrigation, disease, satellite, voice, market, chat, alerts
from app.db.session import engine, Base

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="One Intelligent Platform for Every Farmer - AI, weather forecasting, satellite imagery, computer vision, voice, and market analytics.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Set CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables on startup for quick development
@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# Register routes
app.include_router(auth.router, prefix=settings.API_V1_STR)
app.include_router(crop.router, prefix=settings.API_V1_STR)
app.include_router(weather.router, prefix=settings.API_V1_STR)
app.include_router(irrigation.router, prefix=settings.API_V1_STR)
app.include_router(disease.router, prefix=settings.API_V1_STR)
app.include_router(satellite.router, prefix=settings.API_V1_STR)
app.include_router(voice.router, prefix=settings.API_V1_STR)
app.include_router(market.router, prefix=settings.API_V1_STR)
app.include_router(chat.router, prefix=settings.API_V1_STR)
app.include_router(alerts.router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    return {"message": "Welcome to KrishiBhoomi AI API Gateway. Go to /docs for Swagger API documentation."}
