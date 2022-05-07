/* eslint-disable @next/next/no-img-element */
import React from "react";
import { message } from "antd";
import { notification } from "antd";
const TotalGig = (props) => {

  const { gallery, gig_title, level, category, _id } = props.gig;
    const handleClick = (id) => {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/gigs/top/${id}`;
        fetch(url, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Top level gig add successfully!") {
                    message.success('Gig Added to Top level successfully')
                }
            });
    };
    const handleRemove = (id) => {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/gigs/remove/top/${id}`;
        fetch(url, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Top level gig add successfully!") {
                    message.success(' Gig Remove from Top level successfully')
                }
            });
    };

    return (
        <div className="card1 relative shadow-lg bg-[#fff]">
            <div className="card2">
                <div className="card-border-top">
                </div>
                <div className="img">
                    <img src={gallery[0]} alt="" />
                </div>

                <h3 className="job text-[#2a3254]">{gig_title}</h3>
                <p className="text-[#2a3254] text-center p-2 mb-12">✅{category}</p>

                <div className='text-center'>
                    {level === "top" ? <p style={{ display: "inline-block", marginLeft: "10px" }} className='text-[#2a3254] px-2 py-3 rounded ring ring-indigo-700'>Added TOP</p> : <button onClick={() => handleClick(_id)} className="button">
                        Make TOP
                    </button>}
                    <button onClick={() => handleRemove(_id)} className="button">
                        Remove
                    </button>
                </div>
                <p style={{ display: 'inline-block', textTransform: 'uppercase' }} className="text-white bg-orange-900 rounded absolute px-3 top-5 right-2">{level || "New Seller"}</p>
            </div>

  const { gallery, gig_title, level, category, _id } = props.gig;
  const handleClick = (id) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/gigs/top/${id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Top level gig add successfully!") {
          notification.success({
            message: "Success",
            description: "Gig Added to Top level successfully!",
            placement: "top",
            duration: 2,
            style: {
              width: 300,
              //   marginLeft: "calc(50% - 150px)",
              //   marginTop: "calc(50vh - 100px)",
              background: "#ec4899",
              color: "#2a3254 !important",
              borderBottom: "6px solid #3a3",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
            },
          });
        }
      });
  };
  const handleRemove = (id) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/gigs/remove/top/${id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Top level gig add successfully!") {
          notification.success({
            message: "Success",
            description: "Gig Removed from Top level successfully!",
            placement: "top",
            duration: 2,
            style: {
              width: 300,
              //   marginLeft: "calc(50% - 150px)",
              //   marginTop: "calc(50vh - 100px)",
              background: "#ec4899",
              color: "#2a3254 !important",
              borderBottom: "6px solid #3a3",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
            },
          });
        }
      });
  };

  return (
    <div className="card1 relative ">
      <div className="card2">
        <div className="card-border-top"></div>
        <div className="img">
          <img src={gallery[0]} alt="" />
        </div>

        <h3 className="job">{gig_title}</h3>
        <p className="text-white text-center p-2 mb-12">✅{category}</p>


        <div className="text-center">
          {level === "top" ? (
            <p
              style={{ display: "inline-block", marginLeft: "10px" }}
              className="text-white px-2 py-3 rounded ring ring-indigo-700"
            >
              Added TOP
            </p>
          ) : (
            <button onClick={() => handleClick(_id)} className="button">
              Make TOP
            </button>
          )}
          <button onClick={() => handleRemove(_id)} className="button">
            Remove
          </button>
        </div>
        <p
          style={{ display: "inline-block", textTransform: "uppercase" }}
          className="text-white bg-orange-900 rounded absolute px-3 top-5 right-2"
        >
          {level || "New Seller"}
        </p>
      </div>
    </div>
  );
};

export default TotalGig;
