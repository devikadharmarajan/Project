import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const Home = () => {
  return (
    // <Container maxWidth="md">
    //   <Box sx={{ textAlign: "center", py: 6 }}>
    //     <Typography variant="h3" fontWeight="bold">
    //      🏍️ Welcome to Vehicle Rent 🚗 
    //     </Typography>
    //     <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
    //       Find the best rental vehicles effortlessly!
    //     </Typography>
        
    //   </Box>
    // </Container>
    <Container maxWidth="md">
  <Box 
    sx={{ 
      textAlign: "center", 
      py: 6, 
      bgcolor: "primary.main", 
      color: "white",
      borderRadius: 2,
      boxShadow: 3,
      mt: 8 // Adds spacing from the navbar
    }}
  >
    <Typography variant="h3" fontWeight="bold">
      🚗 Welcome to Vehicle Rent 🏍️
    </Typography>
    <Typography variant="h6" sx={{ mt: 2, fontStyle: "italic" }}>
      Find the best rental vehicles effortlessly!
    </Typography>
  </Box>
</Container>


  );
};

export default Home;
