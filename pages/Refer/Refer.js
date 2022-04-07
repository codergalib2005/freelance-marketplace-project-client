import React from 'react';
import useAuth from '../../hooks/useAuth';

const Refer = () => {
    const {user}=useAuth()

    console.log(user);
    return (
        <div>
         <div className="h-[700px] " style={{backgroundImage: "url(refer/banner.jpg)", backgroundPosition: "center"}}>
         <div className="container mx-auto">
         <div className="flex justify-center  pt-12 ">
           {/* eslint-disable-next-line @next/next/no-img-element */}
         <img className="w-36 bg-gray-200 rounded-full h-full" src="refer/user.png"  alt="" />
         </div>
         <div className="text-center my-6">
             <h4 className="text-4xl text-white font-semibold">Invite Friends & <br/>
                You Both Get Up To $100</h4>
                <h4 className="text-lg text-white font-semibold my-4">Introduce your friends to the easiest way to get things done

            </h4>
         </div>
        </div>
         </div>
         <div className="container mx-auto">
         <div className="-my-20 bg-emerald-900 pt-32">
             <div className=" md:flex lg:flex  justify-center gap-8 md:items-center lg:items-center">
                <button className="bg-orange-700 px-6 py-3 w-full md:w-56 lg:w-56 text-white font-semibold ">Invite Gmail Contact</button>
                <h5 className="text-xl text-center">Or</h5>
               <div className="flex justify-center">
               <input className="appearance-none py-3  block w-full md:w-80 lg:w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded  px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="email" placeholder="Add Email"/>
               </div>
                <button className="text-base text-white bg-green-600 font-semibold py-3 px-4 w-full md:w-40 lg:w-40">Send</button>
             </div>
         </div>
         </div>
        </div>
    );
};

export default Refer;