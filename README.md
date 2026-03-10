# Karo Pitch — React App


## 📁 Project Structure

```
karopitch-react/
├── public/
│   └── index.html              ← HTML shell (React root)
├── src/
│   ├── index.js                ← React entry point
│   ├── App.js                  ← Root component (assembles all sections)
│   ├── styles/
│   │   └── globals.css         ← CSS variables, reset, shared utilities
│   ├── hooks/
│   │   └── useScrollReveal.js  ← Custom hook for scroll animations
│   └── components/
│       ├── Navbar.jsx + .css
│       ├── Hero.jsx + .css
│       ├── Sections.jsx + .css     ← TrustBar, About, HowItWorks, WhoCanApply
│       ├── Investors.jsx + .css
│       ├── Startups.jsx + .css
│       ├── KaroStartup.jsx + .css
│       └── CTAFooter.jsx + .css    ← CTA + Footer
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Run Locally

### Step 1 — Install dependencies
```bash
cd karopitch-react
npm install
```

### Step 2 — Start dev server
```bash
npm start
```
Opens at **http://localhost:3000** with hot reload. ✅





### ✅ Option C — GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/karopitch-react",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run:
```bash
npm run deploy
```

---

## 🔄 Update & Redeploy
```bash
# Make your changes, then:
git add .
git commit -m "Update: describe change"
git push
# Vercel/Netlify will auto-redeploy ✅
```

---

## 🧩 Component Map

| Component | Section |
|---|---|
| `Navbar` | Fixed top navbar + mobile hamburger menu |
| `Hero` | Full-screen dark hero with stats |
| `TrustBar` | "As seen in" media logos bar |
| `About` | About Karo Pitch — 2-col grid |
| `HowItWorks` | 4-step process cards |
| `WhoCanApply` | 6 founder category cards |
| `Investors` | 4 investor profile cards (dark bg) |
| `Startups` | 6 featured startup cards grid |
| `KaroStartup` | About KaroStartup + quote card |
| `CTA` | Final call-to-action (blue bg) |
| `Footer` | 4-col footer with social links |

---

## 🎨 Design Tokens (CSS Variables)

Edit in `src/styles/globals.css`:

| Variable | Value | Usage |
|---|---|---|
| `--blue` | `#2563EB` | Primary CTAs, links |
| `--orange` | `#F97316` | Secondary accent |
| `--dark` | `#0D1117` | Hero bg, dark sections |
| `--body-text` | `#374151` | Paragraph text |
| `--muted` | `#6B7280` | Labels, captions |
| `--border` | `#E5E7EB` | Borders, dividers |
| `--bg-gray` | `#F7F8FA` | Section bg |

---

## 📞 Contact

- **Email:** business@karostartup.com  
- **Phone:** +91 93151 94393  
- **Website:** [karostartup.com](https://karostartup.com)
