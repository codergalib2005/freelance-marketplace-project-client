/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import styles from '../../styles/manageAdmin.module.css';
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import MainDashboard from "../../components/Dashboard/MainDashboard";



const ManageAdmin = () => {
  const [ourUsers, setOurUsers] = useState([]);



  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/users`)
      .then(res => res.json())
      .then(data => setOurUsers(data.result))
  }, []);


  return (
    <section>
      <main>
        <div className="dashboard_position bg-[#00073d]">
          <div>
            {" "}
            <SideBar />
            <SideBarMenu />
          </div>
          <div className={styles.table_container}>
            <TableContainer component={Paper} >
              <Table aria-label="simple table">
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
                        <TableCell align="left"><Link href={'/admin/makeAdmin'}><button className={styles.admin_button}>Make Admin</button></Link></TableCell>
                        <TableCell align="left"><Link href={'/admin/removeAdmin'}><button >Remove Admin</button></Link></TableCell>
                      </TableRow>
                    ))
                  }

                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ManageAdmin;
