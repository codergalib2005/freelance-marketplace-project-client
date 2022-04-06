import React from 'react';
import { useForm } from 'react-hook-form';

const DeactiveAccount = () => {
    const { register, handleSubmit } = useForm();
    const deactiveAccount = data => {
        console.log(data)}
    return (
        <div>
            <hr />
                     <div className='d-flex'>
                          <p className='w-50'>ACCOUNT DEACTIVATION</p> 
                          <div>
                              <p>What happens when you deactivate your account?</p>
                              <ul>
                                  <li>Your profile and Gigs wont be shown on Fiverr anymore. </li>
                                  <li>Active orders will be cancelled.</li>
                                  <li>You wont be able to re-activate your Gigs.</li>
                              </ul>
                          </div>
                        </div>
                <form onSubmit={handleSubmit(deactiveAccount)}>
                    <div className='d-flex'>
                        <p className='w-50'>Im leaving because...</p>
                        <select {...register("reason")} className="form_label">
                                <option>
                                   Choose a reason
                                </option>
                                  {/* account */}
                                <optgroup label='Account'>
                                      <option value="1">Unsubscribe from fiver email</option>
                                      <option value="">I want to change my user name</option>
                                      <option value="">I have another account</option>
                                      <option value="">Others</option>
                                </optgroup>
                                  {/* selling */}
                                <optgroup label='Selling'>
                                      <option value="">Not getting enough orders</option>
                                      <option value="">Negetive experience with buyer/s</option>
                                      <option value="">I get too many orders</option>
                                      <option value="">Fiver is complicated or hard to use</option>
                                      <option value=""> I am unhappy with Fiverrs policies </option>
                                      <option value="">Others</option>
                                  </optgroup>
                                  {/* buying */}
                                <optgroup label='Selling'>
                                      <option value="">I cant get what I need on Fiverr</option>
                                      <option value="">Fiver is complicated or hard to use</option>
                                      <option value="">Negetive experience with seller/s</option>
                                      <option value="">Fiver is complicated or hard to use</option>
                                      <option value="">I am unhappy with Fiverrs policies</option>
                                      <option value="">Others</option>
                                </optgroup>
                                <option>
                                  Something else
                                </option>
                        </select>
                    </div>
                            <input className='btn btn-success' type="submit" value="Deactive Account" />
                </form> 
                  </div>
    );
};

export default DeactiveAccount;