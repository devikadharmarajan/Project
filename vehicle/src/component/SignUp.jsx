// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     userName: "",
//     mail: "",
//     mobNo: "",
//     password: "",
//     address: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//   const response = await axios.post("https://localhost:44389/api/Vehicle/Register", formData);
//   alert("Signup successful!");
// } catch (err) {
//   console.error("Error response:", err.response); // Log the full error
//   setError(`Signup failed: ${err.response?.data?.message || "Unknown error"}`);
// } finally {
//   setLoading(false);
// }

//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           p: 4,
//           mt: 8,
//           bgcolor: "#f9f9f9",
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Sign Up
//         </Typography>
//         {error && <Typography color="error">{error}</Typography>}
//         <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
//           <TextField fullWidth label="User Name" name="userName" value={formData.userName} onChange={handleChange} margin="normal" required />
//           <TextField fullWidth label="Email" name="mail" value={formData.mail} onChange={handleChange} margin="normal" required />
//           <TextField fullWidth label="Mobile Number" name="mobNo" value={formData.mobNo} onChange={handleChange} margin="normal" required />
//           <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} margin="normal" required />
//           <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} margin="normal" required />
//           <Button type="submit" fullWidth variant="contained" color="primary" disabled={loading} sx={{ mt: 2 }}>
//             {loading ? "Signing up..." : "Sign Up"}
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Signup;


// import { useNavigate } from "react-router-dom"; // Import React Router

// const Signup = () => {
//   const navigate = useNavigate(); // Initialize navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("https://localhost:44389/api/Vehicle/Register", formData);
//       alert("Signup successful!");

//       // Fetch vehicle details
//       const vehicleResponse = await axios.get("https://localhost:44389/api/Vehicle/VehicleDetails");

//       // Store vehicle data (optional)
//       localStorage.setItem("vehicleDetails", JSON.stringify(vehicleResponse.data));

//       // Redirect to vehicle details page
//       navigate("/vehicle-details");

//     } catch (err) {
//       console.error("Error response:", err.response);
//       setError(`Signup failed: ${err.response?.data?.message || "Unknown error"}`);
//     } finally {
//       setLoading(false);
//     }
//   };
// };
// export default Signup;

import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    mail: "",
    mobNo: "",
    password: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle signup submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://localhost:44389/api/Vehicle/Register", formData);
      alert("Signup successful!  Please go through the Login Page");
      // Fetch vehicle details
      // const vehicleResponse = await axios.get("https://localhost:44389/api/Vehicle/VehicleDetails");

      // // Store vehicle data (optional)
      // localStorage.setItem("vehicleDetails", JSON.stringify(vehicleResponse.data));

      // // Redirect to vehicle details page
      // navigate("/vehicle-details");
    } catch (err) {
      console.error("Error response:", err.response);
      setError(`Signup failed: ${err.response?.data?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4, mt: 8, bgcolor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <TextField fullWidth label="User Name" name="userName" value={formData.userName} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Email" name="mail" type="email" value={formData.mail} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Mobile Number" name="mobNo" type="tel" value={formData.mobNo} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} margin="normal" required />
          <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} margin="normal" required />

          {/* Submit Button with Loading Indicator */}
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={loading} sx={{ mt: 2 }}>
            {loading ? <CircularProgress size={24} /> : "Sign Up"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
