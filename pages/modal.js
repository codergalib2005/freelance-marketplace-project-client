import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiImageAddLine } from "react-icons/ri";
import { ImCheckboxChecked } from "react-icons/im";
import { notification } from "antd";
import axios from "axios";
const Modal = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [bannerPicture, setBannerPicture] = useState(null);
  const [profilePopup, setProfilePopup] = useState(false);
  const [bannerPopup, setBannerPopup] = useState(false);
  const handlePopup1 = () => {
    setProfilePopup(!profilePopup);
  };
  const handlePopup2 = () => {
    setBannerPopup(!bannerPopup);
  };
  const handleUploadProfile = () => {
    if (profilePicture) {
      const formData = new FormData();
      formData.append("file", profilePicture[0]);
      formData.append("upload_preset", "jsjb2bic");
      formData.append("upload_preset", "jsjb2bic");
      axios
        .post("https://api.cloudinary.com/v1_1/gsbsoft/image/upload", formData)
        .then((res) => {
          axios
            .patch(`${process.env.NEXT_PUBLIC_API_URL}/users/avatar/${id}`, {
              avatar: res.data.secure_url,
            })
            .then((res) => {
              setProfilePopup(false);
              notification.success({
                message: "Success",
                description: "Profile Image Update successfully",
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
            });
        })
        .catch((err) => console.log(err));
    }
  };
  const handleUploadBanner = () => {
    if (bannerPicture) {
      const formData2 = new FormData();
      formData2.append("file", bannerPicture[0]);
      formData2.append("upload_preset", "jsjb2bic");
      formData2.append("upload_preset", "jsjb2bic");
      axios
        .post("https://api.cloudinary.com/v1_1/gsbsoft/image/upload", formData2)
        .then((res) => {
          axios
            .patch(`${process.env.NEXT_PUBLIC_API_URL}/users/banner/${id}`, {
              image: res.data.secure_url,
            })
            .then((res) => {
              setBannerPopup(false);
              notification.success({
                message: "Success",
                description: "Banner Image Update successfully",
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
            });
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="min-h-screen w-screen">
      <div className="flex items-center justify-center gap-3">
        <button onClick={handlePopup1}>1</button>
        <button onClick={handlePopup2}>2</button>
        {/* Start Profile Picture Upload Popup */}
        {profilePopup && (
          <div className="animated-popup fixed transition-all duration-500 bg-[#c6cad24f] h-screen left-0 top-0 w-screen flex items-center justify-center p-4 select-none">
            <div className="w-full max-w-sm min-h-[400px] bg-white rounded-lg flex justify-between flex-col">
              <div className="flex items-center justify-between p-3 border-b-2">
                <strong className="text-gray-800 font-medium text-lg">
                  Upload Profile Image
                </strong>
                <span
                  className="text-red-400 font-medium text-xl cursor-pointer"
                  onClick={handlePopup1}
                >
                  <AiOutlineCloseCircle />
                </span>
              </div>
              <div className="p-3">
                <div className="bg-[#c6cad2] min-h-[260px] rounded-lg flex items-center justify-center">
                  <label htmlFor="profile-picture">
                    {!profilePicture && (
                      <div className="min-w-[150px] h-full max-w-[150px] min-h-[150px] rounded-full border-2 border-white  text-4xl text-white flex items-center justify-center">
                        <RiImageAddLine />
                      </div>
                    )}
                    {profilePicture && (
                      <div className="min-w-[150px] h-full max-w-[150px] min-h-[150px] rounded-full border-2 border-white  text-4xl text-white flex items-center justify-center">
                        <ImCheckboxChecked />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => setProfilePicture(e.target.files)}
                    className="hidden"
                    type="file"
                    id="profile-picture"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-gray-800 font-medium text-lg">
                  {profilePicture ? "Image Selected" : "Select jpg png or jpeg"}
                </span>
                <div>
                  {profilePicture ? (
                    <button
                      onClick={handleUploadProfile}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Upload
                    </button>
                  ) : (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Upload
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* End Profile Picture Upload Popup */}
        {/* Start Banner Picture Upload Popup */}
        {bannerPopup && (
          <div className="animated-popup fixed transition-all duration-500 bg-[#c6cad24f] h-screen left-0 top-0 w-screen flex items-center justify-center p-4 select-none">
            <div className="w-full max-w-sm min-h-[400px] bg-white rounded-lg flex justify-between flex-col">
              <div className="flex items-center justify-between p-3 border-b-2">
                <strong className="text-gray-800 font-medium text-lg">
                  Upload Banner Image
                </strong>
                <span
                  className="text-red-400 font-medium text-xl cursor-pointer"
                  onClick={handlePopup2}
                >
                  <AiOutlineCloseCircle />
                </span>
              </div>
              <div className="p-3">
                <div className="bg-[#c6cad2] min-h-[260px] rounded-lg flex items-center justify-center">
                  <label htmlFor="profile-picture">
                    {!bannerPicture && (
                      <div className="min-w-[150px] h-full max-w-[150px] min-h-[150px] rounded-full border-2 border-white  text-4xl text-white flex items-center justify-center">
                        <RiImageAddLine />
                      </div>
                    )}
                    {bannerPicture && (
                      <div className="min-w-[150px] h-full max-w-[150px] min-h-[150px] rounded-full border-2 border-white  text-4xl text-white flex items-center justify-center">
                        <ImCheckboxChecked />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => setBannerPicture(e.target.files)}
                    className="hidden"
                    type="file"
                    id="profile-picture"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-gray-800 font-medium text-lg">
                  {bannerPicture ? "Image Selected" : "Select jpg png or jpeg"}
                </span>
                <div>
                  {bannerPicture ? (
                    <button
                      onClick={handleUploadBanner}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Upload
                    </button>
                  ) : (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Upload
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* End Banner Picture Upload Popup */}
      </div>
    </div>
  );
};

export default Modal;
