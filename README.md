# 🌾 KrishiBhoomi AI 🤖

> **One Intelligent Platform for Every Farmer** 👨‍🌾
> Built for the **Build With AI** program hosted by **Hack2Skill** 🚀

KrishiBhoomi AI is a premium, production-quality AI-powered agricultural intelligence platform designed to empower farmers, agronomists, and district administration officers with data-driven decision tools. 🌾📈

---

## 📖 Key Reference Documents

- **🛠️ [Local Setup & Working Principles Guide](INSTRUCTIONS.md)**: Steps to launch the FastAPI backend, DB triggers, and Next.js frontend pages.
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
