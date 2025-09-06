# pr0ph3c — GitHub Pages Site

A hacker-themed blog + portfolio with a terminal-style intro.
- **No dates** on posts
- **Categories + tags** with instant filtering
- Hidden **/tools** page linking to your public tools repo

## Quick Start
1. Create a new repo named `pr0ph3c-ai.github.io` on GitHub.
2. Upload all files from this folder to that repo.
3. In **Settings → Pages**, set Source = `main` / root.
4. (DNS) Point `pr0ph3c.in` CNAME to `pr0ph3c-ai.github.io`.

## Add a Blog Post
Add a file under `/_blog/` like `my-post.md`:
```yaml
---
layout: default
title: "Post Title"
category: "Recon"
tags: [osint, quick]
description: "Short summary for cards & SEO."
---

Write your content here in Markdown (GitHub editor works!).
```

## Add a Project
Create a file under `/_projects/`:
```yaml
---
layout: default
title: "Project Name"
description: "One-liner."
link: "https://github.com/yourrepo"
---

Optional longer description here.
```

## Tools Repo Link
Update `tools/index.md` if your tools repo URL changes.