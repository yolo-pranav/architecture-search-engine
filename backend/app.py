from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from backend.search_engine import search

app = FastAPI(title="Architectural Detail Search API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SearchRequest(BaseModel):
    query: str
    host_element: str | None = None
    adjacent_element: str | None = None
    exposure: str | None = None

@app.get("/")
def root():
    return {"message": "API running"}

@app.post("/search")
def search_details(request: SearchRequest):

    context = {
        "host_element": request.host_element,
        "adjacent_element": request.adjacent_element,
        "exposure": request.exposure
    }

    results = search(request.query, context)

    return {
        "query": request.query,
        "results": results
    }