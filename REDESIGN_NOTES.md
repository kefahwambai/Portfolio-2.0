# Portfolio redesign notes

## Direction
The site has been repositioned around **Law · Technology · Strategy** rather than a generic developer portfolio. The design is intentionally editorial and professional: warm neutral background, restrained teal accent, serif display typography, simpler navigation and no particle effects.

## Main changes
- Rebuilt the home hero and navigation.
- Reframed the profile around legal work + software engineering.
- Added a dedicated **Insights** route (`/insights`) for emerging-issues commentary.
- Added editorial themes that can become real articles/case notes.
- Redesigned the projects presentation and preserved the existing project data/links.
- Rebuilt About, CV and footer sections.
- Added responsive mobile/tablet styling.
- Removed the loading screen/particle-heavy presentation from the main app.

## Suggested publishing strategy
Use Insights as the acquisition channel. Publish short, useful pieces consistently, especially:
1. Kenyan case notes with a practical takeaway.
2. Emerging procedural/legal developments.
3. Law + technology / AI / digital-evidence commentary.
4. Explainers aimed at clients or young practitioners.

Each article should eventually have its own URL, title/meta description, publication date, reading time and social-share preview image. That will make the site much stronger for search and sharing than a portfolio-only site.

## Run locally
```bash
npm install
npm start
```

## Production
```bash
npm run build
```

Note: dependency installation could not be completed inside the artifact environment because the package installation timed out. The source changes were made against the existing React 18 / Create React App structure and should be tested locally after `npm install`.
