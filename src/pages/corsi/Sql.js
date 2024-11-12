import React from 'react';
import { Container, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TableOfContents from '../../components/TableOfContents';
import ParallaxSection from '../../components/ParallaxSection';

const Sql = () => (
  <Container maxWidth="lg">
    <ParallaxSection  bgImage="/images/computercorsi.jpg" title="SQL" />
        <div style={{ padding: '5px' }}>
        </div>
    <TableOfContents />

    <Typography variant="h5" gutterBottom sx={{ my: 4 }}>
      Introduzione
    </Typography>
    <Typography variant="body1">
      <p>
        Il linguaggio SQL permette di interagire con i dati presenti nelle basi di dati. L’SQL non è computazionalmente completo e non permette di programmare un’intera applicazione. Può essere suddiviso in quattro sottolinguaggi:
      </p>
      <ul>
        <li><strong>DDL (Data Definition Language)</strong>: comandi per la creazione di tabelle e definizione dei dati, e delle strutture delle relazioni del database.</li>
        <li><strong>DML (Data Manipulation Language)</strong>: comandi per la modifica dei dati, come aggiunta, eliminazione, modifica e aggiornamento.</li>
        <li><strong>QL (Query Language)</strong>: comandi per l’interrogazione, il raggruppamento e il conteggio dei dati.</li>
        <li><strong>DCL (Data Control Language)</strong>: comandi che gestiscono i permessi di accesso alle risorse del database.</li>
      </ul>
      <p>
        Il codice SQL è diviso in comando (fino al punto e virgola <code>;</code>), costrutto (come <code>SELECT</code>, <code>CREATE</code> ecc…) e clausole (es. <code>FROM</code>, <code>WHERE</code>).
      </p>
    </Typography>

    <Typography variant="h5" gutterBottom>
      Creare ed eliminare un database
    </Typography>
    <Typography variant="body1">
      <p>Per creare un database:</p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`CREATE DATABASE [IF NOT EXISTS] nome_database;`}
    </SyntaxHighlighter>
    <Typography variant="body1">
      <p>Per eliminare un database esistente:</p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`DROP DATABASE [IF EXISTS] nome_database;`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Creare una tabella
    </Typography>
    <Typography variant="body1">
      <p>Una tabella in SQL è formata da attributi, domini e vincoli:</p>
      <p>Il costrutto di creazione ha questa sintassi:</p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`CREATE TABLE nome_tabella (
  nome_campo tipo(lunghezza) [NOT NULL] [PRIMARY KEY] [UNIQUE] [...],
  FOREIGN KEY (nome_campo) REFERENCES nome_tabella2(nome_campo),
  ...
);`}
    </SyntaxHighlighter>
    <Typography variant="body1">
      <p>Alcuni vincoli comuni sono:</p>
      <ul>
        <li><strong>NOT NULL</strong>: l'attributo non può essere vuoto.</li>
        <li><strong>UNIQUE</strong>: i valori devono essere univoci.</li>
        <li><strong>PRIMARY KEY</strong>: identifica univocamente il record.</li>
        <li><strong>AUTO_INCREMENT</strong>: incrementa automaticamente i valori.</li>
        <li><strong>DEFAULT</strong>: imposta un valore predefinito.</li>
        <li><strong>CHECK</strong>: impone una condizione sui valori.</li>
      </ul>
    </Typography>
    <Typography variant="body1">
      <p>Vincoli di integrità referenziale con <code>FOREIGN KEY</code>:</p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`FOREIGN KEY (nome_campo) REFERENCES nome_tabella2(nome_campo)
[ON UPDATE/DELETE {CASCADE | NO ACTION | SET NULL | SET DEFAULT}]`}
    </SyntaxHighlighter>
    <Typography variant="body1">
      <ul>
        <li><strong>CASCADE</strong>: modifica o elimina le chiavi collegate.</li>
        <li><strong>NO ACTION</strong>: nessuna azione sulle chiavi collegate.</li>
        <li><strong>SET NULL</strong>: imposta a <code>NULL</code> le chiavi collegate.</li>
        <li><strong>SET DEFAULT</strong>: imposta il valore di default.</li>
      </ul>
    </Typography>

    <Typography variant="h5" gutterBottom>
      Modificare, eliminare o rinominare una tabella
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`ALTER TABLE nome_tabella ADD/DROP/ALTER/RENAME [COLUMN nome_campo tipo_campo];
DROP TABLE nome_tabella;
ALTER TABLE nome_tabella RENAME nuovo_nome_tabella;`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Tipi di dato
    </Typography>
    <Typography variant="body1">
      <p>
        Per una trattazione completa sui tipi di dato disponibili in SQL, consulta il seguente link:
        <a href="https://www.w3schools.com/sql/sql_datatypes.asp" target="_blank" rel="noopener noreferrer"> Tipi di dato SQL</a>.
      </p>
    </Typography>

    <Typography variant="h5" gutterBottom>
    Inserimento, eliminazione e aggiornamento record
    </Typography>
    <Typography variant="body1">
      <p>
        Il linguaggio DML consente l'inserimento, eliminazione e aggiornamento dei record:
      </p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`INSERT INTO tabella (campo1, campo2, ...) VALUES ("valore1", "valore2", ...);
DELETE FROM nome_tabella WHERE condizione;
DELETE FROM nome_tabella; -- Elimina tutti i record
UPDATE tabella SET attributo = valore WHERE condizione;`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
    Query con SELECT
    </Typography>
    <Typography variant="body1">
      <p>
        Il costrutto <code>SELECT</code> consente di interrogare il database:
      </p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`SELECT A1, ..., An [AS Alias] FROM tabella1, ..., tabella [WHERE condizione]
GROUP BY campo ASC|DESC
HAVING condizione
ORDER BY campo ASC|DESC;`}
    </SyntaxHighlighter>
    <Typography variant="body1">
      <p>Seleziona tutti i campi o solo quelli specificati:</p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`SELECT * FROM Amici WHERE citta="Napoli";
SELECT nome, cognome FROM Amici WHERE citta="Napoli";`}
    </SyntaxHighlighter>
    <Typography variant="body1">
      <p>
        Usa <code>DISTINCT</code> per evitare duplicati:
      </p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`SELECT DISTINCT campo FROM tabella;`}
    </SyntaxHighlighter>

    <Typography variant="h6" gutterBottom>
      Interrogare più tabelle
    </Typography>
    <Typography variant="body1">
      <p>
        Se vogliamo interrogare più tabelle legate tra loro da una relazione, dobbiamo tenere in considerazione i campi coinvolti nella congiunzione tra tabelle. I campi vanno collegati attraverso una condizione <code>WHERE</code> oppure si può utilizzare il <code>JOIN</code>.
      </p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`SELECT ...
FROM Prodotti, Fornitori
WHERE Fornitori.ID_fornitore = Prodotti.id_fornitore;`}
    </SyntaxHighlighter>
    <Typography variant="h6" gutterBottom>
      Esempi
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Seleziona tutti i dati dei pazienti
SELECT * FROM Pazienti;

