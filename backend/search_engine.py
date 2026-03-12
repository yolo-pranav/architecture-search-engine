from backend.data import details, usage_rules
from backend.search_utils import build_search_text

def score_detail(detail, rule, query, context):
    score = 0
    explanation = []

    query_words = [w.lower() for w in query.lower().split() if w]
    search_text = build_search_text(detail).lower()
    title = detail.get("title", "").lower()
    
    if not query_words:
        return 0, []

    # Keyword matching with better weighting
    matched_words = set()
    for word in query_words:
        if word in search_text:
            # Boost score if keyword appears in title
            if word in title:
                score += 3
                explanation.append(f"strong keyword match: {word} (in title)")
            else:
                score += 1.5
                explanation.append(f"keyword match: {word}")
            matched_words.add(word)
    
    # Bonus for matching multiple keywords
    if len(matched_words) > 1:
        score += len(matched_words) * 0.5
        explanation.append(f"multi-keyword bonus: {len(matched_words)} keywords matched")

    # Context-based matching with boost
    host_match = context.get("host_element") == rule["host_element"]
    adjacent_match = context.get("adjacent_element") == rule["adjacent_element"]
    exposure_match = context.get("exposure") == rule["exposure"]

    if host_match:
        score += 3
        explanation.append("host element match")

    if adjacent_match:
        score += 3
        explanation.append("adjacent element match")

    if exposure_match:
        score += 2
        explanation.append("exposure match")
    
    # Context match bonus - boost if multiple context filters match
    context_matches = host_match + adjacent_match + exposure_match
    if context_matches >= 2:
        score += 2
        explanation.append(f"context match bonus: {context_matches} filters aligned")

    return round(score, 1), explanation

def search(query, context):
    results = []

    for detail in details:
        rule = next(r for r in usage_rules if r["detail_id"] == detail["id"])
        score, explanation = score_detail(detail, rule, query, context)

        if score > 0:
            results.append({
                "detail_id": detail["id"],
                "title": detail["title"],
                "score": score,
                "explanation": explanation
            })

    # sort by score
    results.sort(key=lambda x: x["score"], reverse=True)
    return results[:5]