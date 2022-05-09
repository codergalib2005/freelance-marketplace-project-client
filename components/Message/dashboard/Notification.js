import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Input } from "antd";
import { AiOutlineSend } from "react-icons/ai";
import { notification } from "antd";
const { TextArea } = Input;
import axios from "axios";
const Notification = () => {
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (image === null) {
      notification.error({
        message: "Error",
        description: "Please select an image",
        placement: "top",
        duration: 2,
        style: {
          width: 300,
          //   marginLeft: "calc(50% - 150px)",
          //   marginTop: "calc(50vh - 100px)",
          borderBottom: "6px solid #e83a3b",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
        },
      });
      return;
    } else {
      const formData = new FormData();
      formData.append("file", image[0]);
      formData.append("upload_preset", "jsjb2bic");
      formData.append("upload_preset", "jsjb2bic");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const configJson = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(
          "https://api.cloudinary.com/v1_1/gsbsoft/image/upload",
          formData,
          config
        )
        .then((res) => {
          console.log(res);
          data.image = res.data.secure_url;
          axios
            .post(
              `${process.env.NEXT_PUBLIC_API_URL}/notifictions`,
              data,
              configJson
            )
            .then((res) => {
              notification.success({
                message: "Success",
                description: "Notification sent successfully",
                placement: "top",
                duration: 2,
                style: {
                  width: 300,
                  //   marginLeft: "calc(50% - 150px)",
                  //   marginTop: "calc(50vh - 100px)",
                  borderBottom: "6px solid #3a3",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
                },
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="w-full py-3">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h1 className="text-xl font-medium text-gray-800 pb-4">
          Create a notification For All Users
        </h1>
        <div className="flex flex-col md:flex-row items-center py-2 w-full">
          <div className="w-full md:w-3/12">
            <label htmlFor="selectImg" className="">
              <div className="text-8xl md:text-2xl text-gray-800 border-2 border-gray-800 flex items-center justify-center rounded-xl md:rounded-sm mr-2 md:mr-5 cursor-pointer  w-full h-[150px] md:w-12 md:h-12 ">
                <RiImageAddFill />
              </div>
            </label>
            <input
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => setImage(e.target.files)}
              name="image"
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
        <div className="mt-2 md:mt-6">
          <textarea
            className="text-gray-800 border-2 border-gray-200 p-2 rounded-md text-lg font-medium w-full min-"
            {...register("massege", { required: true })}
            placeholder="Write your message..."
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <input
          type="submit"
          className="py-2 px-2 bg-[#65ecff] uppercase text-xl text-gray-800 font-medium flex items-center min-w-[130px] justify-around rounded-md mt-3"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Notification;
