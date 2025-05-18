// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Container } from "@mui/material";

// const UserDashBoard = () => {
//   const [vehicles, setVehicles] = useState([]);

//   useEffect(() => {
//     axios.get("https://localhost:44389/api/Vehicle/VehicleDetails") // Replace with your actual API link
//       .then(response => setVehicles(response.data))
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);



//   return (
//     <Container sx={{ maxWidth: 900, margin: "auto", mt: 3 }}>
//       <Typography variant="h4" gutterBottom align="center">User Dashboard</Typography>

//       <Button variant="contained" color="primary" sx={{ mb: 2 }}>Available Vehicle</Button>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Vehicle ID</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Model</strong></TableCell>
//               <TableCell><strong>Count</strong></TableCell>
//               <TableCell><strong>Vehicle Type</strong></TableCell>
//               <TableCell><strong>Status</strong></TableCell>
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {vehicles.map((vehicle) => (
//               <TableRow key={vehicle.vid}>
//                 <TableCell>{vehicle.vid}</TableCell>
//                 <TableCell>{vehicle.name}</TableCell>
//                 <TableCell>{vehicle.model}</TableCell>
//                 <TableCell>{vehicle.count}</TableCell>
//                 <TableCell>{vehicle.vehicletype}</TableCell>
//                 <TableCell>{vehicle.status === 1 ? "Active" : "Inactive"}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="secondary">Book</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default UserDashBoard;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Container, Modal, Box, TextField } from "@mui/material";

// const UserDashBoard = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [bookingDetails, setBookingDetails] = useState({
//     id: "",
//     name: "",
//     vehicleId: "",
//     bookstarttime: "",
//     bookendtime: "",
//     vehicletype: ""
//   });

//   useEffect(() => {
//     axios.get("https://localhost:44389/api/Vehicle/VehicleDetails")
//       .then(response => setVehicles(response.data))
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);

//   const handleBookClick = (vehicle) => {
//     setSelectedVehicle(vehicle);
//     setBookingDetails({
//       id: "",  // You may generate an ID dynamically
//       name: "",
//       vehicleId: vehicle.vid,
//       bookstarttime: "",
//       bookendtime: "",
//       vehicletype: vehicle.vehicletype
//     });
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedVehicle(null);
//   };

//   const handleChange = (event) => {
//     setBookingDetails({ ...bookingDetails, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post("https://localhost:44389/api/Vehicle/Book", bookingDetails);
//       alert("Booking successful!");
//       handleClose();
//     } catch (error) {
//       console.error("Booking error:", error);
//       alert("Booking failed. Try again.");
//     }
//   };

//   return (
//     <Container sx={{ maxWidth: 900, margin: "auto", mt: 3 }}>
//       <Typography variant="h4" gutterBottom align="center">User Dashboard</Typography>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Vehicle ID</strong></TableCell>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Model</strong></TableCell>
//               <TableCell><strong>Count</strong></TableCell>
//               <TableCell><strong>Vehicle Type</strong></TableCell>
//               <TableCell><strong>Status</strong></TableCell>
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {vehicles.map((vehicle) => (
//               <TableRow key={vehicle.vid}>
//                 <TableCell>{vehicle.vid}</TableCell>
//                 <TableCell>{vehicle.name}</TableCell>
//                 <TableCell>{vehicle.model}</TableCell>
//                 <TableCell>{vehicle.count}</TableCell>
//                 <TableCell>{vehicle.vehicletype}</TableCell>
//                 <TableCell>{vehicle.status === 1 ? "Active" : "Inactive"}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="secondary" onClick={() => handleBookClick(vehicle)}>Book</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Booking Modal */}
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", p: 4, borderRadius: 2 }}>
//           <Typography variant="h6" gutterBottom>Book Vehicle: {selectedVehicle?.name}</Typography>
//           {/* <TextField label="Booking ID" name="id" fullWidth margin="normal" value={bookingDetails.id} onChange={handleChange} /> */}
//           <TextField label="User Name" name="name" fullWidth margin="normal" value={bookingDetails.name} onChange={handleChange} />
//           <TextField label="Booking Start Time" name="bookstarttime" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={bookingDetails.bookstarttime} onChange={handleChange} />
//           <TextField label="Booking End Time" name="bookendtime" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={bookingDetails.bookendtime} onChange={handleChange} />
//           <TextField label="Vehicle Type" name="vehicletype" fullWidth margin="normal" value={bookingDetails.vehicletype} disabled />
//           <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>Confirm Booking</Button>
//           <Button variant="contained" color="secondary" sx={{ mt: 2, ml: 1 }} onClick={handleClose}>Cancel</Button>
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default UserDashBoard;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Container, Modal, Box, TextField } from "@mui/material";

const UserDashBoard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    id: "",
    name: "",
    vehicleId: "",
    bookstarttime: "",
    bookendtime: "",
    vehicletype: ""
  });

  useEffect(() => {
    axios.get("https://localhost:44389/api/Vehicle/VehicleDetails")
      .then(response => setVehicles(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleBookClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setBookingDetails({
      // id: "",  // You may generate an ID dynamically
      name: "",
      vehicleId: vehicle.vid.toString(), // Fetching Vehicle ID dynamically
      bookstarttime: "",
      bookendtime: "",
      vehicletype: vehicle.vehicletype
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVehicle(null);
  };

  const handleChange = (event) => {
    setBookingDetails({ ...bookingDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("https://localhost:44389/api/Vehicle/Bookingvehicle", bookingDetails);
      alert("Booking successful!");
      handleClose();
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Try again.");
    }
  };

  return (
    <Container sx={{ maxWidth: 900, margin: "auto", mt: 3 }}>
      <Typography variant="h4" gutterBottom align="center">User Dashboard</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Vehicle ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Model</strong></TableCell>
              <TableCell><strong>Count</strong></TableCell>
              <TableCell><strong>Vehicle Type</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.vid}>
                <TableCell>{vehicle.vid}</TableCell>
                <TableCell>{vehicle.name}</TableCell>
                <TableCell>{vehicle.model}</TableCell>
                <TableCell>{vehicle.count}</TableCell>
                <TableCell>{vehicle.vehicletype}</TableCell>
                <TableCell>{vehicle.status === 1 ? "Active" : "Inactive"}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleBookClick(vehicle)}>Book</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Booking Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", p: 4, borderRadius: 2 }}>
          
          <TextField label="User Name" name="name" fullWidth margin="normal" value={bookingDetails.name} onChange={handleChange} />
          <TextField label="Booking Start Time" name="bookstarttime" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={bookingDetails.bookstarttime} onChange={handleChange} />
          <TextField label="Booking End Time" name="bookendtime" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={bookingDetails.bookendtime} onChange={handleChange} />
          <TextField label="Vehicle Type" name="vehicletype" fullWidth margin="normal" value={bookingDetails.vehicletype}  />
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>Confirm Booking</Button>
          <Button variant="contained" color="secondary" sx={{ mt: 2, ml: 1 }} onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default UserDashBoard;

