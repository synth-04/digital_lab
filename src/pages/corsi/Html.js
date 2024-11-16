import React from 'react';
import { Container, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TableOfContents from '../../components/TableOfContents';
import ParallaxSection from '../../components/ParallaxSection';

const Html = () => {
  return (
  <Container maxWidth="lg" sx={{pb: 4}}>
    <ParallaxSection  bgImage="/images/computercorsi.jpg" title="Sviluppo Web con HTML e CSS" />
        <div style={{ padding: '5px' }}>
        </div>
    <Typography variant="h5" gutterBottom sx={{ my: 4 }}>
      Introduzione a HTML
    </Typography>
    <TableOfContents />

    <Typography variant="body1">
      <p>
        HTML è l'acronimo di Hypertext Markup Language ("Linguaggio di contrassegno per gli Ipertesti"). Si tratta di un linguaggio di markup (dichiarativo), che permette di indicare come disporre gli elementi all'interno di una pagina. Non ha i costrutti tipici di un linguaggio di programmazione (selezione, iterazione, funzioni ecc..).
        Le indicazioni sulla “disposizione” nella pagina web vengono date attraverso degli appositi marcatori, detti tag ('etichette'), che hanno la caratteristica di essere inclusi tra parentesi angolari (ad esempio, <code>&lt;html&gt;</code> è il segnaposto dell’inizio della pagina HTML).
      </p>
      <p>
        In genere, i tag funzionano a “scatole cinesi”: vi è un tag di apertura e uno di chiusura. Tutto ciò che è contenuto all’interno dei due tag, è inserito nella pagina web nella posizione corretta. Ad esempio:
      </p>
    </Typography>
    <SyntaxHighlighter language="html" style={monokai}>
      {`<b> Ciao! </b>`}
    </SyntaxHighlighter>
    <Typography variant="body1">
      <p>
        La parola “Ciao!” è contenuta tra il tag di apertura e chiusura <code>&lt;b&gt;</code>, che rende il testo in grassetto. Il risultato è che la parola “Ciao!” sarà in grassetto.
      </p>
      <p>
        Per creare una pagina in HTML, dobbiamo semplicemente creare un file di testo con estensione <code>.html</code>: in questo modo, il browser web lo interpreterà come pagina HTML e lo tradurrà nella pagina appropriata.
        Modificando tramite l’editor di testi il codice HTML e aggiornando la pagina, noteremo subito le modifiche appropriate nella pagina web sul browser.
        Possiamo vedere il codice HTML (e non solo) di qualsiasi pagina web sul browser cliccando la combinazione di tasti <strong>CTRL-U</strong>.
      </p>
    </Typography>

    <Typography variant="h5" gutterBottom>
      Struttura di base
    </Typography>
    <Typography variant="body1">
      <p>
        I tag che consentono di definire la struttura di base di una pagina in HTML sono:
      </p>
      <ul>
        <li><code>&lt;html&gt;</code>: Questo tag contiene tutta la pagina in HTML.</li>
        <li><code>&lt;head&gt;</code>: Questo tag contiene alcune informazioni utili per la gestione della pagina: ad esempio, è possibile inserire degli script e alcuni tag funzionano solo se inseriti nell’<code>head</code>.</li>
        <li><code>&lt;body&gt;</code>: Contiene tutto il corpo della pagina web.</li>
      </ul>
      <p>
        Guardiamo un esempio:
      </p>
    </Typography>
    <SyntaxHighlighter language="html" style={monokai}>
      {`<html>
  <head>
    <title> Pagina di Prova </title>
  </head>
  <body>
    Ciao! Questa è la nostra prima pagina web
  </body>
</html>`}
    </SyntaxHighlighter>
    <Typography variant="h5" gutterBottom>
  Formattazione del testo
</Typography>
<Typography variant="body1">
  <p>
    Alcuni tag di base per la formattazione del testo sono:
  </p>
  <ul>
    <li><code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>,...: Heading, intestazioni per il testo. Ogni numero è un livello diverso di intestazione.</li>
    <li><code>&lt;p&gt;</code>: Paragrafo del testo.</li>
    <li><code>&lt;br&gt;</code>: Va a capo (non necessario con <code>&lt;p&gt;</code>. Il tag non si chiude.</li>
    <li><code>&lt;b&gt;</code>: Testo in grassetto.</li>
    <li><code>&lt;strong&gt;</code>: Testo “importante” (molto simile al grassetto).</li>
    <li><code>&lt;i&gt;</code>: Italic (Corsivo in italiano).</li>
    <li><code>&lt;ul&gt;</code>: Lista non numerata.</li>
    <li><code>&lt;ol&gt;</code>: Lista numerata.</li>
    <li><code>&lt;li&gt;</code>: Elemento di una lista.</li>
  </ul>
  <p>
    Ecco un esempio:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<html>
<head>
  <title>Esempio formattazione in HTML</title>
</head>
<body>
  <h1>Titolo di livello 1</h1>
  <h2>Titolo di livello 2</h2>
  <h3>Titolo di livello 3</h3>

  <p>Questo è un paragrafo di testo.</p>

  <p>Questo paragrafo contiene del testo <b>grassetto</b> e <i>corsivo</i>.</p>

  <p>Questo paragrafo contiene del testo <strong>importante</strong>.</p>

  <p>Questo è un altro paragrafo.</p>

  <p>Questo è un paragrafo con una riga<br>che va a capo.</p>
  <ul>
    <li>Elemento lista</li>
    <li>Elemento lista</li>
    <li>Elemento lista</li>
  </ul>
</body>
</html>`}
</SyntaxHighlighter>

<Typography variant="h5" gutterBottom>
  Immagini
</Typography>
<Typography variant="body1">
  <p>
    Possiamo inserire delle immagini utilizzando il tag <code>&lt;img&gt;</code>:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<img src="img_prova.jpg">`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    Dopo l’attributo <code>src</code>, inseriamo l’immagine da inserire oppure un link web. Nel primo caso, l’immagine deve essere nella stessa directory della pagina web (oppure possiamo scrivere l’intero percorso, ad esempio <code>immagini/img_prova.jpg</code>).
  </p>
</Typography>

<Typography variant="h5" gutterBottom>
  Link o segnalibri
</Typography>
<Typography variant="body1">
  <p>
    Possiamo inserire un link ipertestuale in una pagina web con il tag <code>&lt;a href="..."&gt;</code>:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<a href="altrapagina.html"> Link all'altra pagina </a>`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    In questo modo, possiamo creare un link ad un’altra pagina nella directory indicata oppure ad un sito esterno (mettendo l’URL nell’attributo <code>href</code>).
  </p>
  <p>
    Grazie al tag <code>&lt;a href= ...&gt;</code> possiamo creare anche un segnalibro, che ci porta direttamente ad un punto della nostra pagina web invece che in un’altra pagina. Ecco un esempio:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<a href="#capitolo4"> Vai al capitolo 4 </a>
...
<h2 id="capitolo4">Capitolo 4</h2>`}
</SyntaxHighlighter>

<Typography variant="h5" gutterBottom>
  Tabelle
</Typography>
<Typography variant="body1">
  <p>
    Inseriamo le tabelle aprendo il tag <code>&lt;table&gt;</code> e mettendo righe e (all’interno delle righe) colonne, utilizzando i tag <code>&lt;tr&gt;</code> e <code>&lt;td&gt;</code>. Possiamo mettere un’intestazione di tabella, ad esempio nella prima riga, utilizzando il tag <code>&lt;th&gt;</code> al posto di <code>&lt;td&gt;</code>.
    Eccone un esempio:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<html>
<head>
  <title>Tabella Studenti</title>
</head>
<body>
  <h1>Tabella Studenti</h1>
  <table>
    <tr>
      <th>Numero</th>
      <th>Nome</th>
      <th>Cognome</th>
      <th>Voto</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Mario</td>
      <td>Rossi</td>
      <td>8</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Luigi</td>
      <td>Bianchi</td>
      <td>9</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Giulia</td>
      <td>Verdi</td>
      <td>9</td>
    </tr>
  </table>
</body>
</html>`}
</SyntaxHighlighter>

<Typography variant="h5" gutterBottom>
  Attributi dei tag
</Typography>
<Typography variant="body1">
  <p>
    Tutti i tag in HTML possono avere degli attributi. Gli attributi danno delle informazioni in più sul tag utilizzato al browser. Sono sempre definiti nel tag di apertura e hanno la struttura <code>nome_attributo = “valore”</code>.
    Alcuni attributi sono stati già utilizzati: ad esempio, <code>href</code> è un attributo del tag <code>&lt;a&gt;</code>, mentre <code>src</code> è un attributo del tag <code>&lt;img&gt;</code>.
  </p>
  <p>
    Vediamo altri esempi comuni:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<html lang="it">`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    Nel tag <code>html</code>, è possibile utilizzare l’attributo <code>lang</code> per definire la lingua della pagina e aiutare i motori di ricerca nell’indicizzazione delle pagine.
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<img src="img_prova.jpg" width="500" height="600">`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    Oltre all’attributo <code>src</code>, possiamo inserire come attributo i tag <code>width</code> e <code>height</code> per impostare larghezza e lunghezza dell’immagine.
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<img src="img_prova.jpg" alt="Immagine di prova">`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    L’attributo <code>alt</code> in un'immagine consente di collocare un testo alternativo, che viene utilizzato se ci sono errori nel caricamento delle immagini oppure se il visualizzatore della pagina ha uno screen reader, ad esempio.
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<nome_tag style="proprietà:valore;">`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    Molti attributi, come i colori e le dimensioni delle varie parti della pagina web, sono definiti con l’attributo <code>style</code>.
    La proprietà e il relativo valore fanno parte del linguaggio CSS che, unito all’HTML, consente di formattare adeguatamente tutte le pagine nel nostro sito web e semplificare il lavoro.
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<html>
  <head> </head>
  <body style="background-color:green;">
    <h1 style="color:blue;">Intestazione blu</h1>
    <p style="color:red;">Paragrafo rosso</p>
  </body>
</html>`}
</SyntaxHighlighter>
<Typography variant="h5" gutterBottom>
  Stili e CSS
</Typography>
<Typography variant="body1">
  <p>
    Il linguaggio CSS (Cascading Styles Sheets) si utilizza per formattare il layout di una o più pagine web. Non funziona in maniera autonoma ma viene incorporato nel linguaggio HTML. Permette di risparmiare gran parte del lavoro di formattazione, dato che è possibile definire una sola volta la formattazione di determinati tag, e tale formattazione sarà riutilizzata ogni volta che sarà utilizzato il tag stesso.
  </p>
  <p>
    Il CSS possiede la seguente struttura:
  </p>
</Typography>
<SyntaxHighlighter language="css" style={monokai}>
{`nome_tag {
    proprietà1: valore;
    proprietà2: valore;
    ...
}`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    Si possono usare le proprietà CSS in diversi modi:
  </p>
  <ul>
    <li>Interno al tag di apertura: questo utilizzo (già visto nel capitolo Attributi dei tag) formatta solo il tag in cui è inserito ed è sufficiente definire solo la proprietà e il valore da definire.</li>
    <li>Nell’head della pagina web: in questo modo, verranno formattati tutti i tag utilizzati nella pagina in cui è inserito.</li>
    <li>Esterno: si fa riferimento a un file CSS esterno, che contiene tutte le formattazioni.</li>
  </ul>
  <p>
    Il primo metodo è già stato visto, quindi faremo esempi degli altri due metodi.
  </p>
  <p>
    <strong>Utilizzo nell’head</strong><br />
    Utilizzando il tag <code>&lt;style&gt;</code> possiamo definire le proprietà CSS che ci interessano direttamente nella sezione <code>&lt;head&gt;</code> della nostra pagina. Questo formatterà tutti i tag definiti all’interno dello style. Ecco un esempio:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<html>
<head>
  <title>Utilizzo del tag style</title>
  <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        padding: 20px;
    }
    h1 {
        color: blue;
        font-size: 24px;
        border-bottom: 2px solid blue;
        padding-bottom: 10px;
    }
    p {
        color: green;
        font-size: 18px;
        margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Titolo formattato</h1>
  <p>Questo è un esempio di paragrafo con stile definito in style</p>
</body>
</html>`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    <strong>In breve:</strong><br />
    Nel tag <code>body</code>, è stato modificato il font dell’intera pagina, il colore di sfondo (in esadecimale, grigio chiaro) e la distanza dal bordo della pagina (padding).<br />
    Nel tag <code>h1</code>, è stata definita una grandezza, impostato il colore blu e inserito un bordo inferiore blu (questo crea una riga blu, di fatto).<br />
    Nel tag <code>p</code> è stata definita dimensione, colore e distanza dagli altri elementi con il <code>margin-top</code>.<br />
    Da notare che tutti i tag <code>h1</code> e <code>p</code> saranno definiti in questo modo nella pagina web, senza bisogno di ripetere lo stile per ogni tag.
  </p>
  <p>
    <strong>File esterno</strong><br />
    Allo stesso modo, è possibile incorporare un file esterno, in formato <code>.css</code>, nel documento, inserendo nell’<code>head</code> il tag <code>&lt;link&gt;</code>:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<link rel="stylesheet" href="nome_file_stile.css">`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    Proviamo a mettere la stessa formattazione dell’esempio precedente, ma con file esterno:
  </p>
</Typography>
<SyntaxHighlighter language="html" style={monokai}>
{`<html>
<head>
  <title>Utilizzo del file esterno</title>
  <link rel="stylesheet" href="stile.css">
</head>
<body>
  <h1>Titolo formattato</h1>
  <p>Questo è un esempio di paragrafo con stile definito nel file esterno</p>
</body>
</html>`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    Pagina CSS (nella stessa directory):
  </p>
</Typography>
<SyntaxHighlighter language="css" style={monokai}>
{`body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
}
h1 {
    color: blue;
    font-size: 24px;
    border-bottom: 2px solid blue;
    padding-bottom: 10px;
}
p {
    color: green;
    font-size: 18px;
    margin-top: 10px;
}`}
</SyntaxHighlighter>
<Typography variant="body1">
  <p>
    Il risultato è identico al precedente. Possiamo però riutilizzare questo file CSS per la formattazione di tutte le pagine web del nostro sito.
  </p>
</Typography>

<Typography variant="h5" gutterBottom>
  Tag reference
</Typography>
<Typography variant="body1">
            <p>
                La seguente tabella fornisce una panoramica dei tag HTML più comuni e il loro utilizzo.
            </p>

            <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th>Tag</th>
                <th>Descrizione</th>
            </tr>
            <tr>
                <td>&lt;html&gt;</td>
                <td>Pagina web</td>
            </tr>
            <tr>
                <td>&lt;head&gt;</td>
                <td>Intestazione pagina web</td>
            </tr>
            <tr>
                <td>&lt;body&gt;</td>
                <td>Corpo pagina web</td>
            </tr>
            <tr>
                <td>&lt;title&gt;</td>
                <td>Titolo pagine web (visibile in scheda)</td>
            </tr>
            <tr>
                <td>&lt;link rel='stylesheet' href='paginadistile.css'&gt;</td>
                <td>Collegamento ad una risorsa per il tuo sito web (ad esempio, un foglio di stile)</td>
            </tr>
            <tr>
                <td>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;,...</td>
                <td>Heading, intestazioni per il testo. Ogni numero è un livello diverso di intestazione.</td>
            </tr>
            <tr>
                <td>&lt;p&gt;</td>
                <td>Paragrafo del testo.</td>
            </tr>
            <tr>
                <td>&lt;br&gt;</td>
                <td>Va a capo (non necessario con &lt;p&gt;. Il tag non si chiude.</td>
            </tr>
            <tr>
                <td>&lt;b&gt;</td>
                <td>Testo in grassetto</td>
            </tr>
            <tr>
                <td>&lt;strong&gt;</td>
                <td>Testo “importante” (molto simile al grassetto!).</td>
            </tr>
            <tr>
                <td>&lt;i&gt;</td>
                <td>Italic (Corsivo in italiano).</td>
            </tr>
            <tr>
                <td>&lt;ul&gt;</td>
                <td>Lista non numerata</td>
            </tr>
            <tr>
                <td>&lt;ol&gt;</td>
                <td>Lista numerata</td>
            </tr>
            <tr>
                <td>&lt;li&gt;</td>
                <td>Elemento di una lista</td>
            </tr>
            <tr>
                <td>&lt;table&gt;</td>
                <td>Tabella</td>
            </tr>
            <tr>
                <td>&lt;tr&gt;</td>
                <td>Righe di una tabella</td>
            </tr>
            <tr>
                <td>&lt;td&gt;</td>
                <td>Colonne di una tabella</td>
            </tr>
            <tr>
                <td>&lt;th&gt;</td>
                <td>Intestazioni di una tabella</td>
            </tr>
            <tr>
                <td>&lt;img src='immagine.jpg'&gt;</td>
                <td>Immagine</td>
            </tr>
            </table>

        </Typography>


  </Container>
)};

export default Html;
