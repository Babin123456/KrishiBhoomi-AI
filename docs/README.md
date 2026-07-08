# KrishiBhoomi AI - System Documentation

## Architecture Design

```mermaid
graph TB
    subgraph Frontend["Frontend (Next.js 15 + React 19)"]
        LP["Landing Page"]
        AUTH["Auth Pages"]
        FD["Farmer Dashboard"]
        DD["District Dashboard"]
        M1["Crop Recommendation"]
        M2["Weather Intelligence"]
        M3["Irrigation Intelligence"]
        M4["Disease Detection"]
        M5["Satellite Monitoring"]
        M6["Voice Assistant"]
        M7["Market Intelligence"]
        M8["AI Farm Copilot"]
    end

    subgraph Backend["Backend (FastAPI)"]
        API["REST API Gateway"]
        AUTH_SVC["Auth Service (JWT + RBAC)"]
        CROP_SVC["Crop AI Service"]
        WEATHER_SVC["Weather Service"]
        DISEASE_SVC["Disease Detection Service"]
        SAT_SVC["Satellite Service"]
        MARKET_SVC["Market Service"]
        VOICE_SVC["Voice Service"]
        CHAT_SVC["AI Copilot Service"]
        ALERT_SVC["Alert Service"]
    end

    subgraph AI["AI/ML Layer"]
        XGB["XGBoost (Crop)"]
        CNN["EfficientNet (Disease)"]
        GEMINI["Gemini API"]
        WHISPER["Whisper (Voice)"]
        FAISS_DB["FAISS (RAG)"]
        ST["Sentence Transformers"]
    end

    subgraph Data["Data Layer"]
        PG["PostgreSQL"]
        REDIS["Redis (Cache)"]
        S3["File Storage"]
    end

    Frontend --> Backend
    Backend --> AI
    Backend --> Data
    CHAT_SVC --> ST --> FAISS_DB --> GEMINI
```

## Setup & Running Locally

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Set up virtual environment and install packages:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. Run the FastAPI application:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
4. Access API Docs: Go to `http://localhost:8000/docs`.

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install packages and run Next.js server:
   ```bash
   npm install
   npm run dev
   ```
3. Access Platform: Go to `http://localhost:3000`.

### Docker Compose
To spin up all services including PostgreSQL databases, Redis, the APIs, and the client views:
```bash
docker-compose up --build
```
