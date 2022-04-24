/* eslint-disable @next/next/link-passhref */
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import DetailsHeader from "../../../../components/gigs/DetailsHeader";
import SliderBannerImage from "../../../../components/gigs/SliderBannerImage";
import useAuth from "../../../../hooks/useAuth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import { message } from 'antd';
import styles from '../../../../styles/gigid.module.css';
import Header from "../../../../components/Shared/Header";
import HeaderTop from "../../../../components/Shared/HeaderTop";



const GigDetails = () => {
  const { user } = useAuth();
  const [gig, setSingleGig] = useState({});
  const [gigUser, setGigUser] = useState({});
  const [showPricing, setShowPricing] = useState("beginner");
  const router = useRouter();
  const [rating, setRating] = useState(0);

  const [sellerEmail, setSellerEmail] = useState([]);


  //Buyer rivew
  console.log(sellerEmail)
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews/sellerEmail/${gig?.email}`)
      .then(res => res.json())
      .then(data => {
        setSellerEmail(data.result)
      })
  }, [gig?.email])



  //hook from

  const [sellerEmail, setSellerEmail] = useState([]);


  //Buyer rivew
  console.log(sellerEmail)
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews/sellerEmail/${gig?.email}`)
      .then(res => res.json())
      .then(data => {
        setSellerEmail(data.result)
      })
  }, [gig?.email])


  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    data.rating = rating,
      data.sellerEmail = gig?.email,
      data.buyerEmail = user?.email,
      data.buyerName = user?.displayName ? user?.displayName : 'Buyer Name',


      //post
      axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews/`,
          data,
        
          {
            headers: {
              "Content-Type": "application/json",
            },
          },

  
        ).then(
          () => {
            message.success('Review successfully')
            reset();
          }
        ).catch(err => console.log(err))
        
  
    };
        },

      ).then(
        () => message.success('review successfully')

      ).catch(err => console.log(err));



  };
  useEffect(() => {
    const GETURL = `${process.env.NEXT_PUBLIC_API_URL}/gigs/${router?.query?.gigid}`;
    axios
      .get(GETURL)
      .then((res) => setSingleGig(res?.data?.result[0]))
      .catch((err) => console.log(err));
  }, [router?.query?.gigid]);
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/users/email/${gig?.email}`)
    .then(
      (response) => {
        setGigUser(response?.data?.result[0]);
      },
      (error) => {
        console.log(error);
      }
    );


  return (
    <div className=" bg-[#2a3254] min-h-screen">
      {/* <DetailsHeader gig={gig} /> */}
      <HeaderTop />
      <Header />
      <div className="container-fluid mx-auto px-3 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
          <div className="col-span-5">
            {/* Gig Slider */}
            <SliderBannerImage gig={gig} />
            {/* Gig Description */}
            <div>
              {!(gig?.gig_title === "") && (
                <div className="mt-4">
                  <strong className="text-xl font-bold text-white border-b-2 border-[#a78737] pr-5 mt-6 pb-1 mb-2 online-block">
                    Gig Title
                  </strong>
                  <p className="text-lg text-gray-400 mt-2">{gig?.gig_title}</p>
                </div>
              )}
              {!(gig?.description === "") && (
                <div className="mt-3">
                  <strong className="text-xl font-bold text-white border-b-2 border-[#a78737] pr-5 mt-6 pb-1 mb-2 online-block">
                    Gig Description
                  </strong>
                  <p className="text-md text-gray-400 mt-2">
                    {gig?.description}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-16 text-center">
              <strong className="text-xl font-bold text-white border-b-2 border-[#a78737] pr-5 mt-6 pb-1 mb-2 online-block">
                All Review
              </strong> <br /> <br />
            </div>

            {
              sellerEmail.map(seller => (
                <div className="w-[50%] mt-10 mx-10">
                  <div className="mt-10">
                    <div className="shadow-sm shadow-oraange-700 rounded-md overflow-hidden">
                      <div className="flex">
                        <div>
                          <img className="rounded-full" src={seller.buyerImage} alt="" />
                        </div>
                        <div className="mt-10 ml-5">

                          <Rating name="half-rating" defaultValue={seller.rating} readOnly /> <br />

                          <Rating name="readOnly" defaultValue={seller.rating} readOnly /> <br />

                          <h4 className="text-white">{seller.profession}</h4>

                        </div>
                      </div>

                      <div className="ml-2 mt-4">
                        <h1 className="text-white">{seller.buyerName}</h1>
                        <p className="text-white">{seller.description}</p>
                        <h2 className="text-white">{seller.buyerEmail}</h2>
                        <h5 className="text-white">{seller.date}</h5>
                      </div>


                    </div>
                  </div>
                </div>
              ))
            }

          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-8">
              {/* About gig seller */}
              <div className="rounded-full col-span-2 w-20 h-20 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="mx-w-full" src={gigUser?.avatar} alt="" />
              </div>
              <div className="pl-3 col-span-6">
                <strong className="border-b-2 border-[#ae8934] pb-2 mb-4 font-bold text-2xl text-white">
                  {gigUser?.name}
                </strong>
                <p className="pt-3 text-[#ddd]  text-lg">{gigUser?.bio}</p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 items-center justify-between text-white font-bold text-md mt-1 text-center mb-5">
              <strong className="border-y-2 border-[#a78737] py-1">
                {gigUser?.gender}
              </strong>
              <strong className="border-y-2 col-span-3 border-[#a78737] py-1">
                {gigUser?.email}
              </strong>
              <strong className="border-y-2 border-[#a78737] py-1">
                <Moment fromNow ago>
                  {gigUser?.date}
                </Moment>
              </strong>
            </div>
            {!(gigUser?.about === "") && (
              <div>
                <strong className="text-xl font-bold text-white border-b-2 border-[#a78737] pr-5 mt-6 pb-1 mb-2 online-block">
                  About
                </strong>
                <p className="text-md text-gray-400 mt-2">{gigUser?.about}</p>
              </div>
            )}
            {!(gigUser?.skills === "") && (
              <div className="mt-5">
                <strong className="text-xl font-bold text-white border-b-2 border-[#a78737] pr-5 mt-6 pb-1 mb-2 online-block">
                  Skills
                </strong>
                <p className="text-md text-gray-400 mt-2">{gigUser?.skills}</p>
              </div>
            )}
            {!(gigUser?.education === "") && (
              <div className="mt-5">
                <strong className="text-xl font-bold text-white border-b-2 border-[#a78737] pr-5 mt-6 pb-1 mb-2 online-block">
                  Education
                </strong>
                <p className="text-md text-gray-400 mt-2">
                  {gigUser?.education}
                </p>
              </div>
            )}
            <div>
              {/* Gig Pricing cards */}
              <div className="mt-6 bg-white rounded-md pb-8 relative">
                {/* Header */}
                <div className="border-b-2 border-[#2a3254]">
                  <div className="grid grid-cols-3 bg-white rounded-md border-2 border-b-0 border-white">
                    <div
                      className={`text-center cursor-pointer py-2 text-lg font-bold ${showPricing === "beginner" && "bg-[#2a3254] text-white"
                        }`}
                      onClick={() => setShowPricing("beginner")}
                    >
                      Beginner
                    </div>
                    <div
                      className={`text-center cursor-pointer py-2 text-lg font-bold ${showPricing === "expert" && "bg-[#2a3254] text-white"
                        }`}
                      onClick={() => setShowPricing("expert")}
                    >
                      Expert
                    </div>
                    <div
                      className={`text-center cursor-pointer py-2 text-lg font-bold ${showPricing === "experience" &&
                        "bg-[#2a3254] text-white"
                        }`}
                      onClick={() => setShowPricing("experience")}
                    >
                      Experience
                    </div>
                  </div>
                </div>
                {/* body */}
                <div className=" pb-3 relative">
                  {showPricing === "beginner" && (
                    <div>
                      <div className="h-56 flat_gradient pricing_card flex items-center justify-center flex-col">
                        <h2 className="text-xl font-bold text-center text-white uppercase">
                          Beginner
                        </h2>
                        <h1 className="text-white text-3xl font-bold text-center uppercase">
                          ${gig?.first_price}/{gig?.first_day}.Day
                        </h1>
                      </div>
                      <div className="flex items-center justify-center ">
                        <div className="rounded-full w-24 h-24 flex items-center justify-center bg-white shadow-lg text-center relative -top-12">
                          <div>
                            <h1 className="text-[#2a3254] text-2xl font-bold">
                              {gig?.first_day}
                            </h1>
                            <h4 className="text-xl font-bold text-[#2a3254]">
                              Day
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mx-4 pl-2  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Title
                          </strong>
                        </div>
                        <div className="col-span-4 self-center">
                          {gig?.first_title}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mx-4 pl-2  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Description
                          </strong>
                        </div>
                        <div className="col-span-4 self-center">
                          {gig?.first_desc}
                        </div>
                      </div>
                    </div>
                  )}
                  {showPricing === "expert" && (
                    <div>
                      <div className="h-56 flat_gradient pricing_card flex items-center justify-center flex-col">
                        <h2 className="text-xl font-bold text-center text-white uppercase">
                          Expert
                        </h2>
                        <h1 className="text-white text-3xl font-bold text-center uppercase">
                          ${gig?.second_price}/{gig?.second_day}.Day
                        </h1>
                      </div>
                      <div className="flex items-center justify-center ">
                        <div className="rounded-full w-24 h-24 flex items-center justify-center bg-white shadow-lg text-center relative -top-12">
                          <div>
                            <h1 className="text-[#2a3254] text-2xl font-bold">
                              {gig?.second_day}
                            </h1>
                            <h4 className="text-xl font-bold text-[#2a3254]">
                              Day
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 pl-3 mx-3  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Title
                          </strong>
                        </div>
                        <div className="col-span-4 self-center">
                          {gig?.second_title}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 pl-3 mx-3  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Description
                          </strong>
                        </div>
                        <div className="col-span-4 self-center">
                          {gig?.second_desc}
                        </div>
                      </div>
                    </div>
                  )}
                  {showPricing === "experience" && (
                    <div>
                      <div className="h-56 flat_gradient pricing_card flex items-center justify-center flex-col">
                        <h2 className="text-xl font-bold text-center text-white uppercase">
                          Experience
                        </h2>
                        <h1 className="text-white text-3xl font-bold text-center uppercase">
                          ${gig?.third_price}/{gig?.third_day}.Day
                        </h1>
                      </div>
                      <div className="flex items-center justify-center ">
                        <div className="rounded-full w-24 h-24 flex items-center justify-center bg-white shadow-lg text-center relative -top-12">
                          <div>
                            <h1 className="text-[#2a3254] text-2xl font-bold">
                              {gig?.third_day}
                            </h1>
                            <h4 className="text-xl font-bold text-[#2a3254]">
                              Day
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 pl-3 mx-3  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Title
                          </strong>
                        </div>
                        <div className="col-span-4 self-center">
                          {gig?.third_title}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 pl-3 mx-3  border-b border-[#2a3254] py-2 rounded-2xl">
                        <div className="col-span-2">
                          <strong className="text-lg font-bold text-[#2a3254]">
                            Description
                          </strong>
                        </div>
                        <div className="col-span-4 self-center">
                          {gig?.third_desc}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Link href={`/gig_search/buy_plan/${gig?._id}`}>
                  <button className="button_gradient flat_gradient">
                    Buy Plan
                  </button>
                </Link>
              </div>

              <div className={`mt-10 ${styles.review_contaner}`}>
                <strong className="text-xl font-bold text-white border-b-2 border-[#a78737] pr-5 mt-6 pb-1 mb-2 online-block">
                  Give a Review
                </strong> <br /> <br />

                <Rating onChange={e => setRating(e.target.value)} name="half-rating" defaultValue={2.5} precision={0.5} /> <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <textarea className="py-1 px-2 rounded-2" {...register("description")} placeholder='Your Comment' required /> <br /> <br />
                  <input className="py-1 px-2 rounded-2" {...register("profession")} placeholder='Your profession' type="text" required /> <br /> <br />
                  <input className="py-1 px-2 rounded-2" {...register("buyerImage")} placeholder='Your image URL' required /> <br /> <br />
                  <input className="text-white bg-purple-500 px-4 py-2 rounded-md font-bold" type="submit" />
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetails;

