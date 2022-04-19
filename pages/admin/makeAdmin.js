import React, { useState } from 'react';
import { Alert, Input, message } from 'antd';
import styles from '../../styles/payment.module.css';
import axios from 'axios';


const admin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false)
    // const [admin, setadmin] = useState(`${Temail?.email}`);

    const handleONBlur = e =>{
        setEmail(e.target?.value)
    }

    const handleAdminSubmit= e =>{
        e.preventDefault()
        const User = {email}
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(User)
        })
        .then(res => res.json())
        .then(data => {
            setEmail(data)
            message.success('Admin Create successfully')
        }).catch(
          err =>{
            console.log(err)
          }
        )  
    }
    return (
        <div className='container-fluid mx-auto p-28 min-h-screen'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12'>
            <div className={`flex justify-center ${styles.payment_container}`}>
                <form onSubmit={handleAdminSubmit} >
                    
                    <br />
                    <Input placeholder="Your Email" type="email" onBlur={handleONBlur} />
                    <br />
                    
                    <div className="mt-8 flex justify-center">
                        <button type="submit" className="bg-green-500 text-white px-8 py-2 rounded-sm">
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
//admin create
// app.put('users/admin', async (req, res) =>{
//     const user = req.body;
//     const filter = {emeil: user.email};
//     const updateDoc = {$set: {role: 'admin'}};
//     const result = await usersCollection.updateOne(filter, updateDoc)
//     res.json(result)

// })


//check admin
// app.get('/users/:email', async (req, res) =>{
//     const email =  req.params.email;
//     const query  = {email: email};
//     const user = await usersCollection.findOne(query);
//     let isAdmin = false;
//     if(user?.role === 'admin'){
//         isAdmin= true
//     }
//     res.json9({admin: isAdmin});
// } )
