/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Swal from "sweetalert2";
import { useRouter } from 'next/router'

const TotalGig = (props) => {
    const router = useRouter()
    const { gallery, gig_title, level, category, _id } = props.gig;

    let timerInterval;
    const handleClick = (id) => {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/gigs/top/${id}`;
        fetch(url, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "Top level gig add successfully!") {
                    Swal.fire({
                        title: 'Auto close alert!',
                        html: 'I will close in <b></b> milliseconds.',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                    router.reload()
                }
            });
    };

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
                    {level === "top" ? <p style={{ display: "inline-block", marginLeft: "10px" }} className='text-white px-2 py-3 rounded ring ring-indigo-700'>Added TOP</p> : <button onClick={() => handleClick(_id)} className="button">
                        Make TOP
                    </button>}
                    <button className="button">
                        Delete
                    </button>
                </div>
                <p style={{ display: 'inline-block', textTransform: 'uppercase' }} className="text-white bg-orange-900 rounded absolute px-3 top-5 right-2">{level || "New Seller"}</p>
            </div>

        </div>
    );
};

export default TotalGig;