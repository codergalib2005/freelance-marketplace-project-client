/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { message } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import { notification } from "antd";
import { withPrivate } from "../../hooks/PrivateRoute";
import useAuth from "../../hooks/useAuth";
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
  console.log(thisUser)
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
    data.name=user.displayName
    // data.name = thisUser.displayName;
    let gallery = new Array();
    gallery.push(data.image1);
    gallery.push(data.image2);
    gallery.push(data.image3);
    gallery.push(data.image4);
    data.gallery = gallery;
    // data.name = thisUser?.name;
    // data.email = thisUser?.email;
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
  };
  return (
    <div>
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
            <div className="flex gap-2 items-center">
              <div
                className={
                  state.showPage === "MAIN_PAGE"
                    ? "bg-green-500 text-white h-5 w-5 rounded-full flex justify-center items-center"
                    : " h-5 w-5 rounded-full flex justify-center items-center border border-gray-500"
                }
              >
                <p className="text-xs">1</p>
              </div>
              <button
                className={
                  state.showPage === "MAIN_PAGE"
                    ? "text-green-400 font-semibold text-xs md:text-base cursor-text"
                    : "  text-xs md:text-base cursor-text text-gray-500"
                }
              >
                Gig Info
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <div
                className={
                  state.showPage === "PRICING_PAGE"
                    ? "bg-green-500 text-white h-5 w-5 rounded-full flex justify-center items-center "
                    : " h-5 w-5 rounded-full flex justify-center items-center border border-gray-500"
                }
              >
                <p className="text-xs">2</p>
              </div>
              <button
                className={
                  state.showPage === "PRICING_PAGE"
                    ? "text-green-400 font-semibold text-xs md:text-base cursor-text"
                    : "  text-xs md:text-base cursor-text text-gray-500"
                }
              >
                Gig Price
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <div
                className={
                  state.showPage === "GALLERY_PAGE"
                    ? "bg-green-500 text-white h-5 w-5 rounded-full flex justify-center items-center"
                    : " h-5 w-5 rounded-full flex justify-center items-center border border-gray-500"
                }
              >
                <p className="text-xs">3</p>
              </div>
              <button
                className={
                  state.showPage === "GALLERY_PAGE"
                    ? "text-green-400 font-semibold text-xs md:text-base cursor-text"
                    : "  text-xs md:text-base cursor-text text-gray-500"
                }
              >
                Gig Imgages
              </button>
            </div>
          </div>
          {/*============my Gig info section==============*/}
          <div className="w-10/12 mx-auto mt-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                {/*======Overview======*/}
                {state.showPage === "MAIN_PAGE" && (
                  <div
                    style={{
                      boxShadow: "0px 0.5px 2px 0.5px lightgray",
                    }}
                    className=" p-6 rounded-lg lato"
                  >
                    <div className="mb-6">
                      <h2 className="text-center text-2xl font-semibold text-[#2A3254]">
                        Create Your Gig Today!
                      </h2>
                      <p className="text-center mt-4 text-xs text-[#2A3254]">
                        fill all of the nescessary forms to upload your gigs!
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
                              {...register("gig_title", {
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
                      boxShadow: "0px 0.5px 2px 0.5px lightgray",
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
                      boxShadow: "0px 0.5px 2px 0.5px lightgray",
                      minHeight: "100px",
                    }}
                    className="  p-6 py-8 lg:py-16 rounded-lg "
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <strong className="text-lg text-[#2A3254] text-bold mb-3 block border ">
                          Select image One
                        </strong>
                        <input
                          className="border w-full p-2 focus:outline focus:outline-[#2A3254]"
                          placeholder="img-url..."
                          type="text"
                          {...register("image1", { required: true })}
                        />
                        {errors.image1 && (
                          <span className="text-red-700 block">
                            Image one is required
                          </span>
                        )}
                      </div>
                      <div>
                        <strong className="text-lg text-[#2A3254] text-bold mb-3 block border ">
                          Select image Two
                        </strong>
                        <input
                          className="border w-full p-2 focus:outline focus:outline-[#2A3254]"
                          placeholder="img-url..."
                          type="text"
                          {...register("image2", { required: true })}
                        />
                        {errors.image2 && (
                          <span className="text-red-700 block">
                            Image two is required
                          </span>
                        )}
                      </div>
                      <div>
                        <strong className="text-lg text-[#2A3254] text-bold mb-3 block border ">
                          Select image Three
                        </strong>
                        <input
                          className="border w-full p-2 focus:outline focus:outline-[#2A3254]"
                          placeholder="img-url..."
                          type="text"
                          {...register("image3", { required: true })}
                        />
                        {errors.image3 && (
                          <span className="text-red-700 block">
                            Image three is required
                          </span>
                        )}
                      </div>
                      <div>
                        <strong className="text-lg text-[#2A3254] text-bold mb-3 block border ">
                          Select image Four
                        </strong>
                        <input
                          className="border w-full p-2 focus:outline focus:outline-[#2A3254]"
                          placeholder="img-url..."
                          type="text"
                          {...register("image4", { required: true })}
                        />
                        {errors.image4 && (
                          <span className="text-red-700 block">
                            Image four is required
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
                      className="py-3 px-20 rounded-md bg-green-700 text-white font-bold text-lg"
                    >
                      Next
                    </button>
                  </div>
                )}
                {state.showPage === "PRICING_PAGE" && (
                  <div className="mt-8 mb-12 flex gap-4 justify-center">
                    <button
                      onClick={() => dispatch({ type: "GALLERY_PAGE" })}
                      className="py-3 px-20 bg-green-700 text-white font-bold text-lg rounded-md"
                    >
                      Next
                    </button>
                    <button
                      onClick={() => dispatch({ type: "MAIN_PAGE" })}
                      className="py-3 px-20 text-green-900 font-bold text-lg border  border-lime-500 rounded-md"
                    >
                      Back
                    </button>
                  </div>
                )}
                {state.showPage === "GALLERY_PAGE" && (
                  <div className="mt-8 mb-12 flex gap-4 justify-center">
                    <button
                      onClick={() => dispatch({ type: "PRICING_PAGE" })}
                      className="py-3 px-8 md:px-12 text-green-900 font-bold text-lg rounded-md  border  border-emerald-400 "
                    >
                      Back
                    </button>
                    <button className="bg-green-900 py-3 px-8 md:px-12 text-lg font-bold text-white rounded-md">
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
