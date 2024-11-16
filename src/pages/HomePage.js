import React from 'react';
import { Container, Typography, Button, Box, Card, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';
import AnimatedInView from '../components/AnimatedInView';
import ParallaxSection from '../components/ParallaxSection';
import {Link} from 'react-router-dom';
import { corsi } from '../data/corsi';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{pb: 4}}>
        <ParallaxSection  bgImage="/images/computer2.jpg" title="Benvenuto!" />
        <div style={{ padding: '5px' }}>
        </div>
    
      {/* Hero Section*/}
      <AnimatedInView>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 6,
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', my: 4 }} >
             Pronto a cominciare?
            </Typography>
            <Typography variant="body1" color="text.primary" gutterBottom>
            Il <strong>Digital Lab</strong> è nato per supportare gli studenti delle scuole secondarie nel loro percorso di apprendimento informatico. Crediamo che ogni studente debba avere accesso a risorse moderne, innovative e gratuite per sviluppare competenze fondamentali e affrontare le sfide del domani.
            </Typography>
            <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2, mr: 2 }}
            component={Link}
            to={'/corsi'}>
            Vai ai corsi
            </Button>
          </Box>
          <Box sx={{
                    flex: 1,
                    mt: { xs: 4, md: 0 },
                    alignContent: { xs: 'center', md: 'left' },
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    alignItems: 'center',
                  }}>
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
     </AnimatedInView> 
     <AnimatedInView>
      <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px', // Altezza regolabile a piacere
                backgroundColor: '#1E3A5F', // Colore di sfondo scuro per contrasto
                color: '#FFC857', // Colore del testo per creare contrasto
                textAlign: 'center',
                padding: 2,
                borderRadius: 2,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                flexDirection: { xs: 'column', md: 'row' },
            }}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Impara, pratica, migliora.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
                Non importa da dove inizi: ciò che conta è il percorso che fai per crescere.
            </Typography>
        </Box>
        </AnimatedInView>

      {/* Courses Section*/}
      <AnimatedInView>
        <Box sx={{ mt: 6, padding: 4}}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', my: 4 }} align="center" >
            I Corsi
          </Typography>
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
              </AnimatedInView>
            ))}
          </Grid>
        </Box>
        </AnimatedInView>


      {/* Presentation Section*/}
      <AnimatedInView>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 6,
            padding: 6,
            borderRadius: 1,
            backgroundColor: '#1E3A5F',
            color: '#FFC857',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >

            <Box sx={{
                    flex: 1,
                    mt: { xs: 4, md: 0 },
                    alignContent: { xs: 'center', md: 'left' },
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    alignItems: 'center',
                    
                    }}>
              <motion.img
                src="/images/immaginegabry.png"
                alt="immagine gabriele"
                style={{ width: '60%', height: '60%', borderRadius: 4 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </Box>
            <Box sx={{ 
              flex: 1, 
              textAlign: { xs: 'center', md: 'left' }
               }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
             Chi sono?
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
            Sono Gabriele Di Pinto, docente di Laboratorio di Scienze Informatiche. Nella vita mi occupo di digitale, innovazione e business online, oltre che di formazione per ragazzi, adulti e aziende. Ho creato il Digital Lab per fornire ai miei studenti un luogo dove studiare, esercitarsi e crescere. Insegnare non è soltanto un mestiere, ma una passione per me.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mt: 2 }}
              component={Link}
              to={'/contattami'}
              >
              Contattami!
            </Button>
          </Box>
        </Box>
        </AnimatedInView>


    </Container>

    
  );
};

export default HomePage;
