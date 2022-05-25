/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import { notification } from "antd";
import { withPrivate } from "../../hooks/PrivateRoute";
import useAuth from "../../hooks/useAuth";
import Head from "next/head";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
const showPageMood = {
  showPage: "MAIN_PAGE",
};
const controlReducer = (state, action) => {
  switch (action.type) {
    case "MAIN_PAGE":
      return { showPage: (state.showPage = "MAIN_PAGE") };
    case "PRICING_PAGE":
      return { showPage: (state.showPage = "PRICING_PAGE") };
    case "GALLERY_PAGE":
      return { showPage: (state.showPage = "GALLERY_PAGE") };
    default:
      return state;
  }
};
const GigCreation = () => {
  const [state, dispatch] = useReducer(controlReducer, showPageMood);
  const [thisUser, setThisUser] = useState({});
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  // IMAGE UPLOAD IN CLOUDINARY__
  const handleImageUpload = () => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image[0]);
      formData.append("upload_preset", "jsjb2bic");
      formData.append("upload_preset", "jsjb2bic");
      axios
        .post("https://api.cloudinary.com/v1_1/gsbsoft/image/upload", formData)
        .then((response) => {
          setImage(null);
          setImages([...images, response.data.secure_url]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  console.log(images);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, userStatus, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setThisUser(data?.result[0]))
      .catch((err) => console.log(err));
  }, [user?.email]);
  const onSubmit = (data) => {
    data.email = user.email;
    data.name = user.displayName;
    console.log(data);
    // =====================================================
    if (data?.gig_title && data.description) {
      if (!(images.length >= 4)) {
        notification.warning({
          message: "Warning",
          description: "Please upload at least 4 images",
        });
        return;
      } else {
        data.gallery = images;
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/gigs`, data)
          .then((res) => {
            notification.success({
              message: "Success",
              description: "Gig Created Successfully!",
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
            router.replace("/profile");
          })
          .catch((err) => console.log(err));
      }
    }
  };
  return (
    <div>
      <Head>
        <title>Gig Add</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="Gig Add, freelance-marketplace, marketplace, job, job search, job create, marketplace, freelance, freelancing, marketing, website, nextjs, project, freelancer, developer, candidate"
        />
      </Head>
      <Header bg="bg-gray-900" />
      {loading ? (
        <div
          style={{ minHeight: "90vh" }}
          className="flex items-center justify-center"
        >
          <span className="main-loader"></span>
        </div>
      ) : (
        <div className="mt-8 feature-font text-center">
          <div className="flex gap-4 md:gap-8 py-2 text-md mt-8  pl-6 justify-center items-center">
            <div className="flex gap-2 items-center justify-center flex-col">
              <div
                className={` h-16 w-16 border-4 text-xl  rounded-full flex justify-center items-center 
                ${
                  state.showPage === "MAIN_PAGE"
                    ? " text-[#ad277c] border-[#ad277c]"
                    : "border-[#ad277c56] text-[#ad277c56]"
                }`}
              >
                <p className="text-xl">1</p>
              </div>
              <button
                className={`text-xl uppercase mt-2 block ${
                  state.showPage === "MAIN_PAGE"
                    ? "text-[#ad277c]"
                    : "text-[#ad277c56]"
                }`}
              >
                Gig Info
              </button>
            </div>
            <div className="flex gap-2 items-center justify-center flex-col">
              <div
                className={` h-16 w-16 border-4 text-xl  rounded-full  flex justify-center items-center
              ${
                state.showPage === "PRICING_PAGE"
                  ? " text-[#ad277c] border-[#ad277c]"
                  : "border-[#ad277c56] text-[#ad277c56]"
              }`}
              >
                <p className="text-xs">2</p>
              </div>
              <button
                className={`text-xl uppercase mt-2 block ${
                  state.showPage === "PRICING_PAGE"
                    ? "text-[#ad277c]"
                    : "text-[#ad277c56]"
                }`}
              >
                Gig Price
              </button>
            </div>
            <div className="flex gap-2 items-center justify-center flex-col">
              <div
                className={` h-16 w-16 border-4 text-xl  rounded-full  flex justify-center items-center 
              ${
                state.showPage === "GALLERY_PAGE"
                  ? " text-[#ad277c] border-[#ad277c]"
                  : "border-[#ad277c56] text-[#ad277c56]"
              }`}
              >
                <p className="text-xl">3</p>
              </div>
              <button
                className={`text-xl uppercase mt-2 block ${
                  state.showPage === "GALLERY_PAGE"
                    ? "text-[#ad277c]"
                    : "text-[#ad277c56]"
                }`}
              >
                Gig Imgages
              </button>
            </div>
          </div>
          {/*============my Gig info section==============*/}
          <div className="container mx-auto mt-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                {/*======Overview======*/}
                {state.showPage === "MAIN_PAGE" && (
                  <div
                    style={{
                      boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)",
                    }}
                    className=" p-6 rounded-lg lato"
                  >
                    <div className="mb-6">
                      <h2 className="text-center text-2xl font-semibold text-[#2A3254]">
                        Create Your Gig Today!
                      </h2>
                      <p className="text-center mt-4 text-xs text-red-500">
                        Fill all of the necessary forms to upload your gigs!
                        Remember, Fill every input.{" "}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center text-left">
                        <span className="w-3/12 md:w-3/12  text-md md:text-lg font-bold text-[#222843]">
                          Gig Title
                        </span>
                        <div className="w-9/12 md:w-9/12 ">
                          <input
                            placeholder="Write your gig title..!"
                            className=" border w-full  p-2 border-gray-300 rounded-md focus:outline focus:outline-[#2A3254]"
                            {...register("gig_title", {
                              required: true,
                              maxLength: 100,
                            })}
                          />
                          {errors.gig_title && (
                            <span className="text-red-700 block">
                              Service title is required max length 100 letter!
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="flex py-6 items-center text-left">
                          <div className="w-3/12 md:w-3/12  text-md md:text-lg font-bold text-[#2A3254]">
                            Category
                          </div>
                          <div className="w-9/12 md:w-9/12 ">
                            <select
                              className="border border-gray-300 h-12 text-md w-full rounded-md focus:outline focus:outline-[#2A3254]"
                              {...register("category", { required: true })}
                            >
                              <option value="Digital Marketing">
                                Digital Marketing
                              </option>
                              <option value="Programming and teach">
                                Programming and teach
                              </option>
                              <option value="Music and Audio">
                                Music and Audio
                              </option>
                              <option value="Animation and Video">
                                Animation and Video
                              </option>
                              <option value="Web Programming">
                                Web Programming
                              </option>
                              <option value="CMS Customization">
                                CMS Customization
                              </option>
                              <option value="Graphics Design">
                                Graphics Design
                              </option>
                            </select>
                          </div>
                        </div>
                        {/*  */}
                        <div className="flex text-left">
                          <span className="w-3/12 md:w-3/12 text-md md:text-lg font-bold text-[#2A3254]">
                            Service Descriptions
                          </span>
                          <div className="w-9/12 md:w-9/12  ">
                            <textarea
                              style={{
                                lineHeight: "2rem",
                                resize: "none",
                                height: "8rem",
                              }}
                              placeholder="Write your gig descriptions here..!"
                              className="block p-2 border w-full   border-gray-300 rounded-md focus:outline focus:outline-[#2A3254]"
                              {...register("description", {
                                required: true,
                                maxLength: 100,
                              })}
                            />
                            {errors.description && (
                              <span className="text-red-700 block">
                                Service main description is required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/*======Pricing======*/}
                {state.showPage === "PRICING_PAGE" && (
                  <div
                    style={{
                      boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)",
                    }}
                    className=" p-6 rounded-lg lato"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="">
                        <div className="text-lg py-3 bg-gray-200">Basic</div>
                        <div>
                          <textarea
                            style={{
                              resize: "none",
                            }}
                            rows="4"
                            className="px-2 border border-gray-300 w-full my-2 outline-none py-2"
                            {...register("first_title", { required: true })}
                            placeholder="Service Title"
                          ></textarea>
                          {errors.first_title && (
                            <span className="text-red-700 block">
                              Service Title is required
                            </span>
                          )}
                          <textarea
                            style={{
                              resize: "none",
                            }}
                            rows="5"
                            className="px-2 border border-gray-300 w-full my-2 outline-none py-2"
                            {...register("first_desc", { required: true })}
                            placeholder="Service description"
                          ></textarea>
                          {errors.first_desc && (
                            <span className="text-red-700 block">
                              Service description is required
                            </span>
                          )}
                          <select
                            className="border border-gray-300 h-12 text-md w-full rounded-md  outline-none"
                            {...register("first_day", { required: true })}
                          >
                            <option value="1">1 Day</option>
                            <option value="2">2 Days</option>
                            <option value="2">3 Days</option>
                          </select>
                          {errors.first_day && (
                            <span className="text-red-700 block">
                              Basic Price Must need to select
                            </span>
                          )}
                          <input
                            type="number"
                            placeholder="Service Price $10 to $40"
                            className="px-2 w-full  font-medium py-2 bg-gray-100 my-2 outline-none"
                            {...register("first_price", {
                              min: 10,
                              max: 40,
                              required: true,
                            })}
                          />
                          {errors.first_price && (
                            <span className="text-red-700 block">
                              Basic Price $10 to $40
                            </span>
                          )}
                        </div>
                        <div></div>
                      </div>
                      <div className="mt-8 lg:mt-0">
                        <div className="text-lg py-3 bg-gray-200">Advance</div>
                        <div>
                          <textarea
                            style={{
                              resize: "none",
                            }}
                            rows="4"
                            className="px-2 border border-gray-300 w-full my-2 outline-none py-2"
                            {...register("second_title", { required: true })}
                            placeholder="Service Title"
                          ></textarea>
                          {errors.second_title && (
                            <span className="text-red-700 block">
                              Service Title is required
                            </span>
                          )}
                          <textarea
                            style={{
                              resize: "none",
                            }}
                            rows="5"
                            className="px-2 border border-gray-300 w-full my-2 outline-none py-2"
                            {...register("second_desc", { required: true })}
                            placeholder="Service description"
                          ></textarea>
                          {errors.second_desc && (
                            <span className="text-red-700 block">
                              Service description is required
                            </span>
                          )}
                          <select
                            className="border border-gray-300 h-12  w-full rounded-md outline-none"
                            {...register("second_day", { required: true })}
                          >
                            <option value="4">4 Day</option>
                            <option value="5">5 Days</option>
                            <option value="6">6 Days</option>
                          </select>
                          {errors.second_day && (
                            <span className="text-red-700 block">
                              Advance Price Must need to select
                            </span>
                          )}
                          <input
                            type="number"
                            placeholder="Service Price $40 to $100"
                            className="px-2 w-full font-medium py-2 bg-gray-100 outline-none my-2"
                            {...register("second_price", {
                              min: 40,
                              max: 100,
                              required: true,
                            })}
                          />
                          {errors.second_price && (
                            <span className="text-red-700 block">
                              Advance Price $40 to $100
                            </span>
                          )}
                        </div>
                        <div></div>
                      </div>
                      <div className="mt-8 lg:mt-0">
                        <div className="text-lg py-3 bg-gray-200">
                          Enterprise
                        </div>
                        <div>
                          <textarea
                            style={{
                              resize: "none",
                            }}
                            rows="4"
                            className="px-2 border border-gray-300 w-full my-2 outline-none py-2"
                            {...register("third_title", { required: true })}
                            placeholder="Service Title"
                          ></textarea>
                          {errors.third_title && (
                            <span className="text-red-700 block">
                              Service Title is required
                            </span>
                          )}
                          <textarea
                            style={{
                              resize: "none",
                            }}
                            rows="5"
                            className="px-2 border border-gray-300 w-full my-2 outline-none py-2"
                            {...register("third_desc", { required: true })}
                            placeholder="Service description"
                          ></textarea>
                          {errors.third_desc && (
                            <span className="text-red-700 block">
                              Service description is required
                            </span>
                          )}
                          <select
                            className="border border-gray-300 h-12 text-lg w-full rounded-md outline-none"
                            {...register("third_day", { required: true })}
                          >
                            <option value="7">7 Day</option>
                            <option value="8">8 Days</option>
                            <option value="9">9 Days</option>
                          </select>
                          {errors.third_day && (
                            <span className="text-red-700 block">
                              Enterprise Price Must need to select
                            </span>
                          )}
                          <input
                            type="number"
                            placeholder="Service Price $100 to $200"
                            className="px-2 w-full  font-medium py-2 bg-gray-100 my-2"
                            {...register("third_price", {
                              min: 100,
                              max: 200,
                              required: true,
                            })}
                          />
                          {errors.third_price && (
                            <span className="text-red-700 block">
                              Enterprise Price $100 to $200
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/*======Gallery======*/}
                {state.showPage === "GALLERY_PAGE" && (
                  <div
                    style={{
                      boxShadow: "-2px 3px 15px rgba(0,0,0,0.1)",
                      minHeight: "100px",
                    }}
                    className="p-6 py-8 lg:py-16 rounded-lg "
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div
                        className={`grid gap-3 ${
                          images?.length > 0 && images?.length <= 2
                            ? "grid-cols-2"
                            : images?.length <= 4 && images?.length >= 3
                            ? "grid-cols-3"
                            : "grid-cols-4"
                        }`}
                      >
                        {images?.map((image, index) => (
                          <div
                            key={index}
                            className="shadow-xl border-4 border-white rounded-md overflow-hidden"
                          >
                            <img
                              className="w-full"
                              src={image}
                              alt="Gig Images"
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <input
                          type="file"
                          id="imageuploadforgig"
                          className="hidden"
                          required
                          onChange={(e) => {
                            setImage(e.target.files);
                          }}
                        />
                        <label htmlFor="imageuploadforgig">
                          <div className="text-8xl text-white bg-[#ad277c] w-full min-h-[130px] rounded-xl flex items-center justify-center">
                            {!image ? <AiOutlineCloudUpload /> : <BsCheckLg />}
                          </div>
                        </label>
                        {image ? (
                          <span
                            onClick={handleImageUpload}
                            className="uppercase font-medium py-2 px-5 bg-[#ad277c] rounded-full text-white"
                          >
                            Upload
                          </span>
                        ) : (
                          <span className="uppercase font-medium py-2 px-5 bg-[#2a3254] rounded-full text-white">
                            Upload
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* <button type="submit">Submit</button> */}
              <div>
                {state.showPage === "MAIN_PAGE" && (
                  <div className="mt-4 mb-12 text-center">
                    <button
                      onClick={() => dispatch({ type: "PRICING_PAGE" })}
                      className="py-3 px-20 rounded-md bg-[#ad277c] text-white font-bold text-lg"
                    >
                      Next
                    </button>
                  </div>
                )}
                {state.showPage === "PRICING_PAGE" && (
                  <div className="mt-8 mb-12 flex gap-4 justify-center">
                    <button
                      onClick={() => dispatch({ type: "MAIN_PAGE" })}
                      className="py-3 px-20 text-[#ad277c] font-bold text-lg border  border-[#ad277c] rounded-md"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => dispatch({ type: "GALLERY_PAGE" })}
                      className="py-3 px-20 bg-[#ad277c] text-white font-bold text-lg rounded-md"
                    >
                      Next
                    </button>
                  </div>
                )}
                {state.showPage === "GALLERY_PAGE" && (
                  <div className="mt-8 mb-12 flex gap-4 justify-center">
                    <button
                      onClick={() => dispatch({ type: "PRICING_PAGE" })}
                      className="py-3 px-8 md:px-12 text-[#ad277c] font-bold text-lg rounded-md  border  border-[#ad277c] "
                    >
                      Back
                    </button>
                    <button className="bg-[#ad277c] py-3 px-8 md:px-12 text-lg font-bold text-white rounded-md">
                      Confirm Gig Publish
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default withPrivate(GigCreation);
