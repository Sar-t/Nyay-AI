# nlp_pipeline.py

import spacy
import re


class NLPPipeline:

    def __init__(self):
        print("Loading spaCy model...")
        self.nlp = spacy.load("en_core_web_lg")
        print("spaCy loaded successfully.")

    # -------------------------------------------------
    # Metadata Extraction (Role Detection Fixed)
    # -------------------------------------------------
    def extract_metadata(self, text):

        doc = self.nlp(text)

        date, time, location = None, None, None
        suspects = set()
        victims = set()
        location_candidates = []

        # ---------------- DATE / TIME / LOCATION ----------------
        for ent in doc.ents:

            if ent.label_ == "DATE" and not date and len(ent.text) > 4:
                date = ent.text

            elif ent.label_ == "TIME" and not time:
                time = ent.text

            elif ent.label_ in ["GPE", "LOC", "FAC"]:
                location_candidates.append(ent.text)

        if location_candidates:
            location = max(location_candidates, key=len)

        # ---------------- ROLE DETECTION ----------------
        crime_verbs = [
            "assault", "murder", "rape",
            "kill", "stab", "attack", "kidnap"
        ]

        last_detected_victim = None

        for token in doc:

            # Detect crime actions
            if token.lemma_ in crime_verbs:

                subject = None
                obj = None

                for child in token.children:
                    if child.dep_ == "nsubj":
                        subject = child
                    elif child.dep_ in ["dobj", "pobj"]:
                        obj = child

                # Map subject to full PERSON entity
                if subject:
                    for ent in doc.ents:
                        if ent.label_ == "PERSON" and subject.i >= ent.start and subject.i < ent.end:
                            suspects.add(ent.text)

                # Map object to full PERSON entity
                if obj:
                    for ent in doc.ents:
                        if ent.label_ == "PERSON" and obj.i >= ent.start and obj.i < ent.end:
                            victims.add(ent.text)
                            last_detected_victim = ent.text

            # Detect death
            if token.lemma_ == "die":

                # If explicit PERSON present in same sentence
                person_found = False
                for ent in doc.ents:
                    if ent.label_ == "PERSON" and ent.sent == token.sent:
                        victims.add(ent.text)
                        person_found = True

                # If sentence says "victim died" → assign last detected victim
                if not person_found:
                    if "victim" in token.sent.text.lower() and last_detected_victim:
                        victims.add(last_detected_victim)

        # ---------------- REGEX FALLBACKS ----------------

        if not date:
            date_match = re.search(
                r"(January|February|March|April|May|June|July|August|September|October|November|December)?\s?\d{1,2}(st|nd|rd|th)?",
                text,
                re.IGNORECASE
            )
            if date_match:
                date = date_match.group()

        if not time:
            time_match = re.search(
                r"\b\d{1,2}\s?(AM|PM|am|pm)\b",
                text
            )
            if time_match:
                time = time_match.group()

        if not location:
            loc_match = re.search(
                r"(?:at|near|in|opposite)\s+([\w\s,]+)",
                text,
                re.IGNORECASE
            )
            if loc_match:
                location = loc_match.group(1).strip()

        return {
            "date": date,
            "time": time,
            "location": location,
            "suspects": list(suspects),
            "victims": list(victims)
        }

    # -------------------------------------------------
    # Keyword Extraction
    # -------------------------------------------------
    def extract_keywords(self, text):

        doc = self.nlp(text)
        keywords = set()

        for chunk in doc.noun_chunks:
            keywords.add(chunk.text.lower())

        for token in doc:
            if token.pos_ in ["VERB", "NOUN", "ADJ"]:
                keywords.add(token.lemma_.lower())

        return list(keywords)
