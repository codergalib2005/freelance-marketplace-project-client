import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateProfile = () => {
    const { register, handleSubmit } = useForm();
    const updateStatus = data => {
        console.log(data)
     };
    return (
        <div>
            <label >Need to update your public profile? Go to My Profile</label>
                <hr />
                <div className="container">
                    <form onSubmit={handleSubmit(updateStatus)}>
                          <div className='d-flex'>
                          <p className='me-5 w-50'>Full Name</p> <input type="text" {...register("name")} placeholder="Your Full Name" />
                          </div>
                          <div className='d-flex'>
                          <p className='me-5 w-50'>Email</p> <input type="email" {...register("email")} placeholder="Email" />
                          </div>
                        <div className='d-flex'>
                             <div className='me-5'>
                             <p>ONLINE STATUS <br />
                          <small>When online, your Gigs are visible under <br /> the Online search filter.</small></p>
                             </div>
                            <select {...register("status")} className="form_label h-50">
                                <option>
                                    GO OFFLINE FOR..
                                  </option>
                                  <option value="1 hour">1 HOUR</option>
                                  <option value="1 day">1 DAY
                                </option>
                                  <option value="1 week">1 WEEK
                                </option>
                                  <option value="forever">FOREVER
                                </option>
                            </select>
                        </div>
                        <div>
                            <input className='btn btn-success' type="submit" value="Login" />
                        </div>
                    </form>
        </div>
        </div>
    );
};

export default UpdateProfile;