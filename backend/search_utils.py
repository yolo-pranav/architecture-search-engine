def build_search_text(detail):
    text_parts = []

    text_parts.append(detail["title"])
    text_parts.extend(detail["tags"])
    text_parts.append(detail["description"])

    return " ".join(text_parts).lower()