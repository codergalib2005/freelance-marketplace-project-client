/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import TotalGig from '../../components/TotalGig/TotalGig';

const TotalGigs = () => {
    const [gigs, setGigs] = useState([])

    const gigUrl = `${process.env.NEXT_PUBLIC_URL}/gigs`;
    useEffect(() => {
        fetch(gigUrl).then(res => res.json()).then(data => setGigs(data.result))
    }, [gigUrl])

    return (
        <div className="main_gigs_parent">
            <h2 className="text-3xl text-white text-center py-8">TOTAL GIGS</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-8 container">

                {
                    gigs.map((gig, i) => (
                        <TotalGig key={i} gig={gig}></TotalGig>
                    ))
                }
            </div>
        </div>
    );
};

export default TotalGigs;