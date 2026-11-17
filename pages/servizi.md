---
layout: page
title: "Servizi di giardinaggio • Il mio lavoro a Udine e Gorizia"
excerpt: "Scopri tutti i miei servizi di giardinaggio entro 30 km da Palmanova (UD e GO): progettazione giardini, potatura siepi e alberi, manutenzione prato e irrigazione."
image: /img/servizi/servizi-giardinaggio.jpg
permalink: /servizi/
---
<script type="application/ld+json">{"@context":"https://schema.org/","@type":"CollectionPage","url":"{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}"}</script>
# I miei servizi di giardinaggio

<br>

<p>Per la cura del verde nelle province di <strong>Udine e Gorizia</strong> (entro <strong>30 km da Palmanova</strong>), mi occupo personalmente di ogni aspetto del tuo giardino: manutenzione ordinaria, gestione di spazi verdi aziendali, potatura di siepi e alberi ad alto fusto, realizzazione aiuole, impianti di irrigazione, recinzioni, formazione o rigenerazione del prato e trattamenti mirati contro zanzare e processionaria.</p>

<p>Tutti gli interventi sono eseguiti da <a href="/chi-sono/" aria-label="Chi sono"><strong>me, Enrico</strong></a>, con la massima <strong>serietà</strong>, <strong>competenza tecnica</strong> e <strong>puntualità</strong>, a <strong><a href="/prezzi/" aria-label="Scopri i prezzi">prezzi onesti e trasparenti</a></strong>.</p>

<br>

## Elenco completo dei servizi

<div class="list-collection">
<ul>
  {% assign servizi = site.servizi | sort: 'order' %}
  {% for servizi in servizi %}
		<li>
      <img src="{% include relative-src.html src=servizi.image_path %}" width="400" height="300" alt="{{ servizi.name }}">
      <div>
      <h3>{{ servizi.name }}</h3>
      <p>{{ servizi.subtitle }}</p>
			<a href="{{ site.baseurl }}{{ servizi.url }}" title="{{ servizi.name }}"><strong>SCOPRI IL SERVIZIO</strong></a>
      </div>
    </li>
	{% endfor %}
</ul>
</div>
