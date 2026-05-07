# ComplianceIQ — Static Website

Pixel-perfect HTML/CSS replica of the Figma design.

## Project Structure

```
compliance-project/
├── index.html          ← Main HTML file
├── vercel.json         ← Vercel deployment config
├── css/
│   └── style.css       ← All styles (design tokens, layout, responsive)
├── js/
│   └── main.js         ← Navbar scroll, mobile drawer, active nav
└── assets/
    ├── banner-image.png        ← Hero illustration
    ├── section2-image.png      ← Why section illustration
    ├── underline-vector.png    ← Blue underline under "Compliance"
    ├── vector-chevrons.png     ← Decorative chevron arrows
    ├── contact-icon.png        ← Phone icon in nav CTA
    ├── menu-icon.png           ← Hamburger icon
    ├── nav-home.png            ← Mobile drawer icons
    ├── nav-about.png
    ├── nav-services.png
    ├── nav-pricing.png
    ├── nav-faq.png
    ├── nav-contact.png
    ├── icon-regulatory.png     ← Feature card icons
    ├── icon-filings.png
    └── icon-risk.png
```

## Deploy to Vercel (3 ways)

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
cd compliance-project
vercel
```
Follow the prompts → get live URL instantly.

### Option 2 — GitHub + Vercel (recommended for live URL)
1. Push this folder to a GitHub repo
2. Go to vercel.com → "Add New Project" → Import the repo
3. Framework: **Other** | Root directory: `.` | Click Deploy
4. Live URL ready in ~30 seconds

### Option 3 — Drag & Drop (no account needed for Netlify)
Go to app.netlify.com → drag the `compliance-project` folder onto the deploy zone.
