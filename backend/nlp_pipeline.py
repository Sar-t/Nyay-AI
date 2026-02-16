import spacy

class NLPPipeline:
    def __init__(self):
        self.model = spacy.load("en_core_web_sm")

    def extract_metadata(self, text):
        doc = self.model(text)

        metadata = {
            "date": None,
            "time": None,
            "location": None,
            "persons": []
        }

        locations = []

        for ent in doc.ents:
            if ent.label_ == "DATE":
                metadata["date"] = ent.text
            elif ent.label_ == "TIME":
                metadata["time"] = ent.text
            elif ent.label_ in ["GPE", "LOC", "FAC"]:
                locations.append(ent.text)
            elif ent.label_ == "PERSON":
                metadata["persons"].append(ent.text)

        if locations:
            metadata["location"] = max(locations, key=len)

        metadata["persons"] = list(set(metadata["persons"]))

        return metadata
