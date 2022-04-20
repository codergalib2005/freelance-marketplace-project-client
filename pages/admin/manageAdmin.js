import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const manageAdmin = () => {
  const [ourUsers, setOurUsers] = useState([]);
  
  

  useEffect(() =>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    .then(res => res.json())
    .then(data => setOurUsers(data.result))
  },[]);

 
  return (
    <TableContainer className="p-10" component={Paper} >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {
         ourUsers.map(OurUser => (
               
          <TableRow
            key={OurUser._id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
          {OurUser.name}
          </TableCell>
          <TableCell align="left">{OurUser.email}</TableCell>
          <TableCell align="left">{OurUser.admin}</TableCell>
          <TableCell align="left"><button >Make Admin</button></TableCell>
          <TableCell align="left"><button >Remove Admin</button></TableCell>
        </TableRow>
         ))
       }
      
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default manageAdmin;