-- Seleziona il cognome dei pazienti
SELECT cognome FROM Pazienti;

-- Seleziona cognome e codice ASL dei pazienti di Milano
SELECT cognome, codAs1
FROM Pazienti
WHERE provincia="MI";

-- Selezione pazienti con pressione minima > 85 e pressione massima > 125
SELECT P.cognome, V.pressioneMAX, V.pressioneMIN
FROM Pazienti P, Visite V
WHERE V.pressioneMIN > 85 AND V.pressioneMAX > 125 AND P.ID_paziente = V.id_paziente;`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Operatori di confronto tra righe
    </Typography>
    <Typography variant="body1">
      <p>
        Gli operatori di confronto più complessi includono:
      </p>
      <ul>
        <li><code>=</code>: Uguale</li>
        <li><code>&lt;&gt;</code>: Diverso</li>
        <li><code>LIKE</code>: Confronto tra stringhe</li>
        <li><code>BETWEEN</code>: Compreso tra due valori</li>
      </ul>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Uso LIKE
SELECT P.cognome
FROM Persone AS P
WHERE P.cognome LIKE 'R%' OR P.cognome LIKE 'G%'; -- Seleziona tutti i cognomi che iniziano con R o G

-- Uso BETWEEN
SELECT P.cognome, P.altezza
FROM Persone AS P
WHERE P.altezza BETWEEN 160 AND 170; -- Seleziona tutte le persone con altezza tra i valori indicati`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Operazioni aritmetiche con SELECT
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`SELECT (campo1 + campo2) AS "Somma" FROM tabella; -- Somma
SELECT (campo1 - campo2) AS "Sottrazione" FROM tabella; -- Sottrazione
SELECT (campo1 * campo2) AS "Prodotto" FROM tabella; -- Prodotto
SELECT (campo1 / campo2) AS "Divisione" FROM tabella; -- Divisione
SELECT (campo1 % campo2) AS "Resto" FROM tabella; -- Resto divisione
SELECT (campo1^esponente) AS "Potenza" FROM tabella; -- Potenza
SELECT SQRT(campo) AS "Radice" FROM tabella; -- Radice quadrata`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Uso di <code>IN</code> e <code>IS NULL</code>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Uso IN
SELECT P.nome, P.cognome
FROM Pazienti P, Visite V
WHERE P.ID_pazienti = V.id_pazienti AND P.provincia IN ("CO", "TO", "MI");
-- Pazienti in provincia di Torino, Milano e Como

