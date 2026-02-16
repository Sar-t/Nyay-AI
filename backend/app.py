from flask import Flask, request, jsonify
from nlp_pipeline import NLPPipeline

app = Flask(__name__)

nlp_pipeline = NLPPipeline()

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "Text required"}), 400

    metadata = nlp_pipeline.extract_metadata(text)

    return jsonify(metadata)

if __name__ == "__main__":
    app.run(debug=True)
