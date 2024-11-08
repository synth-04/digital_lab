// src/pages/HomePage.js
import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Benvenuto al sito di riferimento
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Programmazione</Typography>
              <Typography>Descrizione del contenuto...</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Database</Typography>
              <Typography>Descrizione del contenuto...</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Aggiungi altre sezioni */}
      </Grid>
    </Container>
  );
};

export default HomePage;
