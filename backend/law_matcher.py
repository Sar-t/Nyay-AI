import sqlite3
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer, util

class LawMatcher:

    def __init__(self):
        self.semantic_model = SentenceTransformer("all-MiniLM-L6-v2")
        self.laws = self.load_law_data()
        self.law_texts = [
            f"{law[2]} {law[3]} {law[5]}"
            for law in self.laws
        ]

        self.vectorizer = TfidfVectorizer().fit(self.law_texts)
        self.law_vectors = self.vectorizer.transform(self.law_texts)
        self.law_embeddings = self.semantic_model.encode(
            self.law_texts, convert_to_tensor=True
        )

    def load_law_data(self):
        conn = sqlite3.connect("data/law_sections.db")
        cursor = conn.cursor()
        cursor.execute("SELECT code, section, title, description, punishment, keywords FROM law_sections")
        data = cursor.fetchall()
        conn.close()
        return data

    def match_laws(self, text):
        query_vec = self.vectorizer.transform([text])
        tfidf_scores = cosine_similarity(query_vec, self.law_vectors).flatten()

        query_embedding = self.semantic_model.encode(text, convert_to_tensor=True)
        semantic_scores = util.pytorch_cos_sim(
            query_embedding, self.law_embeddings
        )[0].cpu().numpy()

        combined = 0.6 * tfidf_scores + 0.4 * semantic_scores
        top_indices = combined.argsort()[::-1][:3]

        results = []
        for i in top_indices:
            if combined[i] > 0.2:
                law = self.laws[i]
                results.append({
                    "section": law[1],
                    "title": law[2],
                    "punishment": law[4],
                    "score": round(float(combined[i]), 2)
                })
        return results
