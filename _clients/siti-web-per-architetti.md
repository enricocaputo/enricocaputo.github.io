---
title: Siti web per Architetti
subtitle: Architetto
excerpt: Website ideale per architetti e studi di progettazione. Guarda una live demo. Incrementa la presenza web del tua studio di architetto con questo tema altamente personalizzabile.
external_url: https://www.studioverve.co.uk/
image_path: /images/clients/architetto.jpg
---
Questo sito web è perfetto per architetti, il template è personalizzabile in ogni dettagli. Guarda la [live demo](https://www.studioverve.co.uk/ "live demo"){: rel="nofollow"}.
Rafforza la presenza web del tuo studio arricchendo quest template premium.

Architetto è stato realizzto da [SitiWeb_FVG](/), il Cloud CMS per Jekyll.

Impara Jekyll direttamente dal [sito ufficiale](https://jekyllrb.com/ "Vai a Jekyll Official Website"){: rel="nofollow"}.

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

Architetto è stato costruito con [Jekyll](http://jekyllrb.com/){: rel="nofollow"} versione 3.7.2, ma supporta le future versioni.

Installa le dipendenze con [Bundler](http://bundler.io/){: rel="nofollow"}:

~~~bash
$ bundle install
~~~

Esegui `jekyll` tramite Bundler per assicurarti di stare usando la versione corretta:

~~~bash
$ bundle exec jekyll serve
~~~

## Editing

Architetto è già ottimizzato per poter aggiornare facilmente le pagine, i dettagli della tua attività, i membri dello staff e i vari elementi che compongono il sito, come ad esempio la barra di navigazione ed il footer.

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

### Footer

* Raccolto in un file sotto forma di una lista di dati per offrire semplicità di accesso e modifica.
* Da impostare nella sezione *Data* / *Footer*.

### Dettagli attività

* Riutilizzato in tutto il sito per tempo ed evitare ripetizioni.
* Da impostare nella sezione *Data* / *Company*.
