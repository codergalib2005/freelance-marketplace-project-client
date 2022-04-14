import React from 'react';
import { Input } from 'antd';
import styles from '../../styles/payment.module.css'


const payment = () => {
    return (
        <div className='container-fluid mx-auto p-28'>
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