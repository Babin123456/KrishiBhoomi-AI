# 🗺️ KrishiBhoomi AI — System Architecture Mappings

This document defines the high-level architecture diagram and flow logic of KrishiBhoomi AI.

## 🏗️ High-Level System Architecture

```mermaid
graph TB
    subgraph Frontend["Frontend Client (Next.js 15 + React 19)"]
        LP["Landing Page with Theme Toggle"]
        AUTH["Auth Pages (Login/Register/Forgot)"]
        FD["Farmer Dashboard Panels"]
        DD["District Admin Panels"]
        M1["Crop AI Selector View"]
        M2["Weather Advisories View"]
        M3["Irrigation Gauge View"]
        M4["Disease Detection View"]
        M5["NDVI Satellite Map View"]
        M6["Voice Speech Assistant View"]
        M7["Market Mandi Rates View"]
        M8["AI Copilot Chat Interface"]
    end

    subgraph Backend["Backend API Gateway (FastAPI)"]
        API["REST API Router Handler"]
        AUTH_SVC["Auth Middleware (JWT/RBAC)"]
        CROP_SVC["Crop Calculation Service"]
        WEATHER_SVC["Weather Advisory Engine"]
        DISEASE_SVC["Disease Image Classifier"]
        SAT_SVC["NDVI Spectral Service"]
        MARKET_SVC["Mandi Pricing Trends Engine"]
        VOICE_SVC["Whisper Voice Converter"]
        CHAT_SVC["RAG Copilot Context Mapper"]
        ALERT_SVC["System Notifications Manager"]
    end

    subgraph AI["AI/ML Layer"]
        XGB["Random Forest / XGBoost (Crop Selection)"]
        CNN["EfficientNet (Disease Classification)"]
        GEMINI["Google Gemini API (Reasoning)"]
        WHISPER["OpenAI Whisper (Speech Transcription)"]
        FAISS_DB["FAISS Vector DB (RAG)"]
        ST["Sentence Transformers (Embeddings)"]
    end

    subgraph Data["Database & Cache Layers"]
        PG["PostgreSQL Database"]
        REDIS["Redis (Cache Storage)"]
    end

    Frontend --> Backend
    Backend --> AI
    Backend --> Data
    CHAT_SVC --> ST --> FAISS_DB --> GEMINI
```

## 🔄 Core Operational Flow (E.g. Disease Detection Pipeline)

```mermaid
sequenceDiagram
    autonumber
    Farmer->>Frontend: Upload Tomato Leaf Photo
    Frontend->>Backend API: POST /api/v1/disease/detect (Image File)
    Backend API->>Auth Middleware: Validate Token
    Auth Middleware-->>Backend API: Valid User Session
    Backend API->>EfficientNet CNN: Run Leaf Classification
    EfficientNet CNN-->>Backend API: Returns Disease Class & Severity
    Backend API->>Gemini LLM: Request Agronomy Recovery Plan
    Gemini LLM-->>Backend API: Returns Detailed Treatment Markdown
    Backend API->>PostgreSQL: Save DiseaseRecord
    Backend API-->>Frontend: Return Classified Disease + Treatments
    Frontend-->>Farmer: Render UI Cards (Organic/Chemical advice tabs)
```
