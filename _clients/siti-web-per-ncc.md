---
title: Siti web per NCC - Noleggio Auto
subtitle: NCC - Noleggio Auto e Barche
excerpt: Sito Web ideale per Noleggio Senza Conducente di auto e barche. Incrementa i risultati della tua attività grazie a questo tema personalizzabile a piacere.
external_url: https://portorozrent.si/
image_path: /images/clients/portorozrent.png
---
Sito Web ideale per Noleggio Senza Conducente di auto e barche. Incrementa i risultati della tua attività grazie a questo tema personalizzabile a piacere. Guarda una [live demo](https://portorozrent.si/){: rel="nofollow"}.

Rental è stato realizzato da [SitiWeb_FVG](/), il Cloud CMS per Jekyll.

Impara Jekyll direttamente dal [sito ufficiale](https://jekyllrb.com/){: rel="nofollow"}.

## Caratteristiche

* Contact form
* Componenti pre-stilizzati
* Ottimizzazione per l'editing
* SEO tags
* Google Analytics
* Blog con paginazione
* Categorizzazione dei post
* Disqus commenti utenti ai post
* Sistema autore - membri staff
* Footer Configurabile
* Ottimizzato per editing mezzo CMS
* RSS/Atom feed

## Setup

1. Aggiungi i dettagli del tuo sito in `_config.yml`.
2. Aggiungi il tuo account Google Analytics in `_config.yml`.
3. Testa il tuo sito sul nostro server oppure in locale.

## Sviluppo

Rental è stato costruito con [Jekyll](http://jekyllrb.com/){: rel="nofollow"} versione 3.7.2 e supporta le future versioni.

Installa le dipendenze con [Bundler](http://bundler.io/){: rel="nofollow"}:

~~~bash
$ bundle install
~~~

Esegui `jekyll` tramite Bundler per assicurarti di stare usando la versione corretta:

~~~bash
$ bundle exec jekyll serve
~~~

## Editing

Rental è già ottimizzato per poter aggiornare facilmente le pagine, i dettagli della tua attività, i membri dello staff e i vari elementi che compongono il sito, come ad esempio la barra di navigazione ed il footer.

### Posts

* Aggiungi, aggiorna o rimuovi un post nella raccolta *Posts*.
* Il campo **Autore** si collega ai membri dello **Staff** nella specifica collezione.
* Le pagine di documentazione sono organizzate nella navigazione per categoria, con gli URL basati sul percorso all'interno della cartella `_docs`.
* Cambia i valori predefiniti quando vengono creati nuovi post in `_posts/ _defaults.md`.

### Contact Form

* Preconfigurato per lavorare con SitiWeb_FVG ma può essere facilmente indirizzato verso altri provider (ad es. [FormSpree](https://formspree.io/){: rel="nofollow"}).
* Invia le email all'indirizzo indicato in *company details*.

### Staff

* Riutilizzato in tutto il sito per salvare più posizioni di modifica.
* Aggiungi `excluded _in_ search: true` a qualsiasi argomento della pagina di documentazione per escludere quella pagina nei risultati della ricerca.

### Bara di Navigazione / Menu

* Raccolto in un file sotto forma di una lista di dati per offrire semplicità di accesso e modifica.
* Da impostare nella sezione *Data* / *Navigation*.

### Footer

* Raccolto in un file sotto forma di una lista di dati per offrire semplicità di accesso e modifica.
* Da impostare nella sezione *Data* / *Footer*.
