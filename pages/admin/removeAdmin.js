/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Input, message } from 'antd';
import useAuth from '../../hooks/useAuth';
import Header from '../../components/Shared/Header';
import Footer from '../../components/Shared/Footer';
import HeaderTop from '../../components/Shared/HeaderTop';


const RemoveAdmin = () => {
    const [email, setEmail] = useState('');
    const { loading } = useAuth();

    const handleONBlur = e => {
        setEmail(e.target?.value)
    }
    //remove admin
    const handleRemove = e => {
        const User = { email }
        e.preventDefault()
        fetch(`${process.env.NEXT_PUBLIC_URL}/users/remove/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(User)
        })
            .then(res => res.json())
            .then(data => {
                setEmail(data)
                message.success('Admin Remove successfully')
            }).catch(
                err => {
                    console.log(err)
                }
            )
    }
    return (
        <div>
            {loading && (
                <div className="min-h-screen flex bg-orange-700 items-center justify-center">
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
            <>
                <HeaderTop />
                <Header />

                {
                    !loading && (
                        <div className='container-fluid mx-auto p-28 min-h-screen'>
                            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12'>
                                <div className="flex justify-center items-center shadow-lg rounded-lg p-10">
                                    <form onSubmit={handleRemove} >
                                        <br />
                                        <Input placeholder="Your Email" type="email" onBlur={handleONBlur} />
                                        <br />

                                        <div className="mt-8 flex justify-center">
                                            <button type="submit" className="bg-orange-500  text-white px-8 py-2 rounded-md">
                                                Remove Admin
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div>
                                    <img src="https://img.freepik.com/free-vector/top-up-credit-concept-illustration_114360-7284.jpg?size=338&ext=jpg&ga=GA1.1.1852109835.1638216464" alt="" />
                                </div>
                            </div>
                        </div >
                    )

                }
                <Footer />
            </>
        </div>
    );
};

export default RemoveAdmin;
