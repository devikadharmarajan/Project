// // import React, { useState } from 'react';
// // import { Container, TextField, Button, Typography, Box } from '@mui/material';

// // const Admindtl = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = () => {
// //     // Implement authentication logic here
// //     console.log('Logging in with:', email, password);
// //   };

// //   return (
// //     <Container maxWidth="xs">
// //       <Box sx={{ mt: 5, p: 3, borderRadius: 2, boxShadow: 3 }}>
// //         <Typography variant="h5" gutterBottom>
// //           Admin Login
// //         </Typography>
// //         <TextField
// //           label="id"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <TextField
// //           label="Password"
// //           type="password"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
// //           Login
// //         </Button>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default Admindtl


// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// const Admindtl = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//   //   try {
//   //     const response = await axios.post("https://localhost:44389/api/Vehicle/Adminlogin", credentials);
//   //     localStorage.setItem("token", response.data.token);
//   //     alert("Login successful!");

//   //     navigate("/admindashboard"); // Correct navigation
//   //   } catch (err) {
//   //     setError("Invalid email or password");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
// try {
//   const response = await axios.post("https://localhost:44389/api/Vehicle/Adminlogin", credentials);
//   console.log("API Response:", response.data);

//   if (response.status === 200) {
//     localStorage.setItem("userId", response.data.userId); 
  
//     navigate("/admindashboard");
//   } else {
//     setError("Login failed");
//   }
// } catch (err) {
//   setError(err.response?.data?.message || "Invalid email or password");
// } finally {
//   setLoading(false);
// }
  
//   }

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
//           Login
//         </Typography>
//         {error && <Typography color="error">{error}</Typography>}
//         <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             name="email"
//             value={credentials.email}
//             onChange={handleChange}
//             margin="normal"
//             required
//             sx={{ backgroundColor: "#fff", borderRadius: 1 }}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             margin="normal"
//             required
//             sx={{ backgroundColor: "#fff", borderRadius: 1 }}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             disabled={loading}
//             sx={{ mt: 2, py: 1.5, fontSize: "16px", borderRadius: 2 }}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Admindtl;







// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Alert
// } from '@mui/material';

// const LoginForm = () => {
//   const [id, setId] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError(false);

//     try {
//       const response = await axios.post('http://localhost:5000/api/Emp/login', {
//         id,
//         password
//       });
//       setMessage(`Login successful. Welcome ${response.data.name}!`);
//     } catch (error) {
//       setError(true);
//       setMessage(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
//         <Typography variant="h5" gutterBottom>
//           Employee Login
//         </Typography>
//         <form onSubmit={handleLogin}>
//           <TextField
//             fullWidth
//             label="Employee ID"
//             margin="normal"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Login
//           </Button>
//         </form>
//         {message && (
//           <Alert severity={error ? 'error' : 'success'} sx={{ mt: 3 }}>
//             {message}
//           </Alert>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Admindtl = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('https://localhost:44389/api/Vehicle/Adminlogin', {
      email: employeeId,
      password: password
    })
    .then(response => {
      if (response.status === 200) {
        // Save data if needed
        localStorage.setItem('employeeId', employeeId);
        navigate('/admindashboard'); // Redirect to profile page
        //navigate(`/employeeprofile/${id}`);

      }
    })
    .catch(error => {
      alert('Login failed');
      console.error(error);
    });
  };

  return (
    <Container maxWidth="sm">
      <h2>Admin Login</h2>
      <TextField
        fullWidth
        label="Mail"
        margin="normal"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Admindtl;