import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TableOfContents from '../../components/TableOfContents';
import ParallaxSection from '../../components/ParallaxSection';

const Cpp = () => {
  return (
    <Container maxWidth="lg">
      <ParallaxSection  bgImage="/images/computercorsi.jpg" title="C++" />
        <div style={{ padding: '5px' }}>
        </div>
      <TableOfContents />
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Introduzione
        </Typography>
        <Typography variant="body1">
          Questo corso offre una panoramica sui fondamenti del linguaggio di programmazione C++.
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
        <Box sx={{ my: 4 }}>
  <Typography variant="h5" gutterBottom>
    Iterazione
  </Typography>
  <Typography variant="body1">
    <p>
      <strong>Precondizionata</strong>: La condizione viene verificata all’ingresso e dopo ogni ciclo.
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`while (condizione)
{
    // blocco di istruzioni
};`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      <strong>Post Condizionata</strong>: La condizione viene verificata solo alla fine del ciclo.
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`do
{
    // blocco di istruzioni
} while (condizione);`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      <strong>Definita</strong>: Conosciamo in anticipo il numero di volte che il ciclo deve ripetersi.
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`for (inizializzazione; condizione di entrata; aggiornamento passo)
{
    // blocco di istruzioni
}`}
  </SyntaxHighlighter>
</Box>
<Box sx={{ my: 4 }}>
  <Typography variant="h5" gutterBottom>
    Funzioni
  </Typography>
  <Typography variant="body1">
    <p>
      La crescente complessità del programma necessita di una suddivisione in sottoprogrammi. Possiamo isolare dei segmenti di codice che consentono di risolvere un problema o una parte di esso, gestendoli come dei programmi autonomi. Questi “blocchi” o mattoni lavorano in modalità parametrica, ossia devono essere sempre seguiti su variabili diverse.
    </p>
    <ul>
      <li>Riusabilità</li>
      <li>Astrazione</li>
      <li>Risparmio</li>
    </ul>
    <p>
      Definizione di funzione in linguaggio C++:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`tipo_restituito nome_funzione (lista_parametri_formali)
// lista_parametri_formali=coppia tra tipo variabile e identificatore variabile`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      <strong>Esempio:</strong>
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`int maggiore(int n1, int n2) // viene chiamato prototipo
{
    if (n1 >= n2)
        return n1;
    else
        return n2;
}`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      I parametri attuali devono corrispondere per numero, posizione e tipo.
    </p>
    <p>
      Un programma che non restituisce nulla al programma chiamante può essere definito con parametro di ritorno void:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`void procedura1(...)
{
    ...
}
// sono chiamate anche procedure`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      Il C++ richiede la scrittura dei metodi prima del programma principale <code>main</code>. Si crea dunque il prototipo della funzione prima dell’esecuzione del <code>main</code>, ad inizio codice.
    </p>
    <p>
      <strong>Variabili locali e globali</strong><br />
      Una variabile locale non è accessibile dai sottoprogrammi se sono state dichiarate nei programmi chiamanti. Viene definita all’interno del <code>main()</code>, all’interno dei singoli sottoprogrammi o all’interno del blocco annidato di codice. Questo insieme delle variabili visibili al sottoprogramma fanno parte dell’ambiente delle variabili.
    </p>
    <p>
      Le variabili globali, al contrario, vengono dichiarate prima della dichiarazione del <code>main()</code>, quindi in nessun blocco specifico. Fanno parte quindi di una memoria condivisa. L’insieme di queste variabili è l’ambiente globale, distinto dall’ambiente locale.
    </p>
  </Typography>
</Box>
<Box sx={{ my: 4 }}>
  <Typography variant="h5" gutterBottom>
    Dati strutturati
  </Typography>
  <Typography variant="body1">
    <p>
      <strong>Array e vettori</strong><br />
      L’array aggrega dati omogenei. Costituito da tante variabili semplici affiancate tra di loro, tutte dello stesso tipo. L’array prende il nome di vettore quando sono disposti in una sola dimensione, ossia una sola riga o colonna. Ogni posizione del vettore è identificata univocamente da un indice, che punta alla cella.
    </p>
    <p>Il vettore in C++ viene dichiarato così:</p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`int miovettore[3]; // Tipo, nomevettore e dimensione
miovettore[0] = 10; // Mettiamo nella prima posizione il valore 10`}
  </SyntaxHighlighter>
  <Typography variant="body1">
    <p>
      Altro caso:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`int miovettore[] = {10, 300, 43}; // Si inizializzano le celle al momento della definizione del vettore
// non necessaria la dimensione in questo caso`}
  </SyntaxHighlighter>
  <Typography variant="body1">
    <p>
      Per stampare i vettori, è necessario indicare una cella alla volta (<code>cout</code> con il nome del vettore visualizza l’indirizzo di memoria).
    </p>
    <p>
      Per dichiarare una matrice:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`int miovettore[4][3]; // Vettore da 4 righe e 3 colonne`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      <strong>Record e tabelle</strong><br />
      I record, al contrario degli array, non devono possedere dati omogenei, ed sono costituiti da elementi di vario tipo detti campi. Su di esso si basano le tecniche di organizzazione e memorizzazione dei dati dei sistemi informatici.
    </p>
    <p>
      La tabella è una variabile strutturata con un insieme finito di elementi. Il tracciato record è la sua struttura record.
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`struct alunni { // definizione struttura
    char cognome[30];
    char nome[20];
    int classe;
    char sezione;
    double mediavoti;
} RossiMario; // nome variabile

struct alunni pinoverdi, toniesposito; // Definiamo la struttura più tardi`}
  </SyntaxHighlighter>
  <Typography variant="body1">
    <p>
      Per scrivere e leggere il contenuto dei campi di un record si utilizza la <strong>dot notation</strong>:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`rossiMario.classe = 3;
cout << "Cognome: " << rossiMario.cognome;`}
  </SyntaxHighlighter>
  <Typography variant="body1">
    <p>
      Possiamo formare anche record di record:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`rossiMario.dataVoto.giorno = 11; // doppia dot notation`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      <strong>Stringhe</strong><br />
      Le stringhe non esistono come tipo primitivo in C++. Si possono realizzare in diversi modi:
    </p>
    <p>
      Array di caratteri:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`char parola[10]; // parola di 9 caratteri + carattere speciale /0`}
  </SyntaxHighlighter>
  <Typography variant="body1">
    <p>
      Con la libreria String:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`#include <string>

string nome = "mario";`}
  </SyntaxHighlighter>
  <Typography variant="body1">
    <p>
      Per i vettori numerici, per stamparli è necessario indicare una cella alla volta, mentre la stampa dei vettori <code>char</code> ne visualizza l’intero contenuto.
    </p>
    <p>
      <strong>Manipolazione di stringhe:</strong>
    </p>
    <p>
      Concatenazione
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`s1 = "Hello";
s2 = "World";
s3 = s1 + " " + s2;`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      Confronto tra stringhe
    </p>
