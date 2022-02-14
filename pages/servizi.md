---
layout: page
title: "Servizi - Cosa facciamo"
excerpt: "Cosa facciamo? Dalla A di Abbattimento Alberi, alla Z di Stop Zanzare, progettazione giardini e manutenzione del verde. Scopri i nostri servizi di giardinaggio."
image: /img/servizi/servizi-giardinaggio.jpg
permalink: /servizi/
last_modified_at: 2022-02-14T8:00
---
<script type="application/ld+json">{"@context":"https://schema.org/","@type":"CollectionPage","url":"{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}"}</script>
# Cosa Facciamo

<br>

<p>Per la cura del verde a Udine e Gorizia affidati ai servizi di giardinaggio di <a href="/chi-sono/" aria-label="Chi sono"><strong>Giardiniere Potasiepe</strong></a>: manutenzione giardini privati, gestione di spazi verdi aziendali, pulizia del giardino, raccolta foglie, trattamenti anti zanzare, disinfestazioni blatte e altri insetti, realizzazione aiuole e terrazzi, ripristino impianti di irrigazione, recinzioni, potature, bordure in tufo, e ogni altro servizio di giardinaggio di cui puoi avere bisogno.</p>

<p>Tutti i servizi di giardinaggio sono svolti con la massima <strong>serietà</strong>, <strong>competenza</strong> e <strong>puntualità</strong>, e vengono offerti a <strong><a href="/prezzi/" aria-label="Scopri i prezzi"> prezzi onesti e trasparenti</a></strong>.</p>

<br>

<div class="text-center">
<p class="h2">Desideri un preventivo gratuito?</p>
<br>
<a title="Richiedi un preventivo gratuito" href="/contatti/" class="button"><b>SCRIVI</b></a>
</div>

<br>

## Elenco dei nostri servizi di giardinaggio

<div class="list-collection">
<ul>
  {% assign servizi = site.servizi | sort: 'order' %}
  {% for servizi in servizi %}
		<li>
      <img src="{% include relative-src.html src=servizi.image_path %}" width="400" height="300" alt="{{ servizi.url }}">
      <div>
      <h3>{{ servizi.name }}</h3>
      <p>{{ servizi.subtitle }}</p>
			<a href="{{ site.baseurl }}{{ servizi.url }}" title="{{ servizi.url }}"><strong>SCOPRI E PRENOTA</strong></a>
      </div>
    </li>
	{% endfor %}
</ul>
</div>

<br><br>
