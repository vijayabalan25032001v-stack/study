# Fullstack CI/CD Beginner Project

This repo now has a complete small app:

- `api`: Node.js + Express API
- `frontend`: Vite frontend (HTML/CSS/JS)
- `.github/workflows/ci-cd.yml`: CI/CD pipeline for both

## Project structure

```text
.
├─ api
│  ├─ src
│  │  ├─ app.js
│  │  └─ server.js
│  └─ test
│     └─ app.test.js
├─ frontend
│  ├─ src
│  │  ├─ main.js
│  │  └─ style.css
│  └─ index.html
└─ .github/workflows/ci-cd.yml
```

## API endpoints

- `GET /api/health`
- `GET /api/tasks`
- `POST /api/tasks` with JSON body: `{ "title": "New task" }`

## Run locally

Open two terminals in this repo:

1. Start API:

```powershell
cd api
npm ci
npm run dev
```

2. Start frontend:

```powershell
cd frontend
npm ci
npm run dev
```

Frontend usually opens at `http://localhost:5173` and API runs at `http://localhost:4000`.

## CI/CD pipeline

Workflow: `.github/workflows/ci-cd.yml`

- CI job:
  - installs API dependencies
  - runs API tests
  - installs frontend dependencies
  - builds frontend
- CD job (only on push to `main`):
  - rebuilds frontend
  - uploads `frontend/dist` as artifact
  - includes deploy placeholder commands

## Push and trigger workflow

```powershell
git add .
git commit -m "Add fullstack app with CI/CD"
git push
```

Then open GitHub -> **Actions** -> **Fullstack CI/CD (Beginner)**.

## Next upgrade ideas

1. Add database (SQLite or PostgreSQL) for tasks.
2. Add frontend tests (Vitest + Testing Library).
3. Replace CD placeholder with real deployment target.
