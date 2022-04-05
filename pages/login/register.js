// import React, { useState } from "react";
// import Link from "next/link";
// import useAuth from "../../hooks/useAuth";
// import { Alert } from "antd";
// const register = () => {
//   const [loginData, setLoginData] = useState({});

//   const { user, registerUser, signInWithGoogle, loading, error } = useAuth();

//   const handleSubmit = e => {
//     if (loginData.password1 != loginData.password2) {
//       alert('your pass not match')
//       return;
//     }
//     registerUser(loginData.email, loginData.password1, loginData.name, loginData.password2);
//     e.preventDefault();

//   }

//   const handleOnChange = e => {
//     const field = e.target.name;
//     const value = e.target.value;
//     const newLoginData = { ...loginData };
//     newLoginData[field] = value;
//     console.log(newLoginData)
//     setLoginData(newLoginData)

//   }
//   return (
//     <section className="absolute w-full top-0">
//       <div className="absolute top-0 w-full h-full"></div>
//       <div className="container mx-auto px-4 h-full">
//         <div className="flex content-center items-center justify-center h-full">
//           <div className="w-full lg:w-5/12 px-4 pt-32">
//             <div className="relative bg-gradient-to-r from-sky-300 to-lime-300 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
//               <div className="rounded-t mb-0 px-6 py-6">
//                 <div className="text-center mb-3">
//                   <h6 className="text-gray-600 text-sm font-bold">Sign up with</h6>
//                 </div>
//                 <div className="btn-wrapper text-center">
//                   {/*  eslint-disable-next-line @next/next/no-img-element */}
//                   <img className="block mx-auto" src="https://i.ibb.co/Ssxh3cj/logo-white.png" alt="" />
//                 </div>

//                 <div className="btn-wrapper text-center mt-2">
//                   {/* sign in with google and github */}
//                   <button
//                     className="bg-transparent active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 ring-sky-100 ring-1  inline-flex items-center hover:scale-75  duration-500"
//                     type="button"
//                   >
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img className="w-8" src="https://i.ibb.co/zF4kkP8/download-1-removebg-preview.png" alt="" />
//                   </button>
//                   <button
//                     className="bg-transparent active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ring-1 ring-sky-100 hover:scale-75  duration-500 inline-flex items-center "
//                     type="button"
//                     onClick={signInWithGoogle}
//                   >
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img className="w-8" src="https://i.ibb.co/cCLf41q/download-removebg-preview.png" alt="" />
//                   </button>
//                 </div>

//                 <hr className="mt-6 border-b-1 border-gray-400" />
//               </div>
//               <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//                 {!loading && <form action="#" onSubmit={handleSubmit}>
//                   <div className="relative w-full mb-3">
//                     <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                       Name
//                     </label>
//                     <input
//                       name="name"
//                       type="text"
//                       onChange={handleOnChange}
//                       className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100 rounded-lg  border-gray-300  focus:outline-none focus:border-green-200"
//                       placeholder="Name"
//                     />
//                   </div>
//                   <div className="relative w-full mb-3">
//                     <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                       Email
//                     </label>
//                     <input
//                       name="email"
//                       type="email"
//                       onChange={handleOnChange}
//                       className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100 rounded-lg  border-gray-300  focus:outline-none focus:border-green-200"
//                       placeholder="Email"
//                     />
//                   </div>
//                   <div className="relative w-full mb-3">
//                     <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                       Password
//                     </label>
//                     <input
//                       name="password1"
//                       type="password"
//                       onChange={handleOnChange}
//                       className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100  border-gray-300  focus:outline-none focus:border-green-200 rounded-lg"
//                       placeholder="Password"
//                     />
//                   </div>
//                   <div className="relative w-full mb-3">
//                     <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
//                       Confirm Password
//                     </label>
//                     <input
//                       name="password2"
//                       type="password"
//                       onChange={handleOnChange}
//                       className="px-3 py-3 w-full text-base focus:border shadow-inner shadow-gray-100  border-gray-300  focus:outline-none focus:border-green-200 rounded-lg"
//                       placeholder="Re-type password"
//                     />
//                   </div>
//                   <div>
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5" />
//                       <span className="ml-2 text-sm font-semibold text-gray-700">Remember me</span>
//                     </label>
//                   </div>
//                   <div className="text-center mt-6">
//                     <button
//                       className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
//                       type="submit"
//                     >
//                       Sign Up
//                     </button>
//                   </div>
//                   <div className="flex justify-between items-center flex-wrap mt-6">
//                     <div>
//                       <Link href="/">
//                         <a className="text-blue-500">
//                           <small>Forgot password?</small>
//                         </a>
//                       </Link>
//                     </div>
//                     <div>
//                       <Link href="/login">
//                         <a className="text-blue-500">
//                           <small>Already have an account?</small>
//                         </a>
//                       </Link>
//                     </div>
//                   </div>
//                 </form>}
//                 {loading && <button type="button" class="bg-indigo-500 ..." disabled>
//                   <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
//                   </svg>
//                   Processing...
//                 </button>}

