// src/pages/HomePage.js
import React from 'react';
import { Container, Typography, Button, Box, Card, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';
import ParallaxSection from '../components/ParallaxSection';
import {Link} from 'react-router-dom';

const corsi = [
  { title: 'Architettura del Computer', description: 'Componenti di base e funzionamento di un elaboratore', link: '/corsi/architettura-del-computer', image: '/images/architettura.jpg' },
  { title: 'Programmazione', description: 'Introduzione ai concetti di programmazione e linguaggi di base.', link: '/corsi/programmazione', image: '/images/programmazione.jpg' },
  { title: 'Web Development', description: 'Creazione di siti web moderni utilizzando HTML, CSS e JavaScript.', link: '/corsi/web-development', image: '/images/webdev.jpg'},
  { title: 'Database', description: 'Fondamenti di progettazione e gestione di database relazionali.', link: '/corsi/database', image: '/images/database.png'},
  { title: 'Sicurezza Informatica', description: 'Comprendere le basi della sicurezza informatica e delle reti.', link: '/corsi/sicurezza-informatica', image: '/images/cybersecurity.jpg' },
];

const HomePage = () => {
  return (
    <Container maxWidth="lg">
        <ParallaxSection  bgImage="/images/computer2.jpg" title="Benvenuto nel Digital Lab" />
        <div style={{ padding: '5px' }}>
        </div>
    
      {/* Hero Section*/}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 6,
            backgroundColor: '#f5f5f5',
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h5" gutterBottom>
             Pronto a cominciare?
            </Typography>
            <Typography variant="h6" color="text.primary" gutterBottom>
            Il <strong>Digital Lab</strong> è un progetto creato per ampliare le conoscenze informatiche degli studenti delle scuole secondarie.
            Troverai numerose risorse, dai programmi di Informatica scolastici fino a progetti ideati appositamente per gli studenti. 
            Sono risorse totalmente <strong>gratuite</strong>, quindi non sprecarle!
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
            Vai ai corsi
            </Button>
          </Box>
          <Box sx={{ flex: 1, mt: { xs: 4, md: 0 } }}>
            <motion.img
              src="/images/iconapc.png"
              alt="Hero"
              style={{ width: '60%', height: 'auto', borderRadius: 8 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </Box>
        </Box>
      </motion.div>

      {/* Courses Section*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <Box sx={{ mt: 6, padding: 4}}>
          <Typography variant="h5" gutterBottom align="center">
            I Corsi
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {corsi.map((corso, index) => (
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
                      <Typography variant="body2" color="text.secondary">
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
            ))}
          </Grid>
        </Box>
      </motion.div>


      {/* Presentation Section*/}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 6,
            backgroundColor: '#f5f5f5',
            padding: 8,
            borderRadius: 2,
          }}
        >

            <Box sx={{ flex: 1, mt: { xs: 4, md: 0 } }}>
              <motion.img
                src="/images/immaginegabry.png"
                alt="immagine gabriele"
                style={{ width: '70%', height: '70%', borderRadius: 8 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </Box>
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h5" gutterBottom>
             Chi sono?
            </Typography>
            <Typography variant="h6" color="text.primary" gutterBottom>
            Sono Gabriele Di Pinto, docente di Laboratorio di Scienze Informatiche. Nella vita mi occupo di digitale, innovazione e business online, oltre che di formazione per ragazzi, adulti e aziende. Ho creato il Digital Lab per fornire ai miei studenti un luogo dove studiare, esercitarsi e crescere. Insegnare non è soltanto un mestiere, ma una passione per me.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Contattami!
            </Button>
          </Box>
        </Box>
      </motion.div>


    </Container>

    
  );
};

export default HomePage;
