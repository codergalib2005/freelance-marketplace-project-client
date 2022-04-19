/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

const totalGigs = () => {
    const [gigs, setGigs] = useState([])

    const gigUrl = `${process.env.NEXT_PUBLIC_API_URL}/gigs`;
    useEffect(() => {
        fetch(gigUrl).then(res => res.json()).then(data => setGigs(data.result))
    }, [gigUrl])

    // handle click put top in the database
    const handleClick = () => {
        console.log("click");
    }
    return (
        <div className="main_gigs_parent">
            <h2 className="text-3xl text-white text-center py-8">Total Gigs</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-8 container">

                {
                    gigs.map((gig, i) => (
                        <div key={i} className="card1 relative ">
                            <div className="card2">
                                <div className="card-border-top">
                                </div>
                                <div className="img">
                                    <img src={gig?.gallery[0]} alt="" />
                                </div>

                                <h3 className="job">{gig.gig_title}</h3>
                                <p className="text-white text-center p-2 mb-12">✅{gig.category}</p>

                                <div className='text-center'>
                                    {gig.level === "top" ? <p style={{ display: "inline-block", marginLeft: "10px" }} className='text-white px-2 py-3 rounded ring ring-indigo-700'>Added TOP</p> : <button onClick={handleClick} className="button">
                                        Make TOP
                                    </button>}
                                    <button className="button">
                                        Delete
                                    </button>
                                </div>
                                <p style={{ display: 'inline-block', textTransform: 'uppercase' }} className="text-white bg-orange-900 rounded absolute px-3 top-5 right-2">{gig?.level || "New Seller"}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default totalGigs;