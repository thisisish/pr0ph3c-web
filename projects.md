---
layout: default
title: "Portfolio"
body_class: projects
---

<section class="terminal">
  <pre data-typed='[
    "Deploying portfolio modules...",
    "Rendering offensive ops showcase..."
  ]'></pre>
</section>

<div class="cards">
  {% for proj in site.projects %}
  <a class="card" href="{{ proj.url | relative_url }}">
    <h3>{{ proj.title }}</h3>
    <p>{{ proj.description }}</p>
    {% if proj.link %}<span class="ghost">Repo → {{ proj.link }}</span>{% endif %}
  </a>
  {% endfor %}
</div>