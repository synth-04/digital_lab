// src/pages/Contact.js
import React, { useRef } from 'react';
import { Container, TextField, Button, Typography} from '@mui/material';
import emailjs from '@emailjs/browser';
import ParallaxSection from '../components/ParallaxSection';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_o67whko', // EmailJS service ID
        'template_4m076yf', // EmailJS template ID
        form.current,
        '7LdtnMB1oV2Sy5qbZ' // EmailJS user/public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Messaggio inviato con successo!');
        },
        (error) => {
          console.log(error.text);
          alert('Errore durante l\'invio del messaggio.');
        }
      );
  };

  return (
    <Container maxWidth="lg" sx={{pb: 4 }}>
        <ParallaxSection  bgImage="/images/contatto2.jpg" title="Contattami"/>
        <div style={{ padding: '5px' }}>
        </div>
        <Typography variant="body1" color="text.primary" sx={{pt: 4}} gutterBottom>
            Lascia il tuo messaggio qui sotto e ti risponderò entro 24 ore.
            </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          fullWidth
          label="Nome"
          name="user_name"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="user_email"
          type="email"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Messaggio"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
        >
          Invia Messaggio
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
