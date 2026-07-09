# 🌾 KrishiBhoomi AI 🤖

> **One Intelligent Platform for Every Farmer** 👨‍🌾
> Built for the **Build With AI** program hosted by **Hack2Skill** 🚀

KrishiBhoomi AI is a premium, production-quality AI-powered agricultural intelligence platform designed to empower farmers, agronomists, and district administration officers with data-driven decision tools. 🌾📈

---

## 📖 Key Reference Documents

- **🛠️ [Local Setup & Working Principles Guide](INSTRUCTIONS.md)**: Steps to launch the FastAPI backend, DB triggers, and Next.js frontend pages.
- **🖥️ [Frontend Service Docs](frontend/README.md)**: Next.js frontend dashboard application guidelines.
- **⚙️ [Backend Service Docs](backend/README.md)**: FastAPI REST API Gateway configs and setup files.
- **🗺️ [System Architecture & Flow Mapper](ARCHITECTURE.md)**: Visual sequence graphs and Mermaid high-level stack diagrams.
- **📄 [MIT License](LICENSE)**: Standard open distribution permissions guidelines.

---

## 🌟 Key Features & AI Modules

1. **Smart Crop Recommendation (Module 1) 🌾**: XGBoost classification recommendation engine evaluating 12+ soil (NPK, pH), water table, and climate parameters to optimize crop returns.
2. **Weather Intelligence (Module 2) ☁️**: Location-based forecast analytics paired with agronomy advisories (e.g., delaying pesticide or fertilizer spray based on rain parameters).
3. **Irrigation Intelligence (Module 3) 💧**: Precision soil moisture monitoring combined with scheduled irrigation charts to save up to 40% water.
4. **Disease Detection (Module 4) 🍂**: Image classification utilizing EfficientNet CNN and Gemini API to diagnose plant leaf diseases instantly with detailed organic/chemical treatment plans.
5. **Satellite Monitoring (Module 5) 🛰️**: Field health tracking from space using Sentinel-2 simulated spectral indices (NDVI/EVI).
6. **Multilingual Voice Assistant (Module 6) 🎙️**: Audio queries transcribed via Whisper and processed by Gemini in 11 Indian languages (Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, English).
7. **Market Intelligence (Module 7) 📊**: Real-time Mandi price monitoring, predictive trend charts, and sales recommendations.
8. **AI Farm Copilot (Module 8) 🤖**: RAG conversational assistant utilizing FAISS and Gemini to query government subsidy schemes and agricultural manuals.

---

## 🛠️ Technology Stack

- **Frontend 💻**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Recharts.
- **Backend ⚙️**: FastAPI, Async SQLAlchemy ORM, Pydantic validation, JWT + RBAC security.
- **Database 🗄️**: PostgreSQL (Postgres schema with 15 tables mapping users, crops, alerts, satellite metrics, and conversations).
- **Orchestration 🐳**: Docker, Docker Compose.

---

## 🚀 Local Setup & Installation Guide

### Prerequisites

Ensure you have the following installed on your local machine:

- **Python 3.12+ 🐍**
- **Node.js 18+ & npm 🟢**
- **Docker & Docker Compose 🐳** (Optional, for containerized run)

### Step 1: Clone the Repository 📥

```bash
git clone https://github.com/Babin123456/KrishiBhoomi-AI.git
cd KrishiBhoomi-AI
```

### Step 2: Configure Environment Variables ⚙️

Create a `.env` file in the root directory by copying `.env.example`:

```bash
copy .env.example .env
```

Update the API keys in `.env` if you have active Google Gemini or OpenWeather keys. If left blank, the application will fallback to smart simulation modes.

---

### Step 3: Run Using Docker Compose (Recommended) 🐳

You can launch the entire stack (PostgreSQL, Redis, FastAPI Backend, and Next.js Frontend) using a single command:

```bash
docker-compose up --build
```

