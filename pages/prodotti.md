---
layout: page
title: "I nostri prodotti"
excerpt: "Elenco dei prodotti offerti"
image:
permalink: /prodotti/
---
# Prodotti garantiti e sostenibili

<div class="list-collection">
<ul>
  {% assign prodotti = site.prodotti | sort: 'order' %}
  {% for prodotti in prodotti %}
		<li>
      <img src="{% include relative-src.html src=prodotti.image_path %}" alt="{{ prodotti.url }}">
      <div>
      <h2 class="h3">{{ prodotti.name }}</h2>
      <p>{{ prodotti.subtitle }}</p>
			<a href="{{ site.baseurl }}{{ prodotti.url }}" title="{{ prodotti.url }}"><strong>SCOPRI E PRENOTA</strong> &gt;</a>
      </div>
    </li>
	{% endfor %}
</ul>
</div>
