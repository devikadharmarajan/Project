import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const VehicleTable = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:44389/api/Vehicle/VehicleDetails")
      .then(response => setVehicles(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto", mt: 3 }}>
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
  );
};

export default VehicleTable;
