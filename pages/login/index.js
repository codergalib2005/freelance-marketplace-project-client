import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, logInUser, signInWithGoogle, loading, error, userStatus } = useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    logInUser(data.email, data.password)
  };

  return (
    <div className='w-full bg-[#1a2747] overflow-visible md:overflow-hidden'>
      {!loading && (
        <div>
          <div className="container mx-auto px-2 flex items-center justify-center  min-h-screen">
            <div style={{ maxHeight: '600px', height: '100vh' }} className="grid grid-cols-1 md:grid-cols-2 w-full">
              <div className='bg-[#2f9ece] h-full flex items-stretch justify-center relative'>
                <Link href="/">
                  <a className='w-32 text-center py-2 text-lg absolute left-2 top-2 bg-white font-bold rounded-md text-[#2f9ece]'>Go Home</a>
                </Link>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/login/register.png" alt="" />
              </div>
              <div className='bg-white shadow-md h-full'>
                <div className='flex justify-items-end content-end justify-end'>
                  <button className='w-28 text-lg text-center flex items-center justify-center py-2 bg-[#2f9ece] text-gray-50'>Login</button>
                  {/* eslint-disable-next-line @next/next/link-passhref */}
                  <Link href="/login/register">
                    <button className=' w-28 text-lg text-center flex items-center justify-center  py-2 shadow-md'>Register</button>
                  </Link>
                </div>
                <div className='p-3 flex items-stretch justify-center flex-col h-full'>
                  <h1 className='text-4xl font-bold text-gray-900 mb-3'>Register</h1>
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
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>)
      }
    </div>
  );
};

export default Login;