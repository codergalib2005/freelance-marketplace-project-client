import React from "react";
import Image from "next/image";
import galib from "../../public/teamPhoto/galib.png";
import mahmudul from "../../public/teamPhoto/mahmudul.png";
import prottoy from "../../public/teamPhoto/prottoy.png";
import minhaj from "../../public/teamPhoto/minhaj.png";
import alamin from "../../public/teamPhoto/alamin.png";
import shobuj from "../../public/teamPhoto/shobuj.png";

const OurTeamCom = () => {
  const team = [
    {
      name: "Asadullah Hil Galib",
      img: "https://drive.google.com/file/d/1SNcS0WRmtKAi0ffHQmPHprHALSMBF80n/view?usp=sharing",
      designation: "This is a sample Text. Insert yuor desired text here.",
    },
    {
      name: "Prottay Roy Arnob",
      img: "https://drive.google.com/file/d/1GiETz4SCBrwXpPtfhqaIUqQuhMcKY8uf/view?usp=sharing",
      designation: "This is a sample Text. Insert yuor desired text here.",
    },
    {
      name: "Mahmudul Haque Qudrati",
      img: "https://drive.google.com/file/d/1BXtm2R0VevVCLqlV4gnEIBS2ShiLgZK1/view?usp=sharing",
      designation: "This is a sample Text. Insert yuor desired text here.",
    },
    {
      name: "Md Minhaj",
      img: "https://drive.google.com/file/d/1Z3JtxbHItGOhRR0Sb82-EmHRdXnyGFNI/view?usp=sharing",
      designation: "This is a sample Text. Insert yuor desired text here.",
    },
    {
      name: "Md Alamin Islam",
      img: "https://drive.google.com/file/d/1CXuKi0WmEzExXkIEpaYuemfhoQ553bEc/view?usp=sharing",
      designation: "This is a sample Text. Insert yuor desired text here.",
    },
    {
      name: "Md Minhajul Islam",
      img: "https://drive.google.com/file/d/12644JRPXEnrfV6M_9QyyvQPY1C6JTtXq/view?usp=sharing",
      designation: "This is a sample Text. Insert yuor desired text here.",
    },
  ];
  const mystyle = {
    backgroundColor: "#b8b2b2",
  };
  return (
    <>
      <div className="container mx-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {/* {team.map((member) => (
          <div key={member.name} className="flex">
            <div>
              <Image layout="fill" style={mystyle} src={member.img} alt="" />
            </div>
            <div className="pl-4">
              <div>
                <h1 className="text-blue-600 font-bold">Name:{member.name}</h1>
                <h1>Designation</h1>
                <br />
                <hr />
                <br />
                <p>{member.designation}</p>
              </div>
            </div>
          </div>
        ))} */}
        <div className="flex">
          <div>
            <Image style={mystyle} src={galib} alt="" />
          </div>
          <div className="pl-4">
            <div>
              <h1 className="text-blue-600 font-bold">
                Name: Asadullah Hil Galib
              </h1>
              <h1>Designation</h1>
              <br />
              <hr />
              <p>This is a sample Text. Insert yuor desired text here.</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={prottoy} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name: Prottay Roy Arnob</h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={mahmudul} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">
              Name: Mahmudul Haque Qudrati
            </h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={minhaj} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name: Md Minhaj</h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={alamin} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name: Md Alamin Islam</h1>
            <h1>Designation</h1>
            <br />
            <hr />
            <br />
            <p>This is a sample Text. Insert yuor desired text here.</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Image style={mystyle} src={shobuj} alt="" />
          </div>
          <div className="pl-4">
            <h1 className="text-blue-600 font-bold">Name: Md Minhajul Islam</h1>
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

export default OurTeamCom;
