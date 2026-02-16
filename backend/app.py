from flask import Flask, request, jsonify
from nlp_pipeline import NLPPipeline
from law_matcher import LawMatcher

app = Flask(__name__)

nlp_pipeline = NLPPipeline()
law_matcher = LawMatcher()

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "Text required"}), 400

    metadata = nlp_pipeline.extract_metadata(text)
    suggested_laws = law_matcher.match_laws(text)

    return jsonify({
        "metadata": metadata,
        "suggested_laws": suggested_laws
    })

if __name__ == "__main__":
    app.run(debug=True)
