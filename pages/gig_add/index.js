/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { message } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import { withPrivate } from "../../hooks/PrivateRoute";
import useAuth from "../../hooks/useAuth";
const showPageMood = {
  showPage: "MAIN_PAGE",
};
const controlReducer = (state, action) => {
  switch (action.type) {
    case "MAIN_PAGE":
      return { showPage: (state.showPage = "MAIN_PAGE") };
      break;
    case "PRICING_PAGE":
      return { showPage: (state.showPage = "PRICING_PAGE") };
      break;
    case "GALLERY_PAGE":
      return { showPage: (state.showPage = "GALLERY_PAGE") };
      break;
    default:
      return state;
      break;
  }
};
const GigCreation = () => {
  const [state, dispatch] = useReducer(controlReducer, showPageMood);
  const [thisUser, setThisUser] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, userStatus } = useAuth();
  const router = useRouter();
  useEffect(() => {
    fetch(
      `https://dry-plains-53771.herokuapp.com/auth/users/email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setThisUser(data?.result[0]))
      .catch((err) => console.log(err));
  }, [user]);
  const onSubmit = (data) => {
    data.email = user?.email;
    data.name = thisUser?.name;
    // data.name = user.
    // Image Upload in imgBB
    let gallery = new Array();
    const rf1 = new FileReader();
    rf1.readAsDataURL(data.image1[0]);
    rf1.onloadend = function (event1) {
      const body1 = new FormData();
      body1.append("image", event1.target.result.split(",").pop()); //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
      body1.append("name", data.image1[0].name);
      fetch(
        "https://api.imgbb.com/1/upload?expiration=600&key=aace97b9a0d4e6d8a83442b26ddb021e",
        {
          method: "POST",
          body: body1,
        }
      )
        .then((res) => res.json())
        .then((result1) => {
          gallery.push(result1?.data?.url);
          // Image 2 save in imgBB______
          const rf2 = new FileReader();
          rf2.readAsDataURL(data.image2[0]);
          rf2.onloadend = function (event2) {
            const body2 = new FormData();
            body2.append("image", event2.target.result.split(",").pop()); //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
            body2.append("name", data.image2[0].name);
            fetch(
              "https://api.imgbb.com/1/upload?expiration=600&key=aace97b9a0d4e6d8a83442b26ddb021e",
              {
                method: "POST",
                body: body2,
              }
            )
              .then((res) => res.json())
              .then((result2) => {
                gallery.push(result2?.data?.url);
                // Image 3 save in imgBB______
                const rf3 = new FileReader();
                rf3.readAsDataURL(data.image3[0]);
                rf3.onloadend = function (event3) {
                  const body3 = new FormData();
                  body3.append("image", event3.target.result.split(",").pop()); //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
                  body3.append("name", data.image3[0].name);
                  fetch(
                    "https://api.imgbb.com/1/upload?expiration=600&key=aace97b9a0d4e6d8a83442b26ddb021e",
                    {
                      method: "POST",
                      body: body3,
                    }
                  )
                    .then((res) => res.json())
                    .then((result3) => {
                      gallery.push(result3?.data?.url);
                      // Image 4 save in imgBB______
                      const rf4 = new FileReader();
                      rf4.readAsDataURL(data.image4[0]);
                      rf4.onloadend = function (event4) {
                        const body4 = new FormData();
                        body4.append(
                          "image",
                          event4.target.result.split(",").pop()
                        ); //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
                        body4.append("name", data.image4[0].name);
                        fetch(
                          "https://api.imgbb.com/1/upload?expiration=600&key=aace97b9a0d4e6d8a83442b26ddb021e",
                          {
                            method: "POST",
                            body: body4,
                          }
                        )
                          .then((res) => res.json())
                          .then((result4) => {
                            gallery.push(result4?.data?.url);
                            data.gallery = gallery;
                            axios
                              .post(
                                "https://dry-plains-53771.herokuapp.com/auth/gigs",
                                data
                              )
                              .then((res) => {
                                message.success("Gig Creation successfully!");
                                router.replace("/profile");
                              })
                              .catch((err) => console.log(err));
                          })
                          .catch((err) => console.log(err));
                      };
                    })
                    .catch((err) => console.log(err));
                };
              })
              .catch((err) => console.log(err));
          };
        })
        .catch((err) => console.log(err));
    };
  };
  return (
    <div>
      <Header bg="bg-gray-900" />
      <div className="mt-16 feature-font ">
        <div className="text-green-500 flex gap-4 md:gap-8 flex-col md:flex-row lg:flex-row  border-b border-t border-gray-400 py-2 text-md mt-20  pl-6 justify-start">
          <div className="flex gap-2">
            <div className=" bg-green-400 text-white h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">1</p>
            </div>
            <button> Personal Info</button>
          </div>
          <div className="flex gap-2 ">
            <div className="border-2  h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">2</p>
            </div>
            <button>Pofessional Info</button>
          </div>
          <div className="flex gap-2 ">
            <div className="border-2   h-6 w-6 rounded-full flex justify-center items-center">
              <p className="text-xs">3</p>
            </div>
            <button>Linekd Account</button>
          </div>
        </div>
        {/*============my Gig info section==============*/}
        <div className="w-10/12 mx-auto mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/*======Overview======*/}
              {state.showPage === "MAIN_PAGE" && (
                <div className="shadow-lg border-t-2 p-6 rounded-lg ">
                  <div>
                    <div className="flex">
                      <span className="w-2/12 text-xl font-bold">
                        Gig Title
                      </span>
                      <div className="w-10/12">
                        <textarea
                          className=" border w-full text-lg p-2 border-gray-300 rounded-md"
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
                      <div className="flex py-6">
                        <div className="w-2/12 text-xl font-bold">CATEGORY</div>
                        <div className="w-8/12">
                          <select
                            className="border border-gray-300 h-12 text-lg w-full rounded-md"
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
                      <div>
                        <textarea
                          placeholder="Service Description"
                          className="w-full border border-gray-400 p-2 rounded-md"
                          {...register("description", { required: true })}
                          rows="6"
                        ></textarea>
                        {errors.description && (
                          <span className="text-red-700 block">
                            Service main description is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/*======Pricing======*/}
              {state.showPage === "PRICING_PAGE" && (
                <div className="shadow-lg border-4 p-6 rounded-lg border-green-300">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="border border-gray-1">
                      <div className="text-2xl py-3 bg-gray-300 pl-3">
                        Basic
                      </div>
                      <div>
                        <textarea
                          rows="4"
                          className="px-2 border-t border-gray-300 w-full "
                          {...register("first_title", { required: true })}
                          placeholder="Service Title"
                        ></textarea>
                        {errors.first_title && (
                          <span className="text-red-700 block">
                            Service Title is required
                          </span>
                        )}
                        <textarea
                          rows="5"
                          className="px-2 border-t border-gray-300 w-full"
                          {...register("first_desc", { required: true })}
                          placeholder="Service description"
                        ></textarea>
                        {errors.first_desc && (
                          <span className="text-red-700 block">
                            Service description is required
                          </span>
                        )}
                        <select
                          className="border border-gray-300 h-12 text-lg w-full rounded-md "
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
                          className="px-2 w-full text-lg font-bold py-2 bg-gray-100"
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
                    <div className="border border-gray-1">
                      <div className="text-2xl py-3 bg-gray-300 pl-3">
                        Advance
                      </div>
                      <div>
                        <textarea
                          rows="3"
                          className="px-2 border-t border-gray-300 w-full "
                          {...register("second_title", { required: true })}
                          placeholder="Service Title"
                        ></textarea>
                        {errors.second_title && (
                          <span className="text-red-700 block">
                            Service Title is required
                          </span>
                        )}
                        <textarea
                          rows="5"
                          className="px-2 border-t border-gray-300 w-full"
                          {...register("second_desc", { required: true })}
                          placeholder="Service description"
                        ></textarea>
                        {errors.second_desc && (
                          <span className="text-red-700 block">
                            Service description is required
                          </span>
                        )}
                        <select
                          className="border border-gray-300 h-12 text-lg w-full rounded-md "
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
                          className="px-2 w-full text-lg font-bold py-2 bg-gray-100"
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
                    <div className="border border-gray-1">
                      <div className="text-2xl py-3 bg-gray-300 pl-3">
                        Enterprise
                      </div>
                      <div>
                        <textarea
                          rows="5"
                          className="px-2 border-t border-gray-300 w-full "
                          {...register("third_title", { required: true })}
                          placeholder="Service Title"
                        ></textarea>
                        {errors.third_title && (
                          <span className="text-red-700 block">
                            Service Title is required
                          </span>
                        )}
                        <textarea
                          className="px-2 border-t border-gray-300 w-full"
                          {...register("third_desc", { required: true })}
                          placeholder="Service description"
                          rows="4"
                        ></textarea>
                        {errors.third_desc && (
                          <span className="text-red-700 block">
                            Service description is required
                          </span>
                        )}
                        <select
                          className="border border-gray-300 h-12 text-lg w-full rounded-md "
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
                          className="px-2 w-full text-lg font-bold py-2 bg-gray-100"
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
                      <div></div>
                    </div>
                  </div>
                </div>
              )}
              {/*======Gallery======*/}
              {state.showPage === "GALLERY_PAGE" && (
                <div
                  style={{ minHeight: "300px" }}
                  className="shadow-lg border-4 p-6 rounded-lg border-green-300"
                >
                  <div className="grid grid-cols-4">
                    <div>
                      <strong className="text-lg text-gray-900 text-bold mb-3 block">
                        Select image One
                      </strong>
                      <input
                        type="file"
                        {...register("image1", { required: true })}
                      />
                      {errors.image1 && (
                        <span className="text-red-700 block">
                          Image one is required
                        </span>
                      )}
                    </div>
                    <div>
                      <strong className="text-lg text-gray-900 text-bold mb-3 block">
                        Select image Two
                      </strong>
                      <input
                        type="file"
                        {...register("image2", { required: true })}
                      />
                      {errors.image2 && (
                        <span className="text-red-700 block">
                          Image two is required
                        </span>
                      )}
                    </div>
                    <div>
                      <strong className="text-lg text-gray-900 text-bold mb-3 block">
                        Select image Four
                      </strong>
                      <input
                        type="file"
                        {...register("image3", { required: true })}
                      />
                      {errors.image3 && (
                        <span className="text-red-700 block">
                          Image three is required
                        </span>
                      )}
                    </div>
                    <div>
                      <strong className="text-lg text-gray-900 text-bold mb-3 block">
                        Select image Five
                      </strong>
                      <input
                        type="file"
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
                <div className="mt-4">
                  <button
                    onClick={() => dispatch({ type: "PRICING_PAGE" })}
                    className="py-2 px-3 bg-green-900 text-white font-bold text-lg"
                  >
                    Next
                  </button>
                </div>
              )}
              {state.showPage === "PRICING_PAGE" && (
                <div className="mt-4">
                  <button
                    onClick={() => dispatch({ type: "GALLERY_PAGE" })}
                    className="py-2 px-3 bg-green-900 text-white font-bold text-lg"
                  >
                    Next
                  </button>
                  <button
                    onClick={() => dispatch({ type: "MAIN_PAGE" })}
                    className="py-2 px-3 text-green-900 font-bold text-lg"
                  >
                    Back
                  </button>
                </div>
              )}
              {state.showPage === "GALLERY_PAGE" && (
                <div className="mt-4">
                  <button
                    onClick={() => dispatch({ type: "PRICING_PAGE" })}
                    className="py-2 px-3 text-green-900 font-bold text-lg"
                  >
                    Back
                  </button>
                  <button className="bg-green-900 py-2 px-6 text-lg font-bold text-white">
                    Confirm Gig Publish
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withPrivate(GigCreation);
