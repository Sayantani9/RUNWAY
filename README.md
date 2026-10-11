# RUNWAY — Overtaking Advisory POC

A responsive, static website for a scenario-driven proof of concept exploring camera + radar fusion for overtaking awareness when a large vehicle blocks the driver's view.

## Included
- `index.html` — page structure and interactive scenario panel
- `styles.css` — responsive visual design
- `app.js` — local, illustrative scenario switching
- `.nojekyll` — avoids GitHub Pages Jekyll processing

## Run locally
Open `index.html` in a browser. No build tools or package installation are required.

## Deploy with GitHub Pages
1. Create a GitHub repository, for example `runway-overtaking-advisory`.
2. Upload all files in this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your default branch (usually `main`) and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The URL appears in the Pages settings.

## Important scope and safety statement
This is a front-end concept/demo. It does **not** connect to cameras, radar, vehicle networks, maps, or live traffic. Scenario changes are illustrative UI states and the displayed evidence bars are not measured performance. The site must not be used to decide whether to overtake in real traffic.

A real system would require a validated sensor pipeline, calibrated uncertainty model, road and vehicle dynamics, human-factors evaluation, extensive closed-course testing, safety engineering, and applicable regulatory review. Never describe this prototype as guaranteeing a safe manoeuvre.

## Customisation
- Edit scenario copy and values in `app.js`.
- Edit content and page sections in `index.html`.
- Edit theme, layout, and responsive rules in `styles.css`.

No performance numbers are claimed; the evaluation bars are explicitly labelled illustrative.
