// src/pages/HomePage.js
import React from 'react';
import { Container, Typography, Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ParallaxSection from '../components/ParallaxSection';

// 

const HomePage = () => {
  return (
    <Container style={{ padding: '20px' }}>
        <div>
        <ParallaxSection  bgImage="/images/immaginecomputer.jpg" title="Benvenuto nel Digital Lab" />
        <div style={{ padding: '5px' }}>
        </div>
      <Box component="main" sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom textAlign={'center'}>
          Benvenuto! Pronto a cominciare?
        </Typography>
        <Grid container spacing={10} alignItems="center">
            <Grid size={{ xs: 6, md: 4, sm: 12 }}>
              <img src='/images/iconapc.png' alt="Icona computer" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid size={{ xs: 6, md: 8, sm: 12 }}>
                <Typography>
                    Il <strong>Digital Lab</strong> è un progetto creato per ampliare le conoscenze informatiche degli studenti delle scuole secondarie.
                    Troverai numerose risorse, dai programmi di Informatica scolastici fino a progetti ideati appositamente per gli studenti. Sono risorse totalmente <strong>gratuite</strong>, quindi non sprecarle!
                    <ul>
                        <li>Dispense</li>
                        <li>Progetti formativi</li>
                        <li>Esercitazioni</li>
                        <li>Slide Riassuntive</li>
                    </ul>
                    
                </Typography>

            </Grid>
            
        </Grid>
        <Box sx={{ my: 4 }}>
        <Grid container spacing={10} alignItems="center">
        <Grid size={{ xs: 6, md: 8, sm: 12 }}>
          <Typography variant="h5">Chi sono?</Typography>
          <Typography>
            Sono Gabriele Di Pinto, docente di Laboratorio di Scienze Informatiche. Nella vita mi occupo di digitale, innovazione e business online, oltre che di formazione per ragazzi, adulti e aziende. Ho creato il Digital Lab per fornire ai miei studenti un luogo dove studiare, esercitarsi e crescere. Insegnare non è soltanto un mestiere, ma una passione per me.
          </Typography>
        </Grid>
        <Grid size={{ xs: 6, md: 4, sm: 12 }}>
                <img src='/images/immaginegabry.png' alt="Descrizione dell'immagine" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        </Grid>
        </Box>
        </Box>
      </div>
    </Container>
  );
};

export default HomePage;

