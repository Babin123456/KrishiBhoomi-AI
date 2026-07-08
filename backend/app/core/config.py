from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List, Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "KrishiBhoomi AI"
    API_V1_STR: str = "/api/v1"
    
    # Security & Auth
    SECRET_KEY: str = "supersecretkeyforlocaldevelopmentchangeinproduction"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440
    
    # Database Settings
    # Default to a local SQLite database for easy development and quick setup, 
    # but support PostgreSQL via environment variable
    DATABASE_URL: str = "sqlite+aiosqlite:///./krishibhoomi.db"
    
    # External API Keys (Optional fallbacks implemented if empty)
    GEMINI_API_KEY: Optional[str] = None
    OPENWEATHER_API_KEY: Optional[str] = None
    
    # CORS Origins
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
    ]
    
    model_config = SettingsConfigDict(case_sensitive=True, env_file=".env", env_file_encoding="utf-8")

settings = Settings()
