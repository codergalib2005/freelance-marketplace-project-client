/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import SideBarMenu from '../../components/SideBar/SideBarMenu';
import TopGig from '../../components/TotalGig/TopGig';
import useAuth from '../../hooks/useAuth';

const TopGigs = () => {
  const [gigs, setGigs] = useState([])
  const { isOpen } = useAuth()

  const gigUrl = `${process.env.NEXT_PUBLIC_API_URL}/gigs/top`;
  useEffect(() => {
    fetch(gigUrl).then(res => res.json()).then(data => setGigs(data.result))
  }, [gigUrl])

  return (
    <section>
      <main>
        <div className="dashboard_position bg-[#fff] ">
          <div className="min-h-screen">
            {" "}
            <SideBar />
            <SideBarMenu />
          </div>
          <div className={`main_gigs_parent ${isOpen ? "pl-[200px]" : "pl-[45px]"}`}>
            <h2 className="text-3xl text-white text-center py-8">TOP LEVEL GIGS</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-8 container pb-10">

              {
                gigs.map((gig, i) => (
                  <TopGig key={i} gig={gig}></TopGig>
                ))
              }
            </div>
          </div>

        </div>
      </main>
    </section>
  );
};

export default TopGigs;
