# Architectural Detail Search

This repository contains the Piaxis web application which consists of two main components:

## 📁 Backend

Located in the `backend/` directory.

- **Purpose:** Serves the API for search functionalities.
- **Key files:**
  - `app.py` - main Flask/FASTAPI (verify) entry point
  - `data.py` - handles data loading or utilities
  - `search_engine.py` - search logic
  - `search_utils.py` - additional helpers

## 📁 Frontend

Located in the `frontend/` directory, built with Next.js and React.

- **Purpose:** User interface for submitting queries and viewing search results.
- **Key technologies:** Next.js (App Router), TypeScript, Tailwind (assuming), ESLint config
- **Important files:**
  - `app/` - application pages and layout
  - `components/` - reusable React components (`JsonInput`, `ResultsView`, `SearchForm`)
  - `public/` - static assets
  - `next.config.ts`, `tsconfig.json`, `package.json` etc.

## 🚀 Getting Started

1. **Backend**
   - Change into the `backend` folder and install dependencies (e.g., `pip install -r requirements.txt` if present).
   - Run the backend in the root directory with: `uvicorn backend.app:app --reload`

2. **Frontend**
   - Change into the `frontend` folder.
   - Install with `npm install` or `yarn`.
   - Start the development server with `npm run dev`.

## 🖥️ UI Overview

The frontend now provides a flexible three‑column layout:

1. **Input pane** – toggle between a form-based search or raw JSON editor.  Fields include query, host element, adjacent element and exposure.
2. **Test cases panel** – a persistent sidebar of buttons that populate the input pane.  Cases range from perfect matches to edge‑cases and can fill either the form or the JSON textarea depending on which tab is active (the JSON textarea is initially empty).
3. **Results area** – displays the raw JSON response returned from the backend.  It updates automatically when searches are submitted.

This layout is responsive and stacks on smaller screens; the test‑cases panel remains sticky for easy access.

The test cases illustrate scoring logic by crafting payloads with varying numbers of matching criteria.

## 🛠️ Development Notes

- Both parts should be running concurrently during development.
- API endpoints from the backend are consumed by frontend components.

## 🛠️ Development Notes

- Both parts should be running concurrently during development.
- API endpoints from the backend are consumed by frontend components.