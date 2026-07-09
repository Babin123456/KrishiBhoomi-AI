# 🖥️ KrishiBhoomi AI — Frontend Web Client

This is the Next.js frontend client dashboard application for the KrishiBhoomi AI platform, built using React, TypeScript, and Tailwind CSS.

---

## 🚀 Getting Started

First, install npm packages and run the development server:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the client.

---

## 📂 Folder Structure & File Mapping
- **`src/app/`**: Next.js App Router folders and layouts.
  - **`page.tsx`**: Main landing page combining all product overview sections.
  - **`login/page.tsx`** & **`register/page.tsx`**: Auth portal views.
  - **`dashboard/farmer/`**: Soil metrics, crop health, weather, disease scanners, and voice assistants.
  - **`dashboard/district/`**: Regional GIS outbreak mapping grids for administrators.
- **`src/components/`**: Reusable component catalog.
  - **`landing/`**: Navigation bars, hero headers, team sections, feature lists, and footer cards.
  - **`shared/`**: Glassmorphic panels, animated counters, and back-to-top buttons.
- **`public/`**: Static public media assets and files.
