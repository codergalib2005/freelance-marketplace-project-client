import React from 'react';
import { Input } from 'antd';
import styles from '../../styles/payment.module.css';
import Head from 'next/head';
import Script from 'next/script'


const payment = () => {
    return (
        <div className='container-fluid mx-auto p-28'>
            <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>
            <Script type="application/javascript" crossorigin="anonymous" src={`${process.env.PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.PAYTN_NID}.js`} onload="onScriptLoad();" /> 
            

                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12'>
                    <div className={`flex justify-center ${styles.payment_container}`}>
                        <form >
                            <Input placeholder="Your Name" />
                            <br />
                            <br />
                            <Input placeholder="Your Email" />
                            <br />
                            <br />
                            <Input prefix="$" placeholder="Price" />
                            <br />
                            <br />
                            <Input suffix="VISA" />
                            <div className="mt-8 flex justify-center">
                                <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
                                    Pay
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/top-up-credit-concept-illustration_114360-7284.jpg?size=338&ext=jpg&ga=GA1.1.1852109835.1638216464" alt="" />
                    </div>
                </div>

        </div >
    );
};

export default payment;