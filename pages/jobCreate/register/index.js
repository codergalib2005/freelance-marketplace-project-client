/* eslint-disable @next/next/no-img-element */
import { notification } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import Link from "next/link";
import Head from "next/head";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      notification.error({
        message: "Error",
        description: "Password and Confirm Password must be the same",
      });
      return;
    } else {
      notification.success({
        message: "Success",
        description: "Registration Successful",
      });
    }
  };
  const text = "Already have an account?";
  return (
    <div className="min-h-screen w-screen bg-[#ff8e8a5e] flex items-center justify-center px-4  py-8 md:py-0">
        <Head>
            <title>Jobs Register</title>
        </Head>
      <div className="w-full max-w-[992px] mx-auto px-4 min-h-[600px] bg-white shadow-xl rounded-lg flex items-center  py-8 md:py-0">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-[#2a3254]">Register...</h1>
            <div className="w-full mt-2">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div
                  className={`flex gap-3 border-2 rounded-md overflow-hidden items-center px-2 mt-2 ${
                    errors.firstname ? "border-red-500" : "border-[#33366b]"
                  }`}
                >
                  <span
                    className={`text-xl ${
                      errors.firstname ? "text-red-500" : "text-[#33366b]"
                    }`}
                  >
                    <MdDriveFileRenameOutline />
                  </span>
                  <input
                    className="block w-full outline-none text-lg text-[#333669] py-1 px-2"
                    {...register("firstname", { required: true })}
                    placeholder="First Name"
                  />
                </div>

                <div
                  className={`flex gap-3 border-2 rounded-md overflow-hidden items-center px-2 mt-2 ${
                    errors.lastname ? "border-red-500" : "border-[#33366b]"
                  }`}
                >
                  <span
                    className={`text-xl ${
                      errors.lastname ? "text-red-500" : "text-[#33366b]"
                    }`}
                  >
                    <MdManageAccounts />
                  </span>
                  <input
                    className="block w-full outline-none text-lg text-[#333669] py-1 px-2"
                    {...register("lastname", { required: true })}
                    placeholder="Last Name"
                  />
                </div>

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

                <select
                  className="py-1 px-2 border-[#333669] my-2"
                  {...register("country", { required: true })}
                >
                  <option value="">Select Country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Åland Islands">Åland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran, Islamic Republic of">
                    Iran, Islamic Republic of
                  </option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Lebanon">Lebanon</option>
                </select>

                <div
                  className={`flex gap-3 border-2 rounded-md overflow-hidden items-center px-2 mt-2 ${
                    errors.phone ? "border-red-500" : "border-[#33366b]"
                  }`}
                >
                  <span
                    className={`text-xl ${
                      errors.phone ? "text-red-500" : "text-[#33366b]"
                    }`}
                  >
                    <BsFillTelephoneFill />
                  </span>
                  <input
                    className="block w-full outline-none text-lg text-[#333669] py-1 px-2"
                    {...register("phone", { required: true })}
                    placeholder="Phone"
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

                <div
                  className={`flex gap-3 border-2 rounded-md overflow-hidden items-center px-2 mt-2 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-[#33366b]"
                  }`}
                >
                  <span
                    className={`text-xl ${
                      errors.confirmPassword ? "text-red-500" : "text-[#33366b]"
                    }`}
                  >
                    <MdPassword />
                  </span>
                  <input
                    className="block w-full outline-none text-lg text-[#333669] py-1 px-2"
                    {...register("confirmPassword", { required: true })}
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="bg-[#fc829b] hover:bg-[#fa61a2] text-white font-bold py-2 px-7 rounded mt-4"
                  >
                    Register
                  </button>
                  <Link href="/jobCreate/login">
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

export default Register;
