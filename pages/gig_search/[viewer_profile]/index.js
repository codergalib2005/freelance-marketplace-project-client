import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Shared/Header';
import HeaderTop from '../../../components/Shared/HeaderTop';

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
            <div className="container mx-auto py-16">
                <div className="w-[200px]">
                    <img className="w-full rounded-tl-2xl" src={userProfile?.avatar} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl">{userProfile?.name}</h2>
                    <h2 className="text-2xl">{userProfile?.profession}</h2>
                    <h2 className="text-2xl">{userProfile?.bio}</h2>
                    <h2 className="text-2xl">{userProfile?.status}</h2>
                    <h2 className="text-2xl">{userProfile?.skills}</h2>
                    <h2 className="text-2xl">{userProfile?.gender}</h2>
                    <h2 className="text-2xl">{userProfile?.email}</h2>
                    <h2 className="text-2xl">{userProfile?.date}</h2>
                    <h2 className="text-2xl">{userProfile?.admin}</h2>
                    <h2 className="text-2xl">{userProfile?.about}</h2>

                </div>
            </div></>
    );
};

export default ViewerProfile;