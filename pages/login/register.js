import { message } from "antd";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, registerUser, signInWithGoogle, loading, error, userStatus } =
    useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // CREATE BLACK OBJECT KAY_
    if (data.password !== data.password2) {
      message.error("Password did't match!");
    } else {
      data.skills = "";
      data.profession = "";
      data.bio = "";
      data.about = "";
      data.education = "";
      data.thumbnail = "";
      data.image = "";
      data.avatar = "";

      registerUser(data);
    }
  };

  return (
    <div className="w-full bg-[#fff]">
      {!loading && (
        <div className="px-4">
          <div
            style={{ minHeight: "90vh" }}
            className="container mx-auto flex items-center justify-center md:mt-5 shadow-lg shadow-[#1a2747] border-4 border-[#2f9ece]"
          >
            <div
              style={{ maxHeight: "600px", height: "100vh" }}
              className="grid grid-cols-1 md:grid-cols-2 w-full"
            >
              <div className="bg-[#2f9ece] h-full flex items-stretch justify-center relative">
                <Link href="/">
                  <a className="w-32 text-center py-2 text-lg absolute left-2 top-2 bg-white font-bold rounded-md text-[#2f9ece]">
                    Go Home
                  </a>
                </Link>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/login/register.png" alt="" />
              </div>
              <div className="bg-white shadow-md h-full">
                <div className="flex justify-items-end content-end justify-end">
                  {/* eslint-disable-next-line @next/next/link-passhref */}
                  <Link href="/login">
                    <button className="w-28 text-lg text-center flex items-center justify-center  py-2 shadow-md">
                      Login
                    </button>
                  </Link>
                  <button className="w-28 text-lg text-center flex items-center justify-center py-2 bg-[#2f9ece] text-gray-50">
                    Register
                  </button>
                </div>
                <div className="p-3">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    Register
                  </h1>
                  {/* ----This is the form---- */}
                  <form
                    className="input_form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {/* <Tooltip title="Select a image">
                      <input className='w-32 h-16 cursor-pointer rounded-full' type="file" {...register("image", { required: true })} accept=".jpg, .jpeg, .png" placeholder='Select Your profile pic' />
                    </Tooltip> */}
                    {/* {errors.image && <span className='text-red-600 font-bold'>Profile Image is required</span>} */}
                    {/* <input className='style' {...register("avatar", { required: true })} placeholder="image url" /> */}
                    <input
                      className="style"
                      {...register("name", { required: true })}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <span className="text-red-600 font-bold">
                        Name is required
                      </span>
                    )}
                    <div className="div grid grid-cols-2 gap-2">
                      <select
                        className="w-full border-2 mb-3 text-lg font-bold h-10 rounded-sm"
                        {...register("gender", { required: true })}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <select
                        className="w-full border-2 mb-3 text-lg font-bold h-10 rounded-sm"
                        {...register("status", { required: true })}
                      >
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                      </select>
                    </div>
                    <input
                      className="style"
                      {...register("email", { required: true })}
                      placeholder="E-mail"
                    />
                    {errors.email && (
                      <span className="text-red-600 font-bold">
                        E-mail is required
                      </span>
                    )}
                    <input
                      className="style"
                      {...register("password", { required: true })}
                      placeholder="Password"
                    />
                    {errors.password && (
                      <span className="text-red-600 font-bold">
                        Password is required
                      </span>
                    )}
                    <input
                      className="style"
                      {...register("password2", { required: true })}
                      placeholder="Confirm Password"
                    />
                    {errors.password2 && (
                      <span className="text-red-600 font-bold">
                        Confirm Password is required
                      </span>
                    )}
                    <input className="style" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="min-h-screen flex items-center justify-center">
          <span className="main-loader"></span>
        </div>
      )}
    </div>
  );
};

export default Register;
