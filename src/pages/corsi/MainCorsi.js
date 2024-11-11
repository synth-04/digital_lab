// src/pages/MainCorsi.js
import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import ParallaxSection from '../../components/ParallaxSection';
import AnimatedInView from '../../components/AnimatedInView';

const corsi = [
  { title: 'Architettura del Computer', description: 'Componenti di base e funzionamento di un elaboratore', link: '/corsi/architettura-del-computer', image: '/images/architettura.jpg' },
  { title: 'Programmazione in C++', description: 'Introduzione ai concetti di programmazione in C++.', link: '/corsi/programmazionecpp', image: '/images/programmazione.jpg' },
  { title: 'Web Development', description: 'Creazione di siti web moderni utilizzando HTML, CSS e JavaScript.', link: '/corsi/web-development', image: '/images/webdev.jpg'},
  { title: 'Database', description: 'Fondamenti di progettazione e gestione di database relazionali.', link: '/corsi/database', image: '/images/database.png'},
  { title: 'Sicurezza Informatica', description: 'Comprendere le basi della sicurezza informatica e delle reti.', link: '/corsi/sicurezza-informatica', image: '/images/cybersecurity.jpg' },
];

const MainCorsi = () => {
  return (
    <Container maxWidth="lg">
      <ParallaxSection  bgImage="/images/computercorsi.jpg" title="Corsi" />
        <div style={{ padding: '5px' }}>
        </div>
      {/* Courses Section*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <Box sx={{ mt: 6, padding: 4, alignItems: 'center'}}>
          <Grid container spacing={4} justifyContent="center">
            {corsi.map((corso, index) => (
              <AnimatedInView>
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card sx={{ height: 300, width: 300 }} align='center'>
                    <CardMedia
                      component="img"
                      height="140"
                      image={corso.image}
                      alt={corso.title}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {corso.title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {corso.description}
                      </Typography>
                    </CardContent>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      sx={{ m: 2 }}
                      component={Link}
                      to={corso.link}
                    >
                      Vai al corso
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
              </AnimatedInView>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default MainCorsi;
