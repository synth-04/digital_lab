import React from 'react';
import { Container, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TableOfContents from '../../components/TableOfContents';

const Architecture = () => (
  <Container maxWidth="md" sx={{ my: 4 }}>
    <Typography variant="h3" gutterBottom align="center">
      Architettura del Computer
    </Typography>
    <TableOfContents />
    <Typography variant="body1">
      <p>
        L'architettura del computer è l'insieme delle regole e dei metodi che descrivono la funzionalità, l'organizzazione e l'implementazione dei sistemi informatici. Comprende l'architettura del set di istruzioni, il design del microprocessore, l'architettura di memoria e l'interconnessione dei componenti principali.
      </p>
      <p>
        I principali componenti di un sistema di computer includono:
      </p>
      <ul>
        <li>CPU (Central Processing Unit): l'unità di elaborazione centrale, che esegue le istruzioni dei programmi.</li>
        <li>Memoria principale (RAM): memoria volatile che memorizza i dati e le istruzioni a cui la CPU accede rapidamente.</li>
        <li>Dispositivi di I/O (Input/Output): hardware che permette al computer di interagire con l'ambiente esterno (tastiere, monitor, dischi, ecc.).</li>
        <li>Bus di sistema: connessioni fisiche che permettono il trasferimento dei dati tra CPU, memoria e dispositivi di I/O.</li>
      </ul>
    </Typography>

    <Typography variant="h5" gutterBottom>
      Struttura della CPU
    </Typography>
    <Typography variant="body1">
      <p>
        La CPU è composta da vari sottocomponenti che collaborano per eseguire istruzioni. Tra i principali componenti della CPU troviamo:
      </p>
      <ul>
        <li><strong>Unità di Controllo (Control Unit, CU)</strong>: coordina l'attività del computer, decodificando le istruzioni e controllando l'esecuzione delle operazioni.</li>
        <li><strong>Unità Aritmetico-Logica (ALU)</strong>: esegue operazioni matematiche e logiche.</li>
        <li><strong>Registri</strong>: piccole quantità di memoria all'interno della CPU, utilizzati per memorizzare dati temporanei e istruzioni.</li>
      </ul>
    </Typography>

    <Typography variant="h5" gutterBottom>
      Ciclo di Esecuzione delle Istruzioni
    </Typography>
    <Typography variant="body1">
      <p>
        Il ciclo di esecuzione delle istruzioni, noto anche come ciclo di fetch-decode-execute, è il processo che la CPU utilizza per eseguire le istruzioni dei programmi.
      </p>
    </Typography>
    <SyntaxHighlighter language="text" style={docco}>
      {`1. Fetch (Prelievo): La CPU preleva l'istruzione successiva dalla memoria.
2. Decode (Decodifica): L'istruzione viene decodificata per determinare l'operazione richiesta.
3. Execute (Esecuzione): La CPU esegue l'operazione richiesta dall'istruzione.`}
    </SyntaxHighlighter>

    <Typography variant="h5" gutterBottom>
      Tipi di Memoria
    </Typography>
    <Typography variant="body1">
      <p>
        I sistemi informatici utilizzano vari tipi di memoria per archiviare dati e istruzioni. Tra i più comuni troviamo:
      </p>
      <ul>
        <li><strong>Memoria RAM (Random Access Memory)</strong>: memoria volatile utilizzata per l'archiviazione temporanea dei dati che vengono utilizzati durante l'esecuzione di programmi.</li>
        <li><strong>Memoria ROM (Read-Only Memory)</strong>: memoria non volatile che contiene istruzioni permanenti.</li>
        <li><strong>Cache</strong>: memoria ad accesso rapido che migliora le prestazioni della CPU riducendo il tempo di accesso ai dati.</li>
      </ul>
    </Typography>
    
    <Typography variant="h5" gutterBottom>
      Esempio di Architettura
    </Typography>
    <SyntaxHighlighter language="text" style={docco}>
      {`+-----------------+
|     CPU         |
|-----------------|
| CU | ALU | Regs |
+-----------------+
       |
       v
+---------------+
|  Memoria RAM  |
+---------------+
       |
       v
+---------------+
| Dispositivi I/O |
+---------------+`}
    </SyntaxHighlighter>

    <Typography variant="body1">
      <p>
        Questo diagramma mostra la connessione tra i principali componenti di un sistema informatico: la CPU, la memoria e i dispositivi di I/O, tutti connessi attraverso il bus di sistema.
      </p>
    </Typography>
  </Container>
);

export default Architecture;