</Typography>
<SyntaxHighlighter language="cpp" style={docco}>
{`// Ordinamento lessicografico
// Antonio == Antonio
// Antonio < Pino

// Compare: confronto anche parziale
// Ritorna 0 se uguali, altrimenti ritorna la posizione del primo carattere diverso

s1 = "ciao mondo";
s2 = "ciao";

cout << s1.compare(s2); // restituisce 6, la posizione di m, il primo carattere diverso`}
</SyntaxHighlighter>


  <Typography variant="body1">
    <p>
      Lunghezza di una stringa con size
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`cout << s1.size(); // restituisce 4`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      Inserimento di sottostringa con insert
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`cout << s2.insert(5, "mondo"); // inserisce in posizione 5 la parola mondo`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      Sostituzione e rimozione con replace
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`s2 = "a tutti";

cout << s1.replace(5, 9, s2); // restituisce "ciao a tutti"`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
    Accesso ad una sottostringa
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`s1 = "Ciao mondo";
cout << s1.substr(5, 9); // Risultato "mondo"`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
        Ricerca di sottostringhe
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`s1 = "Ciao mondo";
cout << s1.find("do"); // Posizione 8 come output`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
        Conversioni
    </p>
    <p>
      da stringa a numeri:
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`int k1 = atoi(s1.c_str());
float k1 = atof(s1.c_str());`}
  </SyntaxHighlighter>
  <Typography variant="body1">
    <p>
      da numeri a stringa
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`string n1 = to_string(s1);`}
  </SyntaxHighlighter>

  <Typography variant="body1">
    <p>
      Nella libreria <code>&lt;ctype.c&gt;</code> vi sono le funzioni con parametro di ritorno (restituisce un valore diverso da zero se esiste un certo carattere):
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`int isgraph(int c); // carattere visualizzabile diverso da spazio
int islower(int c); // lettera minuscola
int isprint(int c); // carattere visualizzabile
int ispunct(int c); // segno di interpunzione 
int isspace(int c); // spazio, tabulazione, carriage return, a capo, tab vert
int isupper(int c); // lettera maiuscola
int isdigit(int c); // cifra esadecimale`}
  </SyntaxHighlighter>
</Box>