- **Frontend**: Access `http://localhost:3000` 🌐
- **FastAPI Backend (API Gateway)**: Access `http://localhost:8000` 🔌
- **Interactive Swagger Documentation**: Access `http://localhost:8000/docs` 📖

---

### Step 4: Run Manually (Local Development) 🛠️

#### 1. Start the Backend API 🐍

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:

   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI server:

   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

#### 2. Start the Frontend Dev Server 💻

1. Open a new terminal and navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install npm packages:

   ```bash
   npm install
   ```

3. Start the Next.js development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` 🌐.

---

## ⚙️ Environment Configuration & Credentials Acquisition

Create a `.env` file in the root directory (or individual `.env` files under `frontend` and `backend` directories) using the configuration values below.

### How to acquire credentials

1. **`DATABASE_URL` (PostgreSQL / SQLite)**: For local testing, you can use SQLite by setting `DATABASE_URL=sqlite+aiosqlite:///./krishibhoomi.db` (does not require external setup). For production, spin up a local PostgreSQL server, or sign up for a cloud-hosted PostgreSQL instance via platforms like **Supabase**, **Neon**, or **Railway** to obtain your connection URI (replace prefix with `postgresql+asyncpg://...`).

2. **`GEMINI_API_KEY` (AI Copilot)**: Head to [Google AI Studio](https://aistudio.google.com/), sign in, click **Get API Key**, and generate a free API key.

3. **`OPENWEATHER_API_KEY` (Weather)**: Register a free account on [OpenWeatherMap](https://openweathermap.org/api) and generate an API key on your profile dashboard.

4. **`REDIS_URL` (Cache)**: Set up Redis locally, or obtain a cloud endpoint from **Upstash** or **Redis Labs**. If you don't use caching, setting `REDIS_URL` is optional as the app defaults to in-memory caching.

5. **`SECRET_KEY` & `JWT_SECRET`**: You can generate these credentials yourself. Run the following python command in your terminal to generate a secure random secret key:

   ```bash
   python -c "import secrets; print(secrets.token_hex(32))"
   ```

Create the environment file using these keys:

```env
# ============================================
# KrishiBhoomi AI - Environment Configuration
# ============================================

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=KrishiBhoomi AI

# Backend
SECRET_KEY=your-secret-key-change-in-production
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/krishibhoomi
REDIS_URL=redis://localhost:6379/0

# JWT
JWT_SECRET=your-jwt-secret-change-in-production
JWT_ALGORITHM=HS256
JWT_EXPIRATION_MINUTES=1440

# Google Gemini
GEMINI_API_KEY=your-gemini-api-key

# OpenWeather
OPENWEATHER_API_KEY=your-openweather-api-key

# File Storage
UPLOAD_DIR=./uploads
MAX_UPLOAD_SIZE_MB=10

# CORS
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

---

## ⚡ Vercel Deployment (Monorepo)

Vercel natively supports Next.js alongside Python serverless functions, enabling both the frontend and FastAPI backend to be deployed under the same repository mapping:

### 1. Vercel Configuration Mapping

The root [`vercel.json`](vercel.json) file handles routing and service separation.
- Requests matching `/api/backend/*` route directly to the serverless Python backend service directory.
- All other routes resolve to the Next.js frontend application.

### 2. Deployment Steps

1. Push the entire workspace repository to your GitHub account:

   ```bash
   git add .
   git commit -m "prepping vercel monorepo"
   git push origin main
   ```

2. Navigate to your [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.

3. Select your `KrishiBhoomi-AI` repository.

4. On the configuration page, verify that the project roots are managed dynamically by the `vercel.json` file.

5. In **Build & Development Settings**, configure:
   - **Build Command**: Toggle the **Override** switch and leave the input field **empty**.
   - **Install Command**: Toggle the **Override** switch and leave the input field **empty**.
   - **Output Directory**: Toggle the **Override** switch and leave the input field **empty**.

6. Expand the **Environment Variables** panel and add the configuration fields listed in the **Environment Configuration** section above.

7. Click **Deploy**. Vercel will build both services in parallel and host them under a unified domain.
