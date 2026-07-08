# 📘 KrishiBhoomi AI — Working Principle & File Reference

This document details the responsibilities and operational flow of all primary codebase files in KrishiBhoomi AI.

---

## ⚙️ Backend Core & DB Configuration (`backend/app/`)

### 🔌 Entry point & Routing

* **[`main.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/main.py)**: Sets up the FastAPI application, assigns global CORS middleware rules, and registers modular router endpoints (`/api/v1/...`). Contains a database table initialization trigger on startup.
* **[`core/config.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/core/config.py)**: Parses system configuration settings and environment variable fallback tokens (such as fallback databases and external mock configs).
* **[`db/session.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/db/session.py)**: Initializes declarative metadata mappings (`Base`) and async SQLAlchemy connection pools (`create_async_engine`). Exposes the async database session manager dependency `get_db()`.
* **[`core/security.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/core/security.py)**: Manages bcrypt password salting/hashing and creates/decodes JWT access tokens.
* **[`core/dependencies.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/core/dependencies.py)**: Extracts the user payload from incoming HTTP Authorization headers, validates token expiration, and performs role validation checks.

### 🗄️ Database Mappings & Models

* **[`models/models.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/models/models.py)**: Configures the **15 operational database schemas** using SQLAlchemy ORM (including tables for User auth records, Farms, Fields, Soil logs, Weather, Crop recommendations, Satellite NDVI, Alerts, and Conversations).
* **[`schemas/schemas.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/schemas/schemas.py)**: Contains strict Pydantic input schemas (like registration validation checks) and JSON structure validators.

### 🔌 API Routers (`api/v1/`)

* **[`api/v1/auth.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/auth.py)**: Handlers for user registrations, password log-in token exchanges, and profile creations.
* **[`api/v1/crop.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/crop.py)**: Performs soil and climate checks to determine optimal crop suggestions.
* **[`api/v1/weather.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/weather.py)**: Delivers weather updates and agronomy notifications.
* **[`api/v1/irrigation.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/irrigation.py)**: Schedules watering times based on soil moisture levels.
* **[`api/v1/disease.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/disease.py)**: Returns crop disease diagnoses and organic/chemical treatment advice.
* **[`api/v1/satellite.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/satellite.py)**: Simulates field canopy health metrics (NDVI).
* **[`api/v1/voice.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/voice.py)**: Handles transcription of regional voice queries.
* **[`api/v1/market.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/market.py)**: Fetches mandi crop pricing indexes and sales advice.
* **[`api/v1/chat.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/chat.py)**: Operates the RAG Copilot query router.
* **[`api/v1/alerts.py`](file:///c:/Users/babin/Desktop/BWAI/backend/app/api/v1/alerts.py)**: Feeds alert notifications to the user dashboards.

---

## 🌾 AI / ML Layer (`ai/`)

* **[`crop_recommender/model.py`](file:///c:/Users/babin/Desktop/BWAI/ai/crop_recommender/model.py)**: Trains a scikit-learn random forest classifier on synthetic soil profiles to suggest target crops (like Wheat, Cotton, or Rice).
* **[`disease_detector/model.py`](file:///c:/Users/babin/Desktop/BWAI/ai/disease_detector/model.py)**: Simulates convolutional neural network inference (EfficientNet) for leaf image diagnosis.
* **[`knowledge_base/rag.py`](file:///c:/Users/babin/Desktop/BWAI/ai/knowledge_base/rag.py)**: Provides keyword matching and document retrieval for agricultural guides.

---

## 💻 Frontend Client (`frontend/src/`)

### 🎨 Global Styling & Shared UI Components

* **[`app/globals.css`](file:///c:/Users/babin/Desktop/BWAI/frontend/src/app/globals.css)**: Implements custom color variables for theme consistency across light/dark modes.
* **[`components/providers.tsx`](file:///c:/Users/babin/Desktop/BWAI/frontend/src/components/providers.tsx)**: Wraps the app in the next-themes state provider.
* **[`components/shared/glass-card.tsx`](file:///c:/Users/babin/Desktop/BWAI/frontend/src/components/shared/glass-card.tsx)**: Glassmorphic panel layout.
* **[`components/shared/animated-counter.tsx`](file:///c:/Users/babin/Desktop/BWAI/frontend/src/components/shared/animated-counter.tsx)**: Animates number updates on the dashboard.

### 🏢 Landing & Dashboard Routes

* **[`components/landing/navbar.tsx`](file:///c:/Users/babin/Desktop/BWAI/frontend/src/components/landing/navbar.tsx)**: Displays the main menu, theme switcher, and navigation links.
* **[`app/login/page.tsx`](file:///c:/Users/babin/Desktop/BWAI/frontend/src/app/login/page.tsx)**: Login page with roles selection and links to register or return home.
* **[`app/dashboard/farmer/page.tsx`](file:///c:/Users/babin/Desktop/BWAI/frontend/src/app/dashboard/farmer/page.tsx)**: Farmer dashboard showing weather metrics, crop health, alerts, and quick actions.
* **[`app/dashboard/district/page.tsx`](file:///c:/Users/babin/Desktop/BWAI/frontend/src/app/dashboard/district/page.tsx)**: Officer dashboard displaying disease maps, hotspots, and stats.
