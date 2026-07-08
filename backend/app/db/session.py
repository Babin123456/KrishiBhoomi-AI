from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from app.core.config import settings

# If using SQLite, ensure we support async operations with aiosqlite
database_url = settings.DATABASE_URL
connect_args = {}

if database_url.startswith("sqlite"):
    # SQLite needs check_same_thread=False for multithreading in FastAPI
    connect_args = {"check_same_thread": False}

engine = create_async_engine(
    database_url,
    connect_args=connect_args,
    echo=False
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)

Base = declarative_base()

async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
