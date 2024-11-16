import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h5'));
    const headingsData = elements.map((el) => ({
      id: el.id || el.innerText.replace(/\s+/g, '-').toLowerCase(), 
      text: el.innerText,
    }));

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
        position: { xs: 'relative', md: 'fixed' }, 
        top: { md: '100px' }, 
        left: { md: '20px' },
        maxWidth: { xs: '100%', md: '200px' }, 
        marginBottom: { xs: 4, md: 0 }, 
        padding: 2,
        backgroundColor: { xs: 'transparent', md: '#f4f4f4' }, 
        borderRadius: 1,
        boxShadow: { md: '0 4px 8px rgba(0, 0, 0, 0.1)' }, 
        overflowY: 'auto',
        maxHeight: { md: '70vh' }, 
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
                    textAlign: 'left', 
                    justifyContent: 'flex-start', 
                    width: '100%', 
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

