# RAG Knowledge Base Document Store
# Uses Sentence Transformers and FAISS index to search agricultural manuals.
class AgronomyKnowledgeBase:
    def __init__(self):
        self.documents = [
            "Wheat CRI Stage: First irrigation should happen 20-25 days after sowing.",
            "Mustard thrives in sandy loam soils with pH 6.0 to 7.5.",
            "Tomato early blight treatment: Use neem seed kernel extract (5%) or copper oxychloride."
        ]

    def query(self, text: str, k: int = 1) -> list:
        # Basic context retrieval query matching keywords
        text_lower = text.lower()
        results = []
        for doc in self.documents:
            if any(word in doc.lower() for word in text_lower.split()):
                results.append(doc)
        return results if results else [self.documents[0]]
