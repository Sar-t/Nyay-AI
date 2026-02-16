import spacy

class NLPPipeline:
    def __init__(self):
        self.model = spacy.load("en_core_web_sm")

    def extract_entities(self, text):
        doc = self.model(text)
        entities = []
        for ent in doc.ents:
            entities.append({
                "text": ent.text,
                "label": ent.label_
            })
        return entities


if __name__ == "__main__":
    sample_text = "On 12th January in Delhi, Rajesh attacked Mohan at 9 PM."
    pipeline = NLPPipeline()
    print(pipeline.extract_entities(sample_text))
