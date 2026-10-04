# little days — Plog starter

A small Jekyll site for GitHub Pages. The homepage is a short bio; `/plog/` is the dated archive. Each entry is a Markdown file in `_posts/`.

## Publish on GitHub Pages

1. Create a repository named `YOUR-USERNAME.github.io` and add these files.
2. In the repository, open **Settings → Pages** and choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Wait for the Pages build. The site will appear at `https://YOUR-USERNAME.github.io`.

GitHub Pages builds Jekyll sites automatically. If you use a repository with a different name, Pages will use `https://YOUR-USERNAME.github.io/REPOSITORY/`; set `baseurl` in `_config.yml` to `"/REPOSITORY"`.

## Add an entry

Create `_posts/YYYY-MM-DD-short-title.md`:

```md
---
title: "A day worth keeping"
date: 2026-10-04 17:40:00 +0800
location: "Shanghai"
cover: "/assets/photos/2026-10-04.jpg"
tags: [walks, autumn]
---

Write the note here. Markdown formatting and inline images work too.
```

Put your images in `assets/photos/`, then commit the Markdown and image. A push to `main` updates the site.

## Personalize

- Change the name, bio, and location in `_layouts/home.html`.
- Change site title and description in `_config.yml`.
- Edit colors and layout in `assets/css/style.css`.
- Replace the sample cover URLs with your own images before publishing.
