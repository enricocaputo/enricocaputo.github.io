---
layout: page
title: "Prodotti e soluzioni per il giardino • Udine e Gorizia"
excerpt: "Scopri le soluzioni e i prodotti che installo entro 30 km da Palmanova (UD e GO): impianti di irrigazione automatica, prato a rotoli, prati carrabili e recinzioni."
image: /img/prodotti/prato-armato.jpg
permalink: /prodotti/
no_cta: true
---
<script type="application/ld+json">{"@context":"https://schema.org/","@type":"CollectionPage","url":"{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}"}</script>
# Prodotti e soluzioni per il tuo giardino

Seleziono e installo personalmente materiali professionali e duraturi per valorizzare gli spazi verdi nelle province di **Udine e Gorizia** (entro **30 km da Palmanova**): dalla posa di prato pronto a rotoli e grigliati carrabili fino agli impianti di irrigazione automatica e alle recinzioni su misura.

## Scopri le soluzioni che realizzo

<div class="list-collection">
<ul>
  {% assign prodotti = site.prodotti | sort: 'order' %}
  {% for prodotti in prodotti %}
		<li>
      <img src="{% include relative-src.html src=prodotti.image_path %}" width="400" height="300" alt="{{ prodotti.name }}">
      <div>
      <h3>{{ prodotti.name }}</h3>
      <p>{{ prodotti.subtitle }}</p>
			<a href="{{ site.baseurl }}{{ prodotti.url }}" title="{{ prodotti.name }}"><strong>SCOPRI DI PIÙ</strong></a>
      </div>
    </li>
	{% endfor %}
</ul>
</div>
