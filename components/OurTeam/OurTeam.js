import React from "react";
import Image from "next/image";
import img from "../../public/profile/boy_avatar.png";
import { motion } from "framer-motion";

const OurTeam = () => {
  const mystyle = {
    backgroundColor: "#b8b2b2",
  };
  return (
    <>
      <div className="container p-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <motion.div
          animate={{ x: 100 }}
          transition={{ delay: 1 }}
          className="flex"
        >
          <div>
            <Image style={mystyle} src={img} alt="" />
          </div>
          <div className="pl-4">
            <div>
              <h1 className="text-blue-600 font-bold">Name</h1>
              <h1>Designation</h1>
              <br />
              <hr />
              <br />
              <p>This is a sample Text. Insert yuor desired text here.</p>
            </div>
          </div>
        </motion.div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={img} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name</h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={img} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name</h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={img} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name</h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={img} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name</h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={img} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name</h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
