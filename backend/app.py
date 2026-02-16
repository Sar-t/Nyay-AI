from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Nyay-AI Backend Initialized"

if __name__ == "__main__":
    app.run(debug=True)
