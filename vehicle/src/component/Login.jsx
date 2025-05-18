







//  import React, { useState } from "react"; 
// import axios from "axios"; 
// import { Button } from "@mui/material";
// const Login = () => { const [credentials, setCredentials] = useState({ email: "", password: "" });
//  const [error, setError] = useState(""); const handleChange = (e) => { setCredentials({ ...credentials, [e.target.name]: e.target.value }); }; 
//  const handleSubmit = async (e) => { e.preventDefault(); try { const response = await axios.post("https://your-api-url.com/login", credentials); localStorage.setItem("token", response.data.token); 
//     alert("Login successful!"); } catch (err) { setError("Invalid email or password"); } }; return ( <div> <h2>Login</h2> {error && <p style={{ color: "red" }}>{error}</p>}
//      <form onSubmit={handleSubmit}> 
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//          <input type="password" name="password" placeholder="Password" onChange={handleChange} required /> 
//          <Button type="submit">Login</Button> 
//          </form> 
//          </div> ); };
//      export default Login;



// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";
// import axios from "axios";

// const Login = () => {
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

//     try {
//       const response = await axios.post("https://localhost:44389/api/Vehicle/Login", credentials);
//       localStorage.setItem("token", response.data.token);
//       alert("Login successful!");
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
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

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('https://localhost:44389/api/Vehicle/Login', {
      email: employeeId,
      password: password
    })
    .then(response => {
      if (response.status === 200) {
        // Save data if needed
        localStorage.setItem('employeeId', employeeId);
        navigate('/userdashboard'); // Redirect to profile page
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
      <h2>User Login</h2>
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

export default Login;