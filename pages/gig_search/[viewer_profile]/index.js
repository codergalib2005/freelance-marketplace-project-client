/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SellerFooter from '../../../components/BecomeASeller/SellerFooter';
import Header from '../../../components/Shared/Header';
import HeaderTop from '../../../components/Shared/HeaderTop';
import { AiOutlineMail, AiOutlineArrowRight, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Footer from '../../../components/Shared/Footer';

const ViewerProfile = () => {
    const Router = useRouter();
    const [userProfile, setUserProfile] = useState({})
    let email = Router?.query?.viewer_profile;


    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/users/email/${email}`,
            )
            .then(
                (response) => {
                    setUserProfile(response?.data?.result);
                    console.log(response?.data?.result);

                },
                (error) => {
                    console.log(error);
                }
            );
    }, [email]);
    return (
        <>
            <HeaderTop />
            <Header />
            <div className="profile_banner">
                <div className="container mx-auto content_profile_banner">
                    <div>
                        <h2 className=" content_1 mb-5 text-white font-bold uppercase">
                            Buyer profiling <br /> for the rest of us
                        </h2>
                        <p className="content_2 text-white bold "><i><span className="text-red-500">Disclaimer!</span> Before you get your analytical pants in a twist, I know this process isn’t scientific. But neither is producing good content. That’s why it’s called an art.</i></p>
                    </div>
                    <div className="w-full">
                        <img className="img-responsive w-full" src="https://i.ibb.co/n66SsDC/undraw-Profile-details-re-ch9r-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className=" bg-yellow-50 py-10">
                <div style={{ boxShadow: "-2px 3px 15px rgba(0,0,0,0.05)", }} className="container mx-auto p-4 cursor-pointer bg-white rounded-lg">
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 bg-green-50 shadow p-8 rounded items-center">
                        <div className="w-[200px] mx-auto">
                            <div>
                                <img className="w-full rounded-full" src={userProfile?.avatar} alt="" />
                            </div>
                            <div className="w-10 relative bottom-6 bg-white rounded-full ring ring-green-400 left-20">
                                <img className="w-full" src=" https://i.ibb.co/YDtR4HQ/PNGPIX-COM-Target-PNG-Transparent-Image-2-removebg-preview.png" alt="" />
                            </div>

                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-amber-900">{userProfile?.name}</h2>
                            <h2 className="text-2xl">{userProfile?.profession}</h2>
                            <button className=" my-2 px-4 ring-1 rounded-lg ring-slate-400 bg-green-700 text-white mr-2"> <span>{userProfile?.admin}</span></button>
                            <button className=" my-2 px-4 ring-1 rounded-lg ring-slate-400 bg-green-700 text-white mr-2"> <span>{userProfile?.status}</span></button>
                        </div>
                        <div>
                            <div className="social_icons">
                                <i className="social_icon">
                                    <FaFacebookF />
                                </i>
                                <i className="social_icon">
                                    <AiOutlineInstagram />
                                </i>
                                <i className="social_icon">
                                    <FaLinkedinIn />
                                </i>
                                <i className="social_icon">
                                    <FaWhatsapp />
                                </i>
                            </div>
                            <div>
                                <button className="py-4 px-3">Send Message: <span className="inline-block text-blue-500">{userProfile?.email}</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 px-4 bg-green-50">

                        <h2 className="capitalize text-xl"><span className="font-semibold">Personal Information:</span></h2>
                        <h2 className="capitalize text-xl"><span className="font-semibold">✅ About Me: </span>{userProfile?.about}</h2>
                        <h2 className="text-xl capitalize"><span className="font-semibold">✅ My Core Skills: </span>{userProfile?.skills}.</h2>
                        <h2 className="text-xl capitalize"><span className="font-semibold">✅ Gender: </span>{userProfile?.gender}</h2>
                        <h2 className="text-xl"><span className="font-semibold">✅ Joining Date: </span>{userProfile?.date}</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ViewerProfile;