/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TotalGig = (props) => {
    const { gallery, gig_title, level, category, _id } = props.gig;

    return (
        <div className="card1 relative ">
            <div className="card2">
                <div className="card-border-top">
                </div>
                <div className="img">
                    <img src={gallery[0]} alt="" />
                </div>

                <h3 className="job">{gig_title}</h3>
                <p className="text-white text-center p-2 mb-12">✅{category}</p>

                <div className='text-center'>
                    <button className="button">
                        Manage
                    </button>
                    <button className="button">
                        Delete
                    </button>
                </div>
                <p style={{ display: 'inline-block', textTransform: 'uppercase' }} className="text-white bg-orange-900 rounded absolute px-3 top-5 right-2">{level}</p>
            </div>

        </div>
    );
};

export default TotalGig;