# ⚙️ KrishiBhoomi AI — Backend API Gateway

This is the FastAPI backend service providing REST API routing and analytical machine learning fallbacks for the KrishiBhoomi AI platform.

---

## ⚡ Quick Start (Local Run)

1. **Activate virtual environment**:

   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   ```

2. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

3. **Run API Gateway server**:

   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

4. **Access Swagger Documentation**: Go to `http://localhost:8000/docs` in your browser.

---

## 🏗️ Structure & File Mapping

- **`app/main.py`**: Initializes the FastAPI server, mounts CORS rules, and binds API subrouters.
- **`app/core/`**: Holds configuration settings (`config.py`), database dependencies (`dependencies.py`), and hashing algorithms (`security.py`).
- **`app/models/`**: Maps standard database structures using SQLAlchemy async schemas (`models.py`).
- **`app/schemas/`**: Pydantic inputs and outputs validation structure definitions (`schemas.py`).
- **`app/api/v1/`**: Directory containing module endpoints (auth, crop selector, weather logic, satellite NDVI, etc.).
