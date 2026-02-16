# law_matcher.py

import sqlite3
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer, util


class LawMatcher:

    def __init__(self):
        print("Loading semantic model...")
        self.semantic_model = SentenceTransformer("all-MiniLM-L6-v2")

        print("Loading law data...")
        self.laws = self.load_law_data()

        # Combine relevant text fields for similarity
        self.law_texts = [
            f"{law[2]}. {law[3]}. {law[5]}"
            for law in self.laws
        ]

        # TF-IDF Preparation
        self.vectorizer = TfidfVectorizer()
        self.law_vectors = self.vectorizer.fit_transform(self.law_texts)

        # Precompute semantic embeddings
        print("Generating embeddings...")
        self.law_embeddings = self.semantic_model.encode(
            self.law_texts,
            convert_to_tensor=True
        )

        print("Law matcher initialized successfully.")

    # ---------------------------------------------
    # Load Law Data From SQLite Database
    # ---------------------------------------------
    def load_law_data(self):
        conn = sqlite3.connect("data/law_sections.db")
        cursor = conn.cursor()

        cursor.execute("""
            SELECT code, section, title, description, punishment, keywords
            FROM law_sections
        """)

        data = cursor.fetchall()
        conn.close()
        return data

    # ---------------------------------------------
    # Match Top 3 Most Relevant Laws
    # ---------------------------------------------
    def match_laws(self, keywords):

        if not keywords:
            return []

        query_text = " ".join(keywords)

        # ---------- TF-IDF Similarity ----------
        query_vec = self.vectorizer.transform([query_text])
        tfidf_scores = cosine_similarity(
            query_vec,
            self.law_vectors
        ).flatten()

        # ---------- Semantic Similarity ----------
        query_embedding = self.semantic_model.encode(
            query_text,
            convert_to_tensor=True
        )

        semantic_scores = util.pytorch_cos_sim(
            query_embedding,
            self.law_embeddings
        )[0].cpu().numpy()

        # ---------- Combine Scores ----------
        combined_scores = 0.6 * tfidf_scores + 0.4 * semantic_scores

        # ---------- Sort by Highest Score ----------
        sorted_indices = combined_scores.argsort()[::-1]

        # ---------- Take Top 3 Above Threshold ----------
        top_indices = [
            i for i in sorted_indices
            if combined_scores[i] > 0.15
        ][:3]

        results = []

        for i in top_indices:
            law = self.laws[i]
            score = round(float(combined_scores[i]), 2)

            results.append({
                "code": law[0],
                "section": law[1],
                "title": law[2],
                "description": law[3],
                "punishment": law[4],
                "keywords": law[5],
                "score": score
            })

        return results
