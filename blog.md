---
layout: page
title: Блог
permalink: /blog/
---
<ul class="list">
{% for post in site.posts %}
  <li>
    {{ post.date | date: "%b %-d, %Y" }}
    {{ post.title }}
  </li>
{% endfor %}
</ul>
