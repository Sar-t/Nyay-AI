from flask import Flask, request, jsonify
from nlp_pipeline import NLPPipeline
from law_matcher import LawMatcher
import os

app = Flask(__name__)

# Initialize pipelines
nlp_pipeline = NLPPipeline()
law_matcher = LawMatcher()

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json(force=True)
    text = data.get("text", "").strip()

    if not text:
        return jsonify({"error": "Text input required"}), 400

    # Extract metadata
    metadata = nlp_pipeline.extract_metadata(text)

    # Extract keywords
    keywords = nlp_pipeline.extract_keywords(text)

    # Match laws
    laws = law_matcher.match_laws(keywords)

    response = {
        "laws": laws,              # SAME as your original format
        "metadata": metadata       # SAME as your original
    }

    return jsonify(response)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
