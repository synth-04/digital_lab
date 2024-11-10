// src/pages/CppFullPage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TableOfContents from '../../components/TableOfContents';

const CppFullPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Dispensa C++
      </Typography>
      <TableOfContents />
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Introduzione
        </Typography>
        <Typography variant="body1">
          Questa dispensa offre una panoramica sui fondamenti del linguaggio di programmazione C++.
          Saranno trattati concetti di base come la struttura di un programma, variabili, costanti, cicli, funzioni e molto altro.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Struttura di base di un programma C++
        </Typography>
        <Typography variant="body1">
          Un semplice esempio di programma in C++ che mostra come visualizzare "Ciao Mondo!".
        </Typography>
        <SyntaxHighlighter language="cpp" style={docco}>
          {`#include <iostream> // Caricamento della libreria di I/O
using namespace std;

int main() {
    cout << "Ciao Mondo!"; // Questo sarà il nostro output
    getchar(); // Non chiude la finestra una volta terminato il programma
}`}     </SyntaxHighlighter>

        <Typography variant="body1">
            <ul>
            <li><code>#include</code> indica l’inserimento di librerie. Gli <strong>header file</strong> aggiungono funzionalità ai nostri programmi in C++. Nel nostro esempio iniziale, <code>iostream</code> ci permette l’utilizzo di funzioni di I/O, come <code>cout</code> e <code>cin</code>.</li>
            
            
            <li><strong>using namespace std</strong> significa che potremo usare lo spazio dei nomi dalla libreria standard.</li>
            <li>Dopo l’intestazione <strong>int main()</strong> si trova il corpo della funzione principale. Le parentesi graffe delimitano un blocco di istruzioni monolitico relativo al corpo di una funzione o istruzioni di codice successiva a una selezione o a una iterazione.</li>
            <li><strong>cout</strong> ci permette di visualizzare il testo "Ciao Mondo!" in output.</li>
            <li><strong>Opzionale</strong>: <code>system("PAUSE")</code> attende la pressione del tasto INVIO per chiudere la finestra in modalità testo. <strong>NB</strong>: Funziona solo su Windows; è preferibile usare un <code>getchar()</code>.</li>
            <li><strong>return 0</strong> termina la nostra funzione principale. <strong>NB</strong>: Non è necessario in C++.</li>
            <li>Notate che ogni istruzione termina con il punto e virgola (<code>;</code>).</li>
            </ul>
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Dichiarazione di Variabili e Costanti
        </Typography>
        <Typography variant="body1">
         
          <p>
          Le variabili vengono utilizzate per memorizzare dati.In C++ tutte le variabili vanno dichiarate. I tipi di dato richiedono spazi di memoria diversi e definiscono l’insieme di valori che potrebbe assumere una variabile.
            </p>

            <h4>Tipi di dato</h4>
            <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th>Tipo</th>
                <th>Descrizione</th>
                <th>Dimensione tipica minima</th>
            </tr>
            <tr>
                <td><code>char</code></td>
                <td>singolo carattere o numero intero small</td>
                <td>1 byte</td>
            </tr>
            <tr>
                <td><code>short int</code></td>
                <td>numero intero</td>
                <td>Dipende dal compilatore</td>
            </tr>
            <tr>
                <td><code>int</code></td>
                <td>numero intero</td>
                <td>Dipende dal compilatore</td>
            </tr>
            <tr>
                <td><code>long int</code></td>
                <td>numero intero long</td>
                <td>4 byte</td>
            </tr>
            <tr>
                <td><code>long long int</code></td>
                <td>numero intero long long</td>
                <td>8 byte</td>
            </tr>
            <tr>
                <td><code>bool</code></td>
                <td>valore booleano</td>
                <td>Dipende dal compilatore</td>
            </tr>
            <tr>
                <td><code>float</code></td>
                <td>numero floating-point</td>
                <td>4 byte</td>
            </tr>
            <tr>
                <td><code>double</code></td>
                <td>numero floating-point a doppia precisione</td>
                <td>8 byte</td>
            </tr>
            </table>

            <p>
            La dimensione di <code>int</code> dipende dallo specifico compilatore e normalmente coincide con la dimensione dei registri interni del processore, in modo da garantire le massime prestazioni. L’intervallo di valori nella tabella viene influenzato anche dal fatto che la variabile sia dichiarata o meno, signed o unsigned (default: signed).
            </p>

            <p>
            Il C++ è case sensitive: le parole chiave devono essere minuscole; inoltre, differenzia le variabili che sono scritte con lettere minuscole o maiuscole (la variabile <code>Fattura</code> e la variabile <code>fattura</code> sono due variabili differenti).
            </p>

            <p>
            Le variabili, inoltre, seguono alcune regole per la denominazione:
            </p>
            <ul>
            <li>Non possono iniziare con un numero, es. <code>1importo</code>, <code>34fattura</code> (ma possono terminare con un numero)</li>
            <li>Non possono contenere spazi (si può usare però l’underscore <code>_</code>)</li>
            <li>Non possono contenere caratteri speciali o lettere accentate</li>
            </ul>

            <p>
            <strong>Inizializzazione:</strong> modifica del valore di una variabile mediante l’assegnazione. Di seguito un esempio di dichiarazione e inizializzazione di variabili:
            </p>
          
        </Typography>
        <SyntaxHighlighter language="cpp" style={docco}>
          {`int delta = 3, teta = 0; // Assegnazione e dichiarazione congiunta
const float PI_GRECO = 3.14; // Definizione di una costante`}
        </SyntaxHighlighter>
        <Typography variant="body1">
        <p>
          Le costanti, definite utilizzando la parola chiave <code>const</code>, sono valori che non possono essere modificati durante l'esecuzione del programma.
        </p>
          <p>
            <strong>Ambito di visibilità</strong>: Blocco di istruzioni in cui la variabile stessa è dichiarata. Quindi è l’area del programma in cui tale variabile è valida. In base alla loro visibilità, le variabili e le costanti possono essere:
            </p>
            <ul>
            <li><strong>Globali</strong>: valida dal punto in cui è dichiarata fino al termine del codice del file. Viene definita globale solo se definita esternamente a qualsiasi blocco di istruzioni;</li>
            <li><strong>Locali</strong>: visibile limitatamente al blocco in cui essa è dichiarata e non è possibile accedervi fuori da esso. Dichiarando una variabile locale come una globale, la variabile locale nasconderà la variabile globale all’interno del suo blocco.</li>
            </ul>
            <p>
            Una variabile può essere:
            </p>
            <ul>
            <li><strong>Permanente</strong>: una variabile globale è sempre permanente e vale dall’avvio del programma fino al termine dell’esecuzione.</li>
            <li><strong>Temporanea</strong>: viene creata nella memoria del computer all’inizio dell’esecuzione del blocco che ne comprende la dichiarazione e lo spazio viene liberato alla fine di tale esecuzione.</li>
            </ul>

        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
            Operatori algebrici
        </Typography>
        <Typography variant="body1">
            <table border="1" cellspacing="0" cellpadding="5">
            <tr>
                <th>Operatore</th>
                <th>Descrizione</th>
            </tr>
            <tr>
                <td>+</td>
                <td>Somma o segno</td>
            </tr>
            <tr>
                <td>-</td>
                <td>Sottrazione o segno</td>
            </tr>
            <tr>
                <td>*</td>
                <td>Moltiplicazione</td>
            </tr>
            <tr>
                <td>/</td>
                <td>Divisione</td>
            </tr>
            <tr>
                <td>%</td>
                <td>Modulo (Resto di una divisione)</td>
            </tr>
            <tr>
                <td>++</td>
                <td>Autoincremento di 1</td>
            </tr>
            <tr>
                <td>--</td>
                <td>Autodecremento di 1</td>
            </tr>
            <tr>
                <td>+=</td>
                <td>Autoincremento di un certo valore</td>
            </tr>
            <tr>
                <td>-=</td>
                <td>Autodecremento di un certo valore</td>
            </tr>
            <tr>
                <td>*=</td>
                <td>Automoltiplicazione di un certo valore</td>
            </tr>
            <tr>
                <td>/=</td>
                <td>Autodivisione di un certo valore</td>
            </tr>
            <tr>
                <td>==</td>
                <td>Uguale a</td>
            </tr>
            <tr>
                <td>&lt;</td>
                <td>Minore a</td>
            </tr>
            <tr>
                <td>&lt;=</td>
                <td>Minore o uguale a</td>
            </tr>
            <tr>
                <td>&gt;</td>
                <td>Maggiore a</td>
            </tr>
            <tr>
                <td>&gt;=</td>
                <td>Maggiore o uguale a</td>
            </tr>
            <tr>
                <td>!=</td>
                <td>Diverso</td>
            </tr>
            <tr>
                <td>!</td>
                <td>NOT</td>
            </tr>
            <tr>
                <td>&amp;&amp;</td>
                <td>AND</td>
            </tr>
            <tr>
                <td>||</td>
                <td>OR</td>
            </tr>
            </table>
        </Typography>
        </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
            Operazione standard di I/O
        </Typography>
        <Typography variant="body1">
            <p>
            L’istruzione per mostrare un testo in output a schermo è <code>cout</code>:
            </p>
            <p>
            L’istruzione per leggere una variabile inserita dall’utente è <code>cin</code>:
            </p>
        </Typography>

        <SyntaxHighlighter language="cpp" style={docco}>
            {`cout << "Testo" << endl; 
//con endl si va a capo alla successiva riga dello schermo
cout.precision(3); 
// Per variabili reali, precisa il numero di cifre da visualizzare
cin >> base; 
// Inseriamo un valore da tastiera`}
        </SyntaxHighlighter>

        <Typography variant="body1">

            <strong>Esercizio: calcola area e perimetro di un rettangolo, dati base e altezza</strong>
        </Typography>
        <SyntaxHighlighter language="cpp" style={docco}>
        {`#include <iostream> // Libreria standard per I/O
using namespace std; //per indicare lo spazio dei nomi delle variabili
int main()
{
    //Dichiarazione variabili
    int base, altezza;
    int area, perimetro;

    //Input dati
    cout << "Programma per calcolo Perimetro e Area rettangolo" << endl;
    cout << "Inserire la base: \t";
    cin >> base;
    cout << "Inserire l'altezza: \t";
    cin >> altezza;

    //Elaborazione
    perimetro = (base + altezza)*2;
    area = base*altezza;

    //Output risultati
    cout << "Perimetro: \t" << perimetro << endl;
    cout << "Area: \t" << area << endl;

    return 0;
}`}
        </SyntaxHighlighter>
        </Box>
        <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
            Selezione
        </Typography>
        <SyntaxHighlighter language="cpp" style={docco}>
            {`//Semplice e doppia 
//(Se l'istruzione è unica, non c'è bisogno di parentesi graffe)
if (condizione) 
    { 
        istruzione;
    }
    else
    {
        istruzione;
    }

// Quando ci sono più scelte è possibile usare else if

if (condizione)
    {
        istruzione;
    }
    else if (condizione)
    {
        istruzione;
    }
    else
    {
        istruzione;
    }

//Selezione annidata o nidificata

if (condizione)
    { 
        if (condizione)
            {
                istruzione;
            }
        }
            else
            {
                istruzione;
            }

//Selezione multipla

switch (variabile)
    {
    case valore1:
        istruzioni-1;
    break;
    ...
    case valoren:
        istruzioni-n;
    break;
    default:
        istruzioni-default;
    }`}
            </SyntaxHighlighter>
        </Box>
    </Container>
  );
};

export default CppFullPage;

