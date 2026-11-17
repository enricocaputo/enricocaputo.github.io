---
layout: page
title: "Vivaio: aceri, ulivi, e piante da siepe"
excerpt: "Vendita e fornitura di piante di acero, aceri rossi, aceri giapponesi, olivi, ulivi secolari, ulivi bonsai e piante da siepe. Piante sane, nutrite e protette."
image: /img/vivai-potasiepe.jpg
permalink: /vivaio/
---
<script type="application/ld+json">{"@context":"https://schema.org/","@type":"CollectionPage","url":"{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}"}</script>
# Vivaio: aceri, ulivi, e piante da siepe

<br>

Seleziono e fornisco piante di acero, aceri rossi, aceri giapponesi, olivi, ulivi secolari, ulivi bonsai e piante da siepe: **piante sane, ben nutrite e protette**, pronte per essere messe a dimora nel tuo giardino.

<br>

![POTASIEPE vendita piante online](/img/vivai-potasiepe.jpg "vendita piante online")

<br><br>
<h2 class="text-center" id="aceri">Aceri giapponesi</h2>

<div class="list-collection">
<ul>
{% for item in site.data.aceri.items %}
<li>
    <a href="{{ item.link }}">
    <img src="{% include relative-src.html src=item.image %}" width="800" height="618" alt="{{ item.name }}">
    </a>
    <div class="text-center">
    <h3>{{ item.name }}</h3>
    <p>{{ item.excerpt }}</p>
    <p><strong>{{ item.price }},00 €</strong></p>
    <br>
    <a title="Acquista ora {{ item.name }}" href="{{ item.link }}" class="button">Acquista ora</a>
    </div>
    <br>
</li>
{% endfor %}
</ul>
</div>

<h2 class="text-center" id="ulivi">Ulivi secolari</h2>

<div class="list-collection">
<ul>
{% for item in site.data.ulivi.items %}
<li>
    <a href="{{ item.link }}">
    <img src="{% include relative-src.html src=item.image %}" width="300" height="400" alt="{{ item.name }}">
    </a>
    <div class="text-center">
    <h3>{{ item.name }}</h3>
    <p>{{ item.excerpt }}</p>
    <p><strong>{{ item.price }},00 €</strong></p>
    <br>
    <a title="Acquista ora {{ item.name }}" href="{{ item.link }}" class="button">Acquista ora</a>
    </div>
    <br>
</li>
{% endfor %}
</ul>
</div>

<h2 class="text-center">Piante da siepe</h2>

Fornisco un vasto assortimento di piante da siepe in vaso: **fotinia**, **fillirea**, **piante sempreverdi** a crescita lenta, come il **tasso** (*Taxus baccata*), il **bosso** (*Buxus sempervirens*), l'**agrifoglio** (*Ilex aquifolium*) e il **leccio** (*Quercus ilex*), oltre a **gelsomini** grandi e piccoli, **osmanto**, **euonimus**, **lonicera**, **ligustro** e **lauroceraso**.

Scopri di più ➜ [Piante da siepe: quale scegliere](/news/siepe-quale-scegliere/ "Piante da siepe: quale scegliere")
