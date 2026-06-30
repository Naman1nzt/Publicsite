# Naman Srivastava — GIS Solution Architect

Source for **https://naman1nzt.github.io/Publicsite/**

```
Publicsite/
├── index.html     ← the engine (globe, pages, routing). You rarely touch this.
├── data.js        ← ALL your content. Edit this file.
├── .nojekyll      ← tells GitHub Pages to serve files as-is
├── README.md      ← this file
└── images/        ← your proof-of-concept screenshots
    ├── README.md
    └── sample-poc.png
```

## Why two files

`data.js` holds everything you write (name, email, projects, links, image paths).
`index.html` is just the machinery that renders it. They're independent: if one file
ever gets corrupted, the other is untouched — so a bad edit can't wipe your whole site.
If `data.js` is missing or has a typo, the page shows a clear "fix data.js" message
instead of going blank.

---

## Editing your content (`data.js`)

Open `data.js`. Two things live there:

- **`SITE`** — your name, email, GitHub handle, and the hero headline/intro.
- **`DATA`** — your four layers and every project inside them.

### Add or edit a project

Add an object to a layer's `points` array:

```js
{
  name: "Pipeline integrity dashboard",
  lat: 17.38, lon: 78.48,           // right-click in Google Maps to copy lat, lon
  role: "Solution architect",
  loc: "Hyderabad",
  problem: "…", approach: "…", outcome: "…",
  tradeoff: "…",                    // optional
  tech: ["ArcGIS Enterprise", "Python"],

  // all optional — see next section:
  images: ["images/dashboard.png"],
  repo:   "https://github.com/Naman1nzt/pipeline-integrity",
  links:  [{ label: "Live demo", url: "https://…" }]
}
```

The node, placard, side-list entry, and full project page generate automatically.

---

## Linking your repos & scripts

You have three ways to attach code to a project, all set in `data.js`:

1. **The main "View repository" button** — set `repo` on the project:
   ```js
   repo: "https://github.com/Naman1nzt/your-repo"
   ```
   If you leave `repo` out, the button defaults to
   `https://github.com/Naman1nzt/<project-name-slug>`.

2. **Extra links (multiple repos, scripts, gists, live demos)** — set `links`:
   ```js
   links: [
     { label: "Terraform module", url: "https://github.com/Naman1nzt/…" },
     { label: "Migration script", url: "https://github.com/Naman1nzt/…/blob/main/migrate.py" },
     { label: "Live demo",       url: "https://…" }
   ]
   ```
   These appear as a "Code & resources" list on the project page. You can point a link
   straight at a single file in a repo (open the file on GitHub and copy the URL).

3. **A whole separate repos page (optional)** — if you later want a page that auto-lists
   every public repo on your account, ask and I'll wire it to the GitHub API
   (`api.github.com/users/Naman1nzt/repos`).

> Reminder: these URLs point at repos under your account. Create the repo (or fix the URL)
> or the link will 404. The "ArcGIS Enterprise on AWS" project shows `repo` + `links` in use.

---

## Adding images (proof of concept)

1. Put the screenshot in `images/` (e.g. `images/aws-dashboard.png`).
2. Add it to that project's `images` array in `data.js`.

Keep each image under ~500 KB (compress with TinyPNG or export WebP), and blur any real
client data. Replace `sample-poc.png` with a real screenshot when you have one.

---

## Deploying an update

Upload the changed files to the `Publicsite` repo root and commit — Pages redeploys in a
minute or two. Day to day you'll usually only re-upload `data.js` (and new images).

## Netlify (optional second host)

Netlify site names can't contain a dot, so `naman.srivastava` isn't valid — the closest are
`namansrivastava` or `naman-srivastava`. To check/claim one: create a site (drag your folder
onto app.netlify.com/drop), then **Site configuration → Domain management → Options → Edit
site name** — it tells you instantly if the name is taken.
