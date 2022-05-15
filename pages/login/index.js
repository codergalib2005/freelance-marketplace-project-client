/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const { user, logInUser, loading, error, userStatus } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    logInUser(data.email, data.password)
  };

  return (
    <div className='w-full bg-[#fff] overflow-visible md:overflow-hidden px-4'>
      {!loading && (
        <div>
          <div style={{ minHeight: '90vh' }} className="container mx-auto flex items-center justify-center border-4 border-[#2f9ece]  md:mt-5">
            <div style={{ maxHeight: '600px', height: '100vh' }} className="grid grid-cols-1 md:grid-cols-2 w-full">
              <div className='bg-[#2f9ece] h-full flex items-stretch justify-center relative'>
                <Link href="/">
                  <a className='w-32 text-center py-2 text-lg absolute left-2 top-2 bg-white font-bold rounded-md text-[#2f9ece]'>Go Home</a>
                </Link>
                <img src="/login/register.png" alt="" />
              </div>
              <div className='bg-white shadow-md h-full'>
                <div className='flex justify-items-end content-end justify-end'>
                  <button className='w-28 text-lg text-center flex items-center justify-center py-2 bg-[#2f9ece] text-gray-50'>Login</button>
                  <Link href="/login/register">
                    <button className=' w-28 text-lg text-center flex items-center justify-center  py-2 shadow-md'>Register</button>
                  </Link>
                </div>
                <div className='p-3 flex items-stretch justify-center flex-col h-full'>
                  <h1 className='text-4xl font-bold text-gray-900 mb-3'>LogIn</h1>
                  {/* ----This is the form---- */}
                  <form className='input_form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='style' {...register("email", { required: true })} placeholder="E-mail" />
                    {errors.email && <span className='text-red-600 font-bold'>E-mail is required</span>}
                    <input className='style' {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span className='text-red-600 font-bold'>Password is required</span>}
                    <input className='style' type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {
        loading && (<div className='min-h-screen flex items-center justify-center'>
          <span className="main-loader"></span>
        </div>)
      }
    </div>
  );
};

export default Login;