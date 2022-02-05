---
layout: default
title: Sitemap www.potasiepe.it
excerpt: "Per trovare tutto e subito, usa la mappa per orientarti all'interno del sito web potasiepe.it"
permalink: /sitemap/
---
# Sitemap

<p class="text-center"><strong> Per trovare tutto e subito </strong></p>

<p class="text-center"> Usa la mappa per orientarti all'interno del sito web </p>

<br>

{% capture site_url %}{% if site.url %}{{ site.url | append: site.baseurl }}{% else %}{{ site.github.url }}{% endif %}{% endcapture %}

<ul>
  <li><h3>POTASIEPE</h3></li>
  <li>
    <h4>
        <a class="page-link" href="/brand/" title="Brand"> Brand </a>
    </h4>
  </li>
  <li>
    <h4>
      	<a class="page-link" href="/chi-sono/" title="Chi sono"> About </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/contatti/" title="Contatti"> Contatti </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/lavora-con-noi/" title="Opportunità di lavoro"> Lavora con noi </a>
    </h4>
  </li>
  <li>
    <h4>
        <a class="page-link" href="/privacy/" title="Privacy e cookie"> Privacy e cookie </a>
    </h4>
  </li>
</ul>

<br>

<ul>
  <li><h3>I NOSTRI SERVIZI</h3></li>
	{% for servizi in site.servizi %}
		<li>
      <h4>
			<a class="page-link" href="{{ site.baseurl }}{{ servizi.url }}" title="{{ servizi.name }}">{{ servizi.name }}</a>
      </h4>
    </li>
	{% endfor %}
</ul>

<br>

<ul>
  <li><h3>I NOSTRI PRODOTTI</h3></li>
{% for prodotti in site.prodotti %}
  <li>
    <h4>
    <a class="page-link" href="{{ site.baseurl }}{{ prodotti.url }}" title="{{ prodotti.name }}">{{ prodotti.name }}</a>
    </h4>
  </li>
{% endfor %}
</ul>

<br>

<ul>
  <li><h3>SCOPRI E ACQUISTA</h3></li>
    <li>
      <h4>
          <a class="page-link" href="/prezzi/" title="Prezzi"> Prezzi </a>
      </h4>
    </li>
    <li>
      <h4>
      <a class="page-link" href="/vivaio/" title="Vivaio"> Vivaio </a>
      </h4>
    </li>
    <li>
      <h4>
          <a class="page-link" href="/gallery/" title="Foto Gallery"> Gallery </a>
      </h4>
    </li>
    <li>
      <h4>
          <a class="page-link" href="/news/" title="Blog"> Consigli di giardinaggio </a>
      </h4>
    </li>
    <li>
      <h4>
          <a class="page-link" href="/calendario-di-giardinaggio/" title="Calendario orto e giardino"> Calendario orto e giardino </a>
      </h4>
    </li>
</ul>

<br>
