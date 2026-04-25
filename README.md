# Beginner CI/CD Starter

This repository contains a **very simple CI/CD pipeline** using **GitHub Actions**.

## What CI/CD means

- CI (Continuous Integration): automatically checks your code when you push changes.
- CD (Continuous Delivery): automatically prepares/deploys your app after CI passes.

## What this starter pipeline does

File: `.github/workflows/ci-cd.yml`

- Runs on:
  - push to `main`
  - pull request to `main`
  - manual trigger (`workflow_dispatch`)
- CI job:
  - checks out your code
  - runs a basic quality step
- CD job:
  - runs only after CI passes
  - creates a sample build file (`output/release.txt`)
  - uploads it as an artifact
  - includes a deploy placeholder

## How to use it

1. Create a GitHub repository and push this folder.
2. Ensure your default branch is named `main`.
3. Open GitHub -> **Actions** tab.
4. You should see **Beginner CI/CD** workflow run after push.
5. Click the run and open logs for each step.

## Next beginner improvements

When you add a real app:

- Node.js app:
  - add `npm ci`
  - add `npm test`
- Python app:
  - add `pip install -r requirements.txt`
  - add `pytest`

Then replace the **Deploy step placeholder** with real deploy commands (for example to Render, Railway, Vercel, AWS, etc.).
