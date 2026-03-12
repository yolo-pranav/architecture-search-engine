# Architecture Detail Search - Frontend

A modern, responsive React + TypeScript frontend for the Architectural Detail Search Engine.

**Repository:** [yolo-pranav/architecture-search-engine](https://github.com/yolo-pranav/architecture-search-engine)

---

## 🎨 UI Screenshot

![Frontend UI](../frontend-ui.png)

---

## ✨ Features

### Three-Column Layout

1. **Input Pane** (Left Column)
   - Toggle between **Form Search** and **JSON Editor**
   - Form fields: Query, Host Element, Adjacent Element, Exposure
   - JSON mode for raw payload input (initially empty)
   - Submit button to send search requests

2. **Test Cases Panel** (Middle Column)
   - Pre-built test cases for scoring demonstrations
   - **Perfect Matches** – all 4 criteria aligned
   - **Partial Matches** – 3 out of 4 criteria
   - **Single Criterion** – individual field tests
   - **Cross-Match** – mixed criteria combinations
   - **Edge Cases** – non-existent values, empty inputs
   - Clear All button to reset fields
   - **Smart Population:** Clicking any test case automatically fills the active input mode (form or JSON)

3. **Results Panel** (Right Column)
   - Real-time JSON response display
   - Shows raw API output with scores and explanations
   - Sticky positioning for easy reference while scrolling

### Interactive Search

- **Form Mode:** Intuitive input fields for beginners
- **JSON Mode:** Raw payload control for advanced users
- **Test-Driven Discovery:** Use built-in cases to explore scoring behavior
- **Responsive Design:** Stacks on mobile, side-by-side on desktop

### Search Scoring Visualization

Test cases demonstrate how scoring works:

- **Perfect matches** show maximum scores (all criteria aligned)
- **Partial matches** show reduced scores (missing criteria)
- **Single criterion** tests isolate individual factor contributions
- **Edge cases** verify behavior with invalid/empty inputs

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **HTTP Client:** Axios
- **State Management:** React Hooks (`useState`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
frontend/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page (3-column layout)
│   └── globals.css      # Global styles
├── components/
│   ├── SearchForm.tsx   # Form-based search input
│   ├── JsonInput.tsx    # JSON editor
│   ├── TestCases.tsx    # Test case buttons
│   └── ResultsView.tsx  # Results display
├── public/
│   └── file.svg         # Favicon
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## 🔌 API Integration

The frontend connects to the backend at `http://localhost:8000/search`.

### Request Format

```json
{
  "query": "text to search",
  "host_element": "optional",
  "adjacent_element": "optional",
  "exposure": "optional"
}
```

### Response Format

```json
{
  "results": [
    {
      "detail_id": 1,
      "title": "Detail Title",
      "score": 14.0,
      "explanation": ["explanation strings"]
    }
  ]
}
```

---

## 📖 Development

- **Styling:** Tailwind CSS with dark theme (slate color scheme)
- **Form State:** Managed locally with `useState` hooks
- **Async:** Axios for HTTP requests
- **Type Safety:** Full TypeScript coverage

---

## 🌐 Browser Support

Works on all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Responsive on mobile, tablet, and desktop.

---

## 📝 ESLint

```bash
npm run lint
```

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)

---

## 📄 License

Part of the Architecture Search Engine project.
