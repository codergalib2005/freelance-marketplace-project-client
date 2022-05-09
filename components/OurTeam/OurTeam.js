import React from "react";


const OurTeamCom = () => {
  const team = [
    {
      id:1,
      name: "Jhankar Mahbub",
      img: "https://i.ibb.co/ZY5YB0V/jhankar.png",
      designation: "CEO at Programming Hero",
    },
    {
      id:2,
      name: "Ahmad Tarique Hasan",
      img: "https://i.ibb.co/6FnMtrS/ahmmed-tarek.png",
      designation: "Web Developer at Programming Hero",
    },
    {
      id:3,
      name: "Najmus Sakib",
      img: "https://i.ibb.co/cTSc8mk/najmus-sakib.png",
      designation: "Web Developer at Programming Hero",
    },
    
    {
      id:4,
      name: "Asadullah Hil Galib",
      img: "https://i.ibb.co/YcQTZpY/galib.png",
      designation: "Web Developer & Team Leader",
    },
    {
      id:5,
      name: "Prottay Roy Arnob",
      img: "https://i.ibb.co/tqPcF3b/prottoy.png",
      designation: "Web Developer",
    },
    {
      id:6,
      name: "Mahmudul Haque Qudrati",
      img: "https://i.ibb.co/JxmQqSm/mahmudul.png",
      designation: "Web Developer",
    },
    {
      id: 7,
      name: "Md Minhaz",
      img: "https://i.ibb.co/bdDzwGN/minhaz.png",
      designation: "Web Developer",
    },
    {
      id:8,
      name: "Md Alamin Islam",
      img: "https://i.ibb.co/x3dZBfk/almin.png",
      designation: "Web Developer",
    },
    {
      id:9,
      name: "Md Minhajul Islam",
      img: "https://i.ibb.co/pvTqFt4/sobuj.png",
      designation: "Web Developer",
    },
  ];
  
  return (
    <>
      <div className="container mx-auto px-10 lg:px-0 my-10">
      <div className="  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
       
       {
         team.map(member=>
           <div key={member.id} className="border-0 border-gray-500 h-[27rem] translate transition-all duration-300 hover:bg-teal-200  bg-white " >
             <div className="bg-slate-900 px-10 w-full h-40 rounded-bl-full rounded-br-full relative " ></div>
         <div className="flex justify-center ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
           <img className="w-48 object-top h-40 absolute -mt-32 z-10 bg-indigo-500 px-6 py-4 rounded-tr-full  "   src={member.img} alt="" />
         </div>
         <div className="z-20 my-16">
            <h4 className="text-center text-2xl font-medium">{member.name}</h4>
            <h4 className="text-center text-xl font-medium">{member.designation}</h4>
         </div>
         <div className="mx-4"> 
           <button className="text-base font-bold px-6 w-full py-2 text-white bg-indigo-500 border-0 rounded-md active:bg-indigo-700 my-6" >Details</button>
         </div>
       </div>)
       }
       
        
       
      
       
     </div>
      </div>
    </>
  );
};

export default OurTeamCom;
