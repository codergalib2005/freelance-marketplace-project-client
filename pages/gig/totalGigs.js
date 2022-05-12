/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import SideBarMenu from '../../components/SideBar/SideBarMenu';
import TotalGig from '../../components/TotalGig/TotalGig';
import useAuth from "../../hooks/useAuth";

const TotalGigs = () => {
    const [gigs, setGigs] = useState([])
    const {isOpen} = useAuth()

    const gigUrl = `${process.env.NEXT_PUBLIC_API_URL}/gigs`;
    useEffect(() => {
        fetch(gigUrl).then(res => res.json()).then(data => setGigs(data.result))
    }, [gigUrl])

    return (
        <section>
            <main>
                <div className="dashboard_position bg-[#fff] ">
                    <div className="min-h-screen sidebar_position">
                        {" "}
                        <SideBar />
                        <SideBarMenu />
                    </div>
                    <div className={`main_gigs_parent mx-auto ${isOpen ? "pl-[200px]" : "pl-[45px]"}`}>
                        <h2 className="text-3xl text-[#2a3254] shadow-lg text-center py-8 ">TOTAL GIGS</h2>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:p-12 sm:p-5 mx-auto gap-8 container">

                            {
                                gigs.map((gig, i) => (
                                    <TotalGig key={i} gig={gig}></TotalGig>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default TotalGigs;
