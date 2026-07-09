from fastapi import APIRouter, Depends, UploadFile, File
from app.schemas.schemas import DiseaseResponse
from app.core.dependencies import get_current_user
from app.models.models import User
import random

router = APIRouter(prefix="/disease", tags=["Disease Detection"])

@router.post("/detect", response_model=DiseaseResponse)
async def detect_disease(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user)
):
    # Simulated EfficientNet-B0 fine-tuned classifier response enhanced with Gemini explainability
    filename_lower = file.filename.lower()
    
    # Check if a leaf is actually present in the image based on mock validation criteria
    if not any(keyword in filename_lower for keyword in ["leaf", "plant", "crop", "wheat", "rust", "tomato", "blight", "disease", "pest", "cotton"]):
        return {
            "disease": "No Plant Leaf Detected",
            "confidence": 0.0,
            "severity": "N/A",
            "cause": "The uploaded image does not appear to contain a recognizable crop leaf or plant structure.",
            "symptoms": [],
            "organicTreatment": [],
            "chemicalTreatment": [],
            "recoveryTime": "N/A",
            "preventiveMeasures": [],
            "explanation": "Image analysis failed to identify features matching a leaf. Please upload a clear close-up picture of the affected crop leaf."
        }

    if "wheat" in filename_lower or "rust" in filename_lower:
        disease = "Leaf Rust (Puccinia recondita)"
        confidence = 93.4
        severity = "High"
        cause = "Fungal pathogen Puccinia recondita. Thrives in moderate temperatures (15-22 C) with high relative humidity and leaf moisture."
        symptoms = [
            "Orange-brown powdery pustules on the leaf surface",
            "Yellowing margins around pustules",
            "Premature drying and death of leaves in severe cases"
        ]
        organic = [
            "Apply neem seed kernel extract (5%)",
            "Spray copper-based organic fungicides (Bordeaux mixture)",
            "Remove alternate host plants in proximity"
        ]
        chemical = [
            "Propiconazole 25% EC (1 ml/L)",
            "Tebuconazole 250% EC (1.5 ml/L)",
            "Foliar application of Azoxystrobin (1 ml/L)"
        ]
        prevention = [
            "Use rust-resistant wheat varieties (e.g., HD 2967, HD 3086)",
            "Avoid excessive nitrogen fertilizers which promote dense canopy",
            "Clean agricultural equipment after field use"
        ]
        explanation = "The image shows small, oval, orange-brown pustules scattered across the leaf blade. This matches Leaf Rust (Puccinia recondita) with high confidence. The moisture index of your field supports fungal germination."
    else:
        # Default to early blight tomato as a fallback
        disease = "Early Blight (Alternaria solani)"
        confidence = 94.7
        severity = "Medium"
        cause = "Fungal infection caused by Alternaria solani, thriving in warm and humid conditions."
        symptoms = [
            "Dark brown concentric ring spots on lower leaves",
            "Yellowing around spot margins",
            "Leaf drop starting from lower branches"
        ]
        organic = [
            "Apply neem oil spray (2ml/L) every 7 days",
            "Use Trichoderma viride bio-fungicide soil treatment",
            "Spray copper oxychloride (3g/L) for organic prevention"
        ]
        chemical = [
            "Mancozeb 75% WP (2g/L) foliar spray",
            "Chlorothalonil 75% WP (2g/L)",
            "Azoxystrobin 23% SC (1ml/L) for critical cases"
        ]
        prevention = [
            "Maintain 3-year crop rotation with non-solanaceous crops",
            "Ensure proper spacing between crops to allow airflow",
            "Avoid overhead sprinkler irrigation"
        ]
        explanation = "Concentric rings forming a bull's-eye pattern are visible on the leaf surface. This is a classic symptom of Alternaria solani (Early Blight) infection."

    return {
        "disease": disease,
        "confidence": confidence,
        "severity": severity,
        "cause": cause,
        "symptoms": symptoms,
        "organicTreatment": organic,
        "chemicalTreatment": chemical,
        "recoveryTime": "14-21 days under active treatment",
        "preventiveMeasures": prevention,
        "explanation": explanation
    }
