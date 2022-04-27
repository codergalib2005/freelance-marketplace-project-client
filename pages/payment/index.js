/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Input } from 'antd';
import styles from '../../styles/payment.module.css';
import CheckOutForm from '../../components/Payment/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51KtH82GzqOicd3hE8PUDIcGXXipEmmrAwoj4XRp9TTA8zg72EauoFcUDrdwjl3zJiSZpZChoPDPmxWgT53BnLYOq00RGhFTylU');
const Payment = () => {
    return (
        <div className='bg-white relative'>
            <div className='grid grid-cols-6 w-screen min-h-screen'>
                <div className='col-span-4'></div>
                <div style={{ borderBottomLeftRadius: "45%", borderTopLeftRadius: "45%" }} className='col-span-2 bg-[#1cc7c1] '>
                </div>
            </div>
            <div className='absolute top-0 left-0 w-screen min-h-screen flex items-center justify-center px-4'>
                <div className="container mx-auto shadow-2xl rounded-2xl">
                    <div className='grid items-center grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <img src="/payment/payment.gif" alt="" />
                        </div>
                        <div>
                            <Elements stripe={stripePromise}>
                                <CheckOutForm />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Payment;