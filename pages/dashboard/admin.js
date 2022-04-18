import React, { useState } from 'react';
import { Input } from 'antd';
import styles from '../../styles/payment.module.css';

const admin = () => {
    const [email, setEmail] = useState('');

    const handleONBlur = e =>{
        setEmail(e.target?.value)
    }

    const handleAdminSubmit= e =>{
        const user = {email}
        fetch('', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
           console.log(data);
        })
        e.preventDefault()
    }
    return (
        <div className='container-fluid mx-auto p-28 min-h-screen'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12'>
            <div className={`flex justify-center ${styles.payment_container}`}>
                <form onSubmit={handleAdminSubmit} >
                    {/* <Input placeholder="Your Name"  /> */}
                    <br />
                    <br />
                    <Input placeholder="Your Email" type="email" onBlur={handleONBlur} />
                    <br />
                    
                    <div className="mt-8 flex justify-center">
                        <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
                            Make Admin
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

export default admin;

// app.put('users/admin', async (req, res) =>{
//     const user = req.body;
//     const filter = {emeil: user.email};
//     const updateDoc = {$set: {role: 'admin'}};
//     const result = await usersCollection.updateOne(filter, updateDoc)
//     res.json(result)

// })