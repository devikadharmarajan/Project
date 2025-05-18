import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LogoutPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the Login page
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 5, p: 3, borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          You have been logged out
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Thank you for using our system. Click below to log back in.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mt: 2 }} 
          onClick={handleLoginRedirect} // Call function on click
        >
          Login Again
        </Button>
      </Box>
    </Container>
  );
};

export default LogoutPage;
