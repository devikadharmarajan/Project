


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Container } from "@mui/material";

// const AdminDashboard = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     // Fetch vehicle details
//     axios.get("https://localhost:44389/api/Vehicle/VehicleDetails")
//       .then(response => setVehicles(response.data))
//       .catch(error => console.error("Error fetching vehicle data:", error));

//     // Fetch booking details
//     axios.get("https://localhost:44389/api/Vehicle/Booking/dtl") // Update with correct API endpoint
//       .then(response => setBookings(response.data))
//       .catch(error => console.error("Error fetching booking data:", error));
//   }, []);

//   return (
//     <Container sx={{ maxWidth: 900, margin: "auto", mt: 3 }}>
//       <Typography variant="h4" gutterBottom align="center">ADMIN</Typography>

//       <Button variant="contained" color="primary" sx={{ mb: 2 }}>Add Vehicle</Button>
// <Typography variant="h5" gutterBottom align="center" sx={{ mt: 3 }}>Vehicle Details</Typography><br/>
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
//                   <Button variant="contained" color="secondary">Update</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Typography variant="h5" gutterBottom align="center" sx={{ mt: 3 }}>Booking Details</Typography><br />

//       <TableContainer component={Paper} sx={{ mt: 2 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>NAME</strong></TableCell>
//               {/* <TableCell><strong>User ID</strong></TableCell>
//               <TableCell><strong>Vehicle ID</strong></TableCell> */}
//               <TableCell><strong>Booking Date</strong></TableCell>
//               <TableCell><strong>Return Date</strong></TableCell>
//               {/* <TableCell><strong>Status</strong></TableCell> */}
//             </TableRow>
//           </TableHead>
//          <TableBody>
//   {bookings.map((booking) => (
//     booking.id !== "string" && ( // Ignore placeholder data
//       <TableRow key={booking.id}>
//         <TableCell>{booking.name}</TableCell>
//         <TableCell>{booking.bookstarttime}</TableCell>
//         <TableCell>{booking.bookendtime}</TableCell>
//       </TableRow>
//     )
//   ))}
// </TableBody>

//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Container, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"; 

const AdminDashboard = () => { 
  const [vehicles, setVehicles] = useState([]); 
  const [bookings, setBookings] = useState([]); 
  const [openForm, setOpenForm] = useState(false); 
  const [newVehicle, setNewVehicle] = useState({
    name: "", model: "", count: "", vehicletype: "", status: ""
  });

  useEffect(() => { 
    // Fetch vehicle details 
    axios.get("https://localhost:44389/api/Vehicle/VehicleDetails") 
      .then(response => setVehicles(response.data)) 
      .catch(error => console.error("Error fetching vehicle data:", error)); 
    
    // Fetch booking details 
    axios.get("https://localhost:44389/api/Vehicle/Booking/dtl") 
      .then(response => setBookings(response.data)) 
      .catch(error => console.error("Error fetching booking data:", error)); 
  }, []);

  // Handle form input change
  const handleChange = (event) => {
    setNewVehicle({ ...newVehicle, [event.target.name]: event.target.value });
  };

  // Handle form submission
  // const handleSubmit = async () => {
  //   try {
  //     await axios.post("https://localhost:44389/api/Vehicle/AddVehicle", newVehicle);
  //     setVehicles([...vehicles, newVehicle]); // Update UI with new vehicle
  //     setSuccessMessage("Vehicle added successfully!");
  //     setOpenForm(false); // Close form after submission
  //     setNewVehicle({ name: "", model: "", count: "", vehicletype: "", status: "" }); // Reset form fields
  //   } catch (error) {
  //     console.error("Error adding vehicle:", error);
  //   }
  // };
  const handleSubmit = async () => {
  try {
    await axios.post("https://localhost:44389/api/Vehicle/AddVehicleAdmin", newVehicle);
    setVehicles([...vehicles, newVehicle]); // Update UI with new vehicle
    
    // Show success message
    alert("Vehicle added successfully!");
    
    // Delay form close so message is seen
    setTimeout(() => {
      setOpenForm(false);
      setSuccessMessage(""); // Clear message after a few seconds
    }, 3000);

    // Reset form fields
    setNewVehicle({ name: "", model: "", count: "", vehicletype: "", status: "" });
    
  } catch (error) {
    console.error("Error adding vehicle:", error);
  }
};

  return ( 
    <Container sx={{ maxWidth: 900, margin: "auto", mt: 3 }}> 
      <Typography variant="h4" gutterBottom align="center">ADMIN</Typography> 

      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => setOpenForm(true)}>Add Vehicle</Button>

      {/* Add Vehicle Form */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogTitle>Add Vehicle</DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Name" name="name" value={newVehicle.name} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Model" name="model" value={newVehicle.model} onChange={handleChange} />
          <TextField fullWidth margin="dense" type="number" label="Count" name="count" value={newVehicle.count} onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Vehicle Type" name="vehicletype" value={newVehicle.vehicletype} onChange={handleChange} />
          <TextField fullWidth margin="dense" type="number" label="Status (1-Active, 0-Inactive)" name="status" value={newVehicle.status} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Vehicle Details Table */}
      <Typography variant="h5" gutterBottom align="center" sx={{ mt: 3 }}>Vehicle Details</Typography><br/>
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
              </TableRow> 
            ))} 
          </TableBody> 
        </Table> 
      </TableContainer> 

      {/* Booking Details Table */}
      <Typography variant="h5" gutterBottom align="center" sx={{ mt: 3 }}>Booking Details</Typography><br /> 
      <TableContainer component={Paper} sx={{ mt: 2 }}> 
        <Table> 
          <TableHead> 
            <TableRow> 
              <TableCell><strong>NAME</strong></TableCell> 
              <TableCell><strong>Booking Date</strong></TableCell> 
              <TableCell><strong>Return Date</strong></TableCell> 
            </TableRow> 
          </TableHead> 
          <TableBody> 
            {bookings.map((booking) => ( 
              booking.id !== "string" && ( 
                <TableRow key={booking.id}> 
                  <TableCell>{booking.name}</TableCell> 
                  <TableCell>{booking.bookstarttime}</TableCell> 
                  <TableCell>{booking.bookendtime}</TableCell> 
                </TableRow> 
              ) 
            ))} 
          </TableBody> 
        </Table> 
      </TableContainer> 
    </Container> 
  ); 
}; 

export default AdminDashboard;
