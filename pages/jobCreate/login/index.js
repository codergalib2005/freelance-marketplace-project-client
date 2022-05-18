/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import Link from "next/link";
import Head from "next/head";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const text = "Don't have an account?";
  return (
    <div className="min-h-screen w-screen bg-[#ff8e8a5e] flex items-center justify-center px-4 py-8 md:py-0">
      <Head>
        <title>Jobs Login</title>
      </Head>
      <div className="w-full max-w-[992px] mx-auto px-4 min-h-[600px] bg-white shadow-xl rounded-lg flex items-center  py-8 md:py-0">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-[#2a3254]">Login...</h1>
            <div className="w-full mt-2">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div
                  className={`flex gap-3 border-2 rounded-md overflow-hidden items-center px-2 mt-2 ${
                    errors.email ? "border-red-500" : "border-[#33366b]"
                  }`}
                >
                  <span
                    className={`text-xl ${
                      errors.email ? "text-red-500" : "text-[#33366b]"
                    }`}
                  >
                    <AiOutlineMail />
                  </span>
                  <input
                    className="block w-full outline-none text-lg text-[#333669] py-1 px-2"
                    {...register("email", { required: true })}
                    placeholder="Email"
                  />
                </div>
                <div
                  className={`flex gap-3 border-2 rounded-md overflow-hidden items-center px-2 mt-2 ${
                    errors.password ? "border-red-500" : "border-[#33366b]"
                  }`}
                >
                  <span
                    className={`text-xl ${
                      errors.password ? "text-red-500" : "text-[#33366b]"
                    }`}
                  >
                    <MdPassword />
                  </span>
                  <input
                    className="block w-full outline-none text-lg text-[#333669] py-1 px-2"
                    {...register("password", { required: true })}
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="bg-[#fc829b] hover:bg-[#fa61a2] text-white font-bold py-2 px-7 rounded mt-4"
                  >
                    Login
                  </button>
                  <Link href="/jobCreate/register">
                    <a className="text-md text-gray-600 mt-2 hover:text-[#fc829b]">
                      {text}
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div>
            <img
              className="w-full"
              src="/jobs/login/register.jpg"
              alt="Jos page register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
