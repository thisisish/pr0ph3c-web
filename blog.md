---
layout: default
title: "Blog"
body_class: blog
extra_js:
  - /assets/js/search.js
---

<section class="terminal">
  <pre data-typed='[
    "Initializing blog feed...",
    "Pulling latest intel drops..."
  ]'></pre>
</section>

<div class="filters">
  <div class="tabs">
    <button class="tab active" data-cat="all">All</button>
    <button class="tab" data-cat="Recon">Recon</button>
    <button class="tab" data-cat="Exploits">Exploits</button>
    <button class="tab" data-cat="Writeups">Writeups</button>
  </div>
  <input id="search" type="search" placeholder="Filter by keyword or #tag">
</div>

<div id="posts" class="cards">
  {% for post in site.blog %}
  <a class="card" href="{{ post.url | relative_url }}" data-cat="{{ post.category | default: 'Uncategorized' }}" data-tags="{{ post.tags | join: ',' }}">
    <h3>{{ post.title }}</h3>
    <div class="meta">
      {% if post.category %}<span class="badge">{{ post.category }}</span>{% endif %}
      {% for t in post.tags %}<span class="tag">#{{ t }}</span>{% endfor %}
    </div>
    {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 140 }}</p>{% endif %}
  </a>
  {% endfor %}
</div>