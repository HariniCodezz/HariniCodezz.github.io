# Portfolio Website (GitHub Pages)

## What’s included
- Clean, modern portfolio layout (responsive + dark/light themes)
- Editable content & contact links stored in:
  - `src/data/portfolio.config.js`
  - `src/data/portfolio.content.js`

## How to edit (before deployment)
1. Open these files in VS Code:
   - `src/data/portfolio.config.js`
     - Set `profile.links.email`, `profile.links.github`, `profile.links.linkedin`, `profile.links.resume`
     - Set `profile.name`
   - `src/data/portfolio.content.js`
     - Edit section text (about/skills/projects/certifications/education)

## Resume
- Default resume path: `assets/resume.pdf`
- Place your PDF there or update `profile.links.resume`.

## GitHub Pages deployment
Since this is plain static HTML/CSS/JS:
1. Commit and push this repo to GitHub.
2. In GitHub → **Settings** → **Pages**
3. Select source: **Deploy from a branch**
4. Branch: `main` (or your branch) and folder: `/` (root)
5. Save.

## Local testing
- Open `index.html` in a browser.
- For best results with ES modules, use a simple server (optional), e.g. VS Code Live Server.

