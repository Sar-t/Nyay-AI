
class NLPPipeline:
    def __init__(self):
        self.model = None

    def load_model(self):
        raise NotImplementedError

    def extract_entities(self, text):
        raise NotImplementedError
