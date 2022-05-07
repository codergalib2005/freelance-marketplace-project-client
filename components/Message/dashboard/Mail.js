import React from "react";
import { RiImageAddFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Input } from "antd";
import { AiOutlineSend } from "react-icons/ai";
import { notification } from "antd";
import axios from "axios";
const { TextArea } = Input;
const Mail = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/mails`, data)
      .then((res) => {
        console.log(res);
        notification.success({
          message: "Success",
          description: "Mail sent successfully",
          placement: "top",
          duration: 2,
          style: {
            width: 300,
            //   marginLeft: "calc(50% - 150px)",
            //   marginTop: "calc(50vh - 100px)",
          },
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full py-3">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h1 className="text-xl font-medium text-gray-800 pb-4">
          Create a notification For A single user
        </h1>
        <div className="flex flex-col md:flex-row items-center py-2 w-full">
          <div className="w-full md:w-3/12">
            <label htmlFor="selectImg" className="">
              <div className="text-8xl md:text-2xl text-gray-800 border-2 border-gray-800 flex items-center justify-center rounded-xl md:rounded-sm mr-2 md:mr-5 cursor-pointer  w-full h-[150px] md:w-12 md:h-12 ">
                <RiImageAddFill />
              </div>
            </label>
            <input
              {...register("image", { required: true })}
              id="selectImg"
              type="file"
              className="hidden"
            />
          </div>
          <div className="w-full md:w-9/12 mt-3 md:mt-0">
            <input
              className="text-gray-800 border-2 border-gray-200 p-2 rounded-md text-lg font-medium w-full"
              type="text"
              {...register("title", { required: true })}
              placeholder="Input your notification title"
            />
          </div>
        </div>
        <div className="w-full py-3">
          <input
            className="text-gray-800 border-2 border-gray-200 p-2 rounded-md text-lg font-medium w-full"
            type="email"
            {...register("email", { required: true })}
            placeholder="Write user email..."
          />
        </div>
        <div className="mt-2 md:mt-2">
          <textarea
            className="text-gray-800 border-2 border-gray-200 p-2 rounded-md text-lg font-medium w-full"
            {...register("massege", { required: true })}
            placeholder="Write your message..."
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-2 bg-[#65ecff] uppercase text-xl text-gray-800 font-medium flex items-center min-w-[130px] justify-around rounded-md mt-3"
        >
          Send <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default Mail;