-- Uso IS NULL
SELECT V.datavisita, P.cognome
FROM Pazienti P, Visita V
WHERE P.ID_pazienti = V.id_paziente AND (V.pressionemax IS NULL OR V.pressionemin IS NULL);
-- Pazienti di cui non si conosce pressione min e max`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Congiunzioni e JOIN
    </Typography>
    <Typography variant="body1">
      <p>
        La congiunzione, o <code>JOIN</code>, collega i dati di più tabelle:
      </p>
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Sintassi implicita
SELECT listacampi
FROM tab1, tab2
WHERE tab1.campo = tab2.campo;

-- LEFT JOIN, RIGHT JOIN, FULL JOIN, INNER JOIN, SELF JOIN
SELECT listacampi
FROM tab1 LEFT JOIN tab2 ON tab1.campo = tab2.campo;

SELECT listacampi
FROM tab1 RIGHT JOIN tab2 ON tab1.campo = tab2.campo;

SELECT listacampi
FROM tab1 INNER JOIN tab2 ON tab1.campo = tab2.campo;`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Operatori aggregati
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Contare i record
SELECT COUNT(campo)
FROM tab1
[WHERE condizione];

-- Calcolare il massimo e il minimo
SELECT MAX(campo), MIN(campo)
FROM tab1
[WHERE condizione];

-- Somma, media e deviazione standard
SELECT SUM(campo), AVG(campo), STDEV(campo)
FROM tab1
[WHERE condizione];`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Query annidate
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Esempio di subquery
query esterna
> ANY
(...subquery)

query esterna
EXISTS
(...subquery);`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Viste
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Creare una vista
CREATE VIEW nome_vista AS
query;

-- Eliminare una vista
DROP VIEW nome_vista;`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Sicurezza e Privilegi
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Assegnare privilegi
GRANT SELECT, INSERT, DELETE ON tabella TO nome_utente;

-- Revocare privilegi
REVOKE SELECT, INSERT ON tabella FROM nome_utente;`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Transazioni
    </Typography>
    <SyntaxHighlighter language="sql" style={monokai}>
      {`-- Iniziare e gestire una transazione
BEGIN TRANSACTION;
UPDATE CC SET Saldo = Saldo - 50 WHERE Conto = 123;
UPDATE CC SET Saldo = Saldo + 50 WHERE Conto = 235;
COMMIT;

-- Punti di salvataggio e rollback
SAVEPOINT nome_savepoint;
ROLLBACK TO SAVEPOINT nome_savepoint;
COMMIT;`}
    </SyntaxHighlighter>
  </Container>
);

export default Sql;
