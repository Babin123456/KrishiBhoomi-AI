from fastapi import APIRouter, Depends
from app.schemas.schemas import ChatRequest, ChatResponse
from app.core.dependencies import get_current_user
from app.models.models import User

router = APIRouter(prefix="/chat", tags=["AI Copilot"])

@router.post("/message", response_model=ChatResponse)
async def ask_copilot(request: ChatRequest, current_user: User = Depends(get_current_user)):
    msg = request.message.lower()
    
    if "scheme" in msg or "government" in msg:
        response = (
            "You are eligible for several government agricultural schemes:\n\n"
            "1. **PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)**: Direct income support of Rs 6,000 per year in three equal installments.\n"
            "2. **PM Fasal Bima Yojana (PMFBY)**: Low-premium crop insurance scheme safeguarding against weather anomalies.\n"
            "3. **Soil Health Card Scheme**: Provides custom chemical inputs matching NPK status.\n\n"
            "Would you like me to help you draft the registration requests?"
        )
        sources = ["Ministry of Agriculture & Farmers Welfare portal", "PM-KISAN guidelines 2026"]
    elif "water" in msg or "irrigate" in msg:
        response = (
            "Your wheat crop is currently at the tillering stage. Crown Root Initiation (CRI) has finished.\n\n"
            "**Watering Advice**:\n"
            "- Next irrigation recommended in 3 days.\n"
            "- Optimal volume: 45,000 Litres/acre.\n"
            "- Refrain from flood irrigation as high humidity is causing fungal sporulation risk."
        )
        sources = ["ICAR Wheat Production Manual", "Lucknow Water Management Institute"]
    else:
        response = (
            "Based on your profile, your main crop is Wheat on alluvial soil. The current soil pH is 6.8.\n\n"
            "How can I help you today? I can advise on fertilizers, crop rotation, pest prevention, or market prices."
        )
        sources = ["KrishiBhoomi Knowledge Base", "User Profile"]

    return {
        "response": response,
        "sources": sources
    }
