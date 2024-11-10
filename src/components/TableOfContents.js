// src/components/TableOfContents.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Seleziona tutti gli elementi h5 nella pagina
    const elements = Array.from(document.querySelectorAll('h5'));
    const headingsData = elements.map((el) => ({
      id: el.id || el.innerText.replace(/\s+/g, '-').toLowerCase(), // Crea un ID se non esiste
      text: el.innerText,
    }));

    // Imposta gli ID sugli elementi se non esistono
    elements.forEach((el, index) => {
      if (!el.id) {
        el.id = headingsData[index].id;
      }
    });

    setHeadings(headingsData);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="nav"
      aria-label="Table of Contents"
      sx={{
        position: { xs: 'relative', md: 'fixed' }, // Posizione relativa su schermi piccoli, fissa su grandi
        top: { md: '100px' }, // Aggiusta la posizione su schermi medi e grandi
        left: { md: '20px' },
        maxWidth: { xs: '100%', md: '200px' }, // Larghezza piena su schermi piccoli
        marginBottom: { xs: 4, md: 0 }, // Margine inferiore su schermi piccoli
        padding: 2,
        backgroundColor: { xs: 'transparent', md: '#f4f4f4' }, // Sfondo visibile solo su schermi grandi
        borderRadius: 1,
        boxShadow: { md: '0 4px 8px rgba(0, 0, 0, 0.1)' }, // Ombra su schermi grandi
        overflowY: 'auto',
        maxHeight: { md: '70vh' }, // Altezza massima per schermi grandi
      }}
    >
      <Typography variant="h6" gutterBottom>
        Indice
      </Typography>
      <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
        {headings.map((heading) => (
          <li key={heading.id} style={{ margin: '8px 0' }}>
            <Button
              onClick={() => handleScrollTo(heading.id)}
              variant="text"
              size="small"
              sx={{ 
                    textTransform: 'none', 
                    color: 'primary.main',
                    textAlign: 'left', // Forza l'allineamento a sinistra
                    justifyContent: 'flex-start', // Aggiungi questa proprietà per assicurare l'allineamento del testo a sinistra
                    width: '100%', // Garantisce che il bottone occupi l'intera larghezza del contenitore
                 }}
            >
              {heading.text}
            </Button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TableOfContents;

