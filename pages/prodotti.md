---
layout: page
title: "I nostri prodotti"
excerpt: "Elenco dei prodotti offerti"
image: /img/prodotti/prato-armato.jpg
permalink: /prodotti/
last_modified_at: 2022-02-14T8:00
---
<script type="application/ld+json">{"@context":"https://schema.org/","@type":"CollectionPage","url":"{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}"}</script>
# Prodotti garantiti e sostenibili

La massima cura nella scelta della materia prima e la ricerca della migliore qualità si uniscono alla creatività tipicamente italiana.

## Scopri i nostri prodotti

<div class="list-collection">
<ul>
  {% assign prodotti = site.prodotti | sort: 'order' %}
  {% for prodotti in prodotti %}
		<li>
      <img src="{% include relative-src.html src=prodotti.image_path %}" width="400" height="300" alt="{{ prodotti.url }}">
      <div>
      <h3>{{ prodotti.name }}</h3>
      <p>{{ prodotti.subtitle }}</p>
			<a href="{{ site.baseurl }}{{ prodotti.url }}" title="{{ prodotti.url }}"><strong>SCOPRI E PRENOTA</strong></a>
      </div>
    </li>
	{% endfor %}
</ul>
</div>
