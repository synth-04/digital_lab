// src/pages/MainCorsi.js
import React from 'react';
import { Container, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {Link} from 'react-router-dom';

const corsi = [
    { title: 'Architettura del Computer', description: 'Componenti di base e funzionamento di un elaboratore', link: '/corsi/architettura-del-computer' },
    { title: 'Programmazione', description: 'Introduzione ai concetti di programmazione e linguaggi di base.', link: 'corsi/programmazione' },
    { title: 'Web Development', description: 'Creazione di siti web moderni utilizzando HTML, CSS e JavaScript.', link: '/corsi/web-development'},
    { title: 'Database', description: 'Fondamenti di progettazione e gestione di database relazionali.', link: '/corsi/database'},
    { title: 'Sicurezza Informatica', description: 'Comprendere le basi della sicurezza informatica e delle reti.', link: '/corsi/sicurezza-informatica' },
];

const MainCorsi = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom align="center">
        Corsi e dispense
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {corsi.map((corso, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card sx={{ height: 300, width: 300 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {corso.title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {corso.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                    component={Link}
                    to={corso.link}
                    size="small"
                    color="primary">
                  Scopri di più
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainCorsi;
