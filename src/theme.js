// src/theme.js
import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700], // Colore principale (blu)
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
      secondary: blue[700], // Testo secondario in blu
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Imposta il font come Roboto
  },
});

export default theme;