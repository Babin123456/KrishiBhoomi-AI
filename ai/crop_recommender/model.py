import numpy as np
from sklearn.ensemble import RandomForestClassifier
import pickle
import os

# Training code or load code can reside here.
# For demo / hackathon purposes, we save a lightweight classifier matching crop criteria
# mapping to: 0: Wheat, 1: Cotton, 2: Rice
def train_mock_recommender():
    # Simple synthetic training dataset
    # Features: [soilTypeIndex, ph, nitrogen, phosphorus, potassium, rainfall, temp, groundwater]
    X = np.array([
        [0, 6.5, 220, 30, 180, 600, 24, 15],  # Wheat (Alluvial)
        [0, 6.8, 240, 28, 200, 800, 26, 12],  # Wheat
        [1, 7.8, 120, 45, 250, 450, 32, 25],  # Cotton (Black)
        [1, 7.5, 110, 40, 230, 500, 35, 30],  # Cotton
        [2, 5.5, 90,  15, 120, 1400, 28, 5],   # Rice (Clay)
        [2, 6.0, 95,  18, 130, 1300, 29, 6]    # Rice
    ])
    y = np.array([0, 0, 1, 1, 2, 2])
    
    clf = RandomForestClassifier(n_estimators=10)
    clf.fit(X, y)
    
    os.makedirs("ai/models", exist_ok=True)
    with open("ai/models/crop_recommender.pkl", "wb") as f:
        pickle.dump(clf, f)

if __name__ == "__main__":
    train_mock_recommender()
    print("Mock Crop Recommender trained and saved to ai/models/crop_recommender.pkl")