//                 {user?.email && <Alert
//                   message="Register Successfully"
//                   type="success"
//                   showIcon
//                 />}

//                 {error && <Alert
//                   message={error}
//                   type="error"
//                   showIcon
//                 />}

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default register;
import { Tooltip } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    // CREATE BLACK OBJECT KAY_
    data.skills = "",
      data.profession = "",
      data.bio = "",
      data.about = "",
      data.education = "",
      data.thumbnail = ""
    // ___Image upload in imgBB ____
    const rf = new FileReader();
    rf.readAsDataURL(data.image[0])
    rf.onloadend = function (event) {
      const body = new FormData();
      body.append("image", event.target.result.split(",").pop()); //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
      body.append("name", data.image[0].name);
      console.log(body);
      fetch("https://api.imgbb.com/1/upload?expiration=600&key=aace97b9a0d4e6d8a83442b26ddb021e", {
        method: "POST",
        body: body
      })
        .then(res => res.json())
        .then(result => {
          data.avatar = result.data.url;
          data.image = "";
          console.log(data);
          // USER SEND TO DATABASE__
          // axios.post("http://localhost:8000/auth/users/", data)
          //   .then(res => {
          //     console.log(res)
          //   })
          //   .catch(err => console.log(err))

        })
    }
  };

  return (
    <div className='w-full bg-[#1a2747]'>
      <div>
        <div className="container mx-auto px-2 flex items-center justify-center  min-h-screen">
          <div style={{ maxHeight: '600px', height: '100vh' }} className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className='bg-[#2f9ece] h-full flex items-stretch justify-center'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/login/register.png" alt="" />
            </div>
            <div className='bg-white shadow-md h-full'>
              <div className='flex justify-items-end content-end justify-end'>
                {/* eslint-disable-next-line @next/next/link-passhref */}
                <Link href="/login">
                  <button className='w-28 text-lg text-center flex items-center justify-center  py-2 shadow-md'>Login</button>
                </Link>
                <button className='w-28 text-lg text-center flex items-center justify-center py-2 bg-[#2f9ece] text-gray-50'>Register</button>
              </div>
              <div className='p-3'>
                <h1 className='text-4xl font-bold text-gray-900 mb-3'>Register</h1>
                {/* ----This is the form---- */}
                <form className='input_form' onSubmit={handleSubmit(onSubmit)}>
                  <Tooltip title="Select a image">
                    <input className='w-32 h-16 cursor-pointer rounded-full' type="file" {...register("image", { required: true })} accept=".jpg, .jpeg, .png" placeholder='Select Your profile pic' />
                  </Tooltip>
                  {errors.image && <span className='text-red-600 font-bold'>Profile Image is required</span>}
                  <input className='style' {...register("name", { required: true })} placeholder="Name" />
                  {errors.name && <span className='text-red-600 font-bold'>Name is required</span>}
                  <div className="div grid grid-cols-2">
                    <select className='w-full border-2 mb-3 text-lg font-bold h-10 rounded-sm' {...register("gender", { required: true })}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <select className='w-full border-2 mb-3 text-lg font-bold h-10 rounded-sm' {...register("status", { required: true })}>
                      <option value="male">Seller</option>
                      <option value="female">Buyer</option>
                    </select>
                  </div>
                  <input className='style' {...register("email", { required: true })} placeholder="E-mail" />
                  {errors.email && <span className='text-red-600 font-bold'>E-mail is required</span>}
                  <input className='style' {...register("password1", { required: true })} placeholder="Password" />
                  {errors.password1 && <span className='text-red-600 font-bold'>Password is required</span>}
                  <input className='style' {...register("password2", { required: true })} placeholder="Confirm Password" />
                  {errors.password2 && <span className='text-red-600 font-bold'>Confirm Password is required</span>}
                  <input className='style' type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;