<Box sx={{ my: 4 }}>
  <Typography variant="h5" gutterBottom>
    Ricerca, disposizione e ordinamento elementi vettori
  </Typography>
  <Typography variant="body1">
    <p>
      <strong>Esercizio 1</strong><br />
      Carichiamo il vettore di numeri casuali. Poi, cerchiamo un certo valore e, se esiste, ne segnala la posizione delle sue occorrenze o restituisce la sua inesistenza.
    </p>
  </Typography>
  <SyntaxHighlighter language="cpp" style={docco}>
    {`#include <iostream>
#include <stdlib.h>
using namespace std;

int main()
{
    // Dichiarazione variabili
    int v[10];
    int num, i;
    int ck = 0;
    
    // Ricerca numero
    cout << "Inserisci numero da ricercare: " << endl;
    cin >> num;
    for (i = 0; i < 10; i += 1)
    {
        // Si riempe il vettore
        v[i] = rand() % 10 + 1;
        if (v[i] == num)
        {
            cout << "Numero trovato: posizione " << i << endl;
            ck += 1; // Counter occorrenze numero
        }
        
        // Opzionale: controllo vettore
        // cout << "Controllo vettore: " << v[i] << endl;
    }
    
    // Finale, stampa occorrenze o inesistenza
    if (ck != 0)
    {
        cout << "Il numero è stato trovato " << ck << " volte" << endl;
    }
    else    
    {
        cout << "Numero non trovato." << endl;
    }
}`}
  </SyntaxHighlighter>
  <Typography variant="body1">
  <p>
    <strong>Esercizio 2</strong><br />
    Memorizziamo in due vettori paralleli i cognomi e i nomi degli alunni di una classe e successivamente visualizziamo i cognomi di quelli che hanno lo stesso nome richiesto dall’utente.
  </p>
</Typography>
<SyntaxHighlighter language="cpp" style={docco}>
  {`#include <iostream>
#include <string>
using namespace std;

int main()
{
    const int N = 5; // Numero di alunni (modificabile)
    string nomi[N] = {"Marco", "Anna", "Luca", "Anna", "Giorgio"};
    string cognomi[N] = {"Rossi", "Bianchi", "Verdi", "Neri", "Gialli"};

    string nomeCercato;
    cout << "Inserisci il nome da cercare: ";
    cin >> nomeCercato;

    bool trovato = false;
    for (int i = 0; i < N; ++i)
    {
        if (nomi[i] == nomeCercato)
        {
            cout << "Cognome trovato: " << cognomi[i] << endl;
            trovato = true;
        }
    }

    if (!trovato)
    {
        cout << "Nessun alunno trovato con il nome richiesto." << endl;
    }

    return 0;
}`}
</SyntaxHighlighter>

<Typography variant="body1">
  <p>
    <strong>Esercizio 3: Bubble Sort</strong><br />
    Dato un vettore con numeri interi generati casualmente, ordiniamo i numeri in ordine crescente usando il metodo Bubble Sort.
  </p>
</Typography>
<SyntaxHighlighter language="cpp" style={docco}>
  {`#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

void bubbleSort(int arr[], int n)
{
    for (int i = 0; i < n - 1; ++i)
    {
        for (int j = 0; j < n - i - 1; ++j)
        {
            if (arr[j] > arr[j + 1])
            {
                // Scambio degli elementi
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main()
{
    const int N = 10;
    int arr[N];

    srand(time(0));
    for (int i = 0; i < N; ++i)
    {
        arr[i] = rand() % 100; // Genera numeri casuali tra 0 e 99
    }

    cout << "Vettore originale: ";
    for (int i = 0; i < N; ++i)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    bubbleSort(arr, N);

    cout << "Vettore ordinato: ";
    for (int i = 0; i < N; ++i)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}`}
</SyntaxHighlighter>

<Typography variant="body1">
  <p>
    <strong>Esercizio 4: Select Sort</strong><br />
    Dato un vettore con numeri interi generati casualmente, ordiniamo i numeri in ordine crescente usando il metodo Select Sort.
  </p>
</Typography>
<SyntaxHighlighter language="cpp" style={docco}>
  {`#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

void selectSort(int arr[], int n)
{
    for (int i = 0; i < n - 1; ++i)
    {
        int minIndex = i;
        for (int j = i + 1; j < n; ++j)
        {
            if (arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        // Scambio degli elementi
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

int main()
{
    const int N = 10;
    int arr[N];

    srand(time(0));
    for (int i = 0; i < N; ++i)
    {
        arr[i] = rand() % 100; // Genera numeri casuali tra 0 e 99
    }

    cout << "Vettore originale: ";
    for (int i = 0; i < N; ++i)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    selectSort(arr, N);

    cout << "Vettore ordinato: ";
    for (int i = 0; i < N; ++i)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}`}
</SyntaxHighlighter>

<Typography variant="body1">
  <p>
    <strong>Esercizio 5</strong><br />
    Realizziamo un programma che inserisce numeri casuali in un vettore ma in modo ordinato.
  </p>
</Typography>
<SyntaxHighlighter language="cpp" style={docco}>
  {`#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdlib>
#include <ctime>
using namespace std;

int main()
{
    vector<int> vettore;
    srand(time(0));

    for (int i = 0; i < 10; ++i)
    {
        int num = rand() % 100; // Genera numero casuale tra 0 e 99
        vettore.push_back(num);
        sort(vettore.begin(), vettore.end()); // Ordina dopo ogni inserimento

        cout << "Vettore dopo l'inserimento di " << num << ": ";
        for (int j = 0; j < vettore.size(); ++j)
        {
            cout << vettore[j] << " ";
        }
        cout << endl;
    }

    return 0;
}`}
</SyntaxHighlighter>

</Box>



    </Container>
  );
};

export default Cpp;

