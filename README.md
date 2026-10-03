# Bibith Sunil — Cybersecurity Portfolio

Personal portfolio site for **Bibith Sunil** — BCA graduate, cybersecurity student and SOC aspirant.
Live at **https://bibithsunil.github.io** (via GitHub Pages, free hosting).

## 🚀 Quick start (local preview)

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

No build step, no dependencies — open `index.html` directly if you prefer.

## 📁 Structure

```
portfolio/
├── index.html            # the whole site (all sections)
├── assets/
│   ├── css/style.css     # dark cyber theme
│   └── js/main.js        # typing animation, mobile nav, scroll effects
└── README.md
```

## ✏️ How to edit

- **Profile / contact info** — search `index.html` for `bibithsunil` and update the email, phone or LinkedIn link.
- **GitHub link** — replace the `href="#"` inside `id="githubLink"` with your real profile, e.g. `https://github.com/bibithsunil`.
- **Add a project** — copy one `<article class="project-card">` block in the Projects section, change the title, description, `<ul class="techs">` tags and links.
- **Colors** — all colours are CSS variables at the top of `assets/css/style.css` (background, accent, text).
- **New section** — copy a `<section class="section" id="...">` block and add a matching link in the `<nav>` menu.

## 🌐 Deployment (GitHub Pages)

The repo is **`bibithsunil.github.io`** — this exact name makes GitHub serve it automatically.

```bash
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

After pushing, the site is live at `https://bibithsunil.github.io` within a minute or two.
See **Actions → Pages** on GitHub if you ever need to re-trigger the deployment.

### Adding a custom domain later (~$10–15/yr)

1. Buy a domain (Namecheap, Porkbun, Cloudflare Registrar…).
2. GitHub → repo → **Settings → Pages → Custom domain** → enter it.
3. Add the DNS records GitHub gives you at your registrar.
4. Create a `CNAME` file containing your domain in the repo root.

## 🔒 Notes

- No external frameworks, no CDN trackers, no cookies — the site is fully self-contained
  (this is intentional: it also demonstrates good security hygiene).
- Content is drawn from Bibith's resume and project documentation; project card links
  ("Request code ↗") point to the contact section — swap them for real repo/demo URLs
  once they're public.