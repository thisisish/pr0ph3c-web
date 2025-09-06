---
layout: default
title: "pr0ph3c"
description: "Welcome to the darknet side of cybersecurity."
body_class: home
---

<section class="terminal">
  <pre data-typed='[
    "Initializing pr0ph3c...",
    "Access granted.",
    "Welcome to the darknet side of cybersecurity."
  ]'></pre>
</section>

<section class="grid two">
  <div>
    <h2>Latest Intel</h2>
    <div class="cards">
      {% assign latest = site.blog | sort: 'title' | slice: 0, 3 %}
      {% for post in latest %}
        <a class="card" href="{{ post.url | relative_url }}">
          <h3>{{ post.title }}</h3>
          {% if post.category %}<div class="badge">{{ post.category }}</div>{% endif %}
          {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 120 }}</p>{% endif %}
        </a>
      {% endfor %}
    </div>
    <p><a class="ghost" href="{{ '/blog' | relative_url }}">View all posts →</a></p>
  </div>
  <div>
    <h2>Featured Ops</h2>
    <div class="cards">
      {% assign feats = site.projects | slice: 0, 2 %}
      {% for proj in feats %}
      <a class="card" href="{{ proj.url | relative_url }}">
        <h3>{{ proj.title }}</h3>
        <p>{{ proj.description }}</p>
      </a>
      {% endfor %}
    </div>
    <p><a class="ghost" href="{{ '/projects' | relative_url }}">See all projects →</a></p>
  </div>
</section>