
class LawMatcher:
    def __init__(self):
        pass

    def load_law_data(self):
        raise NotImplementedError

    def match_laws(self, text):
        raise NotImplementedError
