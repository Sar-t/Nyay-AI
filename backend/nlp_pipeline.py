import spacy 
class NLPPipeline:
    def __init__(self):
        self.model = spacy.load("en_core_web_sm")

    def load_model(self):
        raise NotImplementedError

    def extract_entities(self, text):
        raise NotImplementedError
