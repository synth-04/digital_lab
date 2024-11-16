import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[300],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Digital Lab. Tutti i diritti riservati. Gabriele Di Pinto 
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link href="/privacy-policy" underline="hover" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          |{' '}
          <Link href="/terms-of-service" underline="hover" sx={{ mx: 1 }}>
            Termini di Servizio
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
