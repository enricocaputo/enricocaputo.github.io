---
layout: page
title: "Servizi - Cosa facciamo"
excerpt: "Cosa facciamo? Dalla A di Abbattimento Alberi, alla Z di Stop Zanzare, progettazione giardini e manutenzione del verde. Scopri i nostri servizi di giardinaggio."
image: /img/servizi/servizi-giardinaggio.jpg
permalink: /servizi/
---
# Cosa Facciamo

<br>

<p>Per la cura del verde affidati ai servizi di giardinaggio di <a href="/chi-sono/" aria-label="Chi sono"><strong>Giardiniere Potasiepe</strong></a>: manutenzione giardini privati, gestione di spazi verdi aziendali, pulizia del giardino, raccolta foglie, trattamenti anti zanzare, disinfestazioni blatte e altri insetti, realizzazione aiuole e terrazzi, ripristino impianti di irrigazione, recinzioni, potature, bordure in tufo, e ogni altro servizio di giardinaggio di cui puoi avere bisogno.</p>

<p>Tutti i servizi di giardinaggio sono svolti con la massima <strong>serietà</strong>, <strong>competenza</strong> e <strong>puntualità</strong>, e vengono offerti a <strong><a href="/prezzi/" aria-label="Scopri i prezzi"> prezzi onesti e trasparenti</a></strong>.</p>

<br>

<div class="text-center">
<h2>Desideri un preventivo gratuito?</h2>
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
      <h2 class="h3">{{ servizi.name }}</h2>
      <p>{{ servizi.subtitle }}</p>
			<a href="{{ site.baseurl }}{{ servizi.url }}" title="{{ servizi.url }}"><strong>SCOPRI E PRENOTA</strong></a>
      </div>
    </li>
	{% endfor %}
</ul>
</div>

<br><br>
