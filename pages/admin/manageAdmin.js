/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import styles from "../../styles/manageAdmin.module.css";
import SideBar from "../../components/SideBar/SideBar";
import SideBarMenu from "../../components/SideBar/SideBarMenu";
import MainDashboard from "../../components/Dashboard/MainDashboard";
import useAuth from "../../hooks/useAuth";

const ManageAdmin = () => {
  const [ourUsers, setOurUsers] = useState([]);
  const { isOpen } = useAuth();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setOurUsers(data.result));
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
          <div
            className={` ${styles.table_container} py-5 pr-5 bg-white ${
              isOpen ? "pl-[205px]" : "pl-[50px]"
            }`}
          >
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead
                  style={{ background: "#e83a3b", border: "2px solid #283" }}
                >
                  <TableRow>
                    <TableCell
                      style={{
                        fontSize: "1.1rem",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "1.1rem",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                      align="left"
                    >
                      Email
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "1.1rem",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                      align="left"
                    >
                      Role
                    </TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ourUsers.map((OurUser) => (
                    <TableRow
                      key={OurUser._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      style={{
                        marginBottom: "10px",
                        border: "2px solid  #283",
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {OurUser.name}
                      </TableCell>
                      <TableCell align="left">{OurUser.email}</TableCell>
                      <TableCell align="left">{OurUser.admin}</TableCell>
                      <TableCell align="left">
                        <Link href={"/admin/makeAdmin"}>
                          <button className={styles.admin_button}>
                            Make Admin
                          </button>
                        </Link>
                      </TableCell>
                      <TableCell align="left">
                        <Link href={"/admin/removeAdmin"}>
                          <button>Remove Admin</button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
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
