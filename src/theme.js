// src/theme.js
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#0c4467", // Colore principale (blu)
    },
    secondary: {
      main: grey[50], // Colore secondario (bianco-grigio chiaro)
    },
    background: {
      default: grey[50], // Sfondo bianco-grigio chiaro
      paper: '#ffffff',  // Sfondo bianco per i componenti
    },
    text: {
      primary: '#000000', // Testo principale in nero
      secondary: "#0c4467", // Testo secondario in blu
    },
  },
  typography: {
    fontFamily: 'Monserrat, Arial, sans-serif', // Imposta il font come Roboto
    h4: {
        fontSize: '3rem', // Cambia dimensione dell'intestazione h4
      },
    h5: {
        color: "#0c4467",
        fontWeight: '600',
        fontSize: '2rem', // Cambia dimensione dell'intestazione h5
      },
    body1: {
        fontSize: '1.25rem', // Cambia dimensione del testo principale
  },
},
});

export default theme;
