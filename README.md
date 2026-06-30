# Naman Srivastava — GIS Solution Architect

Source for **https://naman1nzt.github.io/Publicsite/**

The entire site is one file, `index.html`. Content is driven by the `DATA` object near the
top of the `<script>` block — the globe nodes, side lists, project pages, and the no-WebGL
fallback all build themselves from it, so most edits happen there.

```
Publicsite/
├── index.html        ← the whole site
├── .nojekyll         ← tells GitHub Pages to serve files as-is
├── README.md         ← this file
└── images/           ← proof-of-concept screenshots
    ├── README.md
    └── sample-poc.png
```

---

## Already done for you

- Your name, email (`naman.srivastava097@gmail.com`), and a GitHub link in the header.
- A GitHub "View repository" button on every project, pointing at `github.com/Naman1nzt/<repo>`.
- Image-gallery support on project pages (the "ArcGIS Enterprise on AWS" page shows a
  placeholder so you can see it working).
- Social-share + SEO meta tags (title, description, Open Graph).

## To deploy this update

You already have the repo live. Just replace the files: upload this `index.html`, add the
`.nojekyll` file and the `images/` folder to the repo root, and commit. Pages redeploys in
a minute or two. (Drag-and-drop in the GitHub web UI works fine.)

---

## How to make it better — in priority order

1. **Write the real case studies.** This is the single highest-impact thing. In `DATA`,
   replace the placeholder `problem` / `approach` / `outcome` / `tradeoff` text with your
   actual specifics. Specificity and trade-offs are what win consulting clients. Sanitise
   real client names into sectors (already done in the drafts — keep doing that unless you
   have permission to name them).

2. **Create the repos** (or repoint the links). Each "View repository" button links to a
   repo under your account named after the project. Until that repo exists, the link 404s.
   Either create repos with these exact names, or edit the `href` in `renderProject` to your
   real repo URLs:

   | Project | Expected repo |
   |---|---|
   | ArcGIS Enterprise on AWS | `Naman1nzt/arcgis-enterprise-on-aws` |
   | Hexagon to Esri migration | `Naman1nzt/hexagon-to-esri-migration` |
   | HA GeoServer and PostGIS | `Naman1nzt/ha-geoserver-and-postgis` |
   | Enterprise 10.9.1 to 11.5 upgrade | `Naman1nzt/enterprise-10-9-1-to-11-5-upgrade` |
   | FME automation pipelines | `Naman1nzt/fme-automation-pipelines` |
   | AWS Lambda jobs | `Naman1nzt/aws-lambda-jobs` |
   | Survey123 field apps | `Naman1nzt/survey123-field-apps` |
   | Observability stack | `Naman1nzt/observability-stack` |
   | City gas utility network | `Naman1nzt/city-gas-utility-network` |
   | Public-health spatial programme | `Naman1nzt/public-health-spatial-programme` |
   | Water and wastewater demo | `Naman1nzt/water-and-wastewater-demo` |
   | Records digitisation | `Naman1nzt/records-digitisation` |
   | Suitability modelling | `Naman1nzt/suitability-modelling` |
   | Network and routing | `Naman1nzt/network-and-routing` |
   | Hotspot detection | `Naman1nzt/hotspot-detection` |
   | Change detection by remote sensing | `Naman1nzt/change-detection-by-remote-sensing` |

   > Quickest option if you don't have repos yet: change the button `href` in `renderProject`
   > to `https://github.com/Naman1nzt` so every link goes to your profile — no 404s.

3. **Add proof-of-concept images.** Put screenshots in `images/`, then add an `images` array
   to that project in `DATA` (see `images/README.md`). Replace `sample-poc.png` with a real one.

4. **Add a social-share image.** Drop a 1200×630 `og-cover.png` into `images/` so links to your
   site show a preview card (the meta tag already points at it).

5. **Tighten the coordinates (optional).** Projects are spread worldwide for a global look. If
   you'd rather show regional depth, change the `lat`/`lon` values to cluster around where you
   actually work.

6. **Custom domain (optional).** Buy a domain and set it in Settings → Pages → Custom domain,
   then enable "Enforce HTTPS".

---

## Where things live in `index.html`

| Change | Where |
|---|---|
| Projects, case-study text, coordinates | `DATA` object (top of script) |
| Panel labels | `PLABEL` map |
| Hero headline / intro | `<div class="hero-copy">` |
| Repo links | `renderProject` button |
| Project images | `images` field in `DATA` |
| Colours, fonts, layout | the `<style>` block |
