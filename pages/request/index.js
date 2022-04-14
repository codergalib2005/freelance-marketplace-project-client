import React from 'react';
import styles from '../../styles/Request.module.css';

const Request = () => {
  return (
    <div className='p-12 container-fluid mx-auto	bg-neutral-100 min-h-screen'>
      <div className='p-12	bg-neutral-100 min-h-screen'>
        <h2 className='text-4xl font-bold font-sans'>What Service Are You Looking For?</h2>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8'>
          <form>
            <div className='p-10 bg-white mt-8'>
              <div className="">
                <h2 className="text-lg font-bold text-gray-600 mb-2">
                  Describe The Service You Are Looking
                </h2>
              </div>
              <div className="col-span-2 flex items-center">
                <textarea
                  required
                  className="outline-green-400 border border-gray-300 w-full"
                  name=""
                  id=""
                  rows="5"
                />
              </div>
              <div className='mt-5'>
                <input type="file" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
              </div>
              <hr className='mt-14' />
              <div>
                <h2 className='text-lg font-bold text-gray-600 mb-2 mt-4'>Choose Your Category</h2>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                  <div className='text-lg ml-5 '>
                    <select className={`outline-green-400 border border-gray-300 w-full ${styles.request_choose}`}>
                      <option value="Category">Category</option>
                      <option value="Web-Design">Web-Design</option>
                      <option value="Web DevelopMent">Web DevelopMent</option>
                    </select>
                  </div>
                  <div className='text-lg ml-5'>
                    <select className='outline-green-400 border border-gray-300 w-full'>
                      <option value="SUbCategory">SubCategory</option>
                      <option value="Templete design">Templete design</option>
                      <option value="MERN Developer">MERN Developer</option>
                    </select>
                  </div>
                </div>
                <hr className='mt-8' />
                <div>
                  <h2 className='text-lg font-bold text-gray-600 mb-2 mt-4'>Once You Place Your Order Would You Like Your Service Delivered? </h2>
                </div>
                <div className='mt-5'>
                  <ul className={`flex ${styles.request_services_days}`}>
                    <li><small>24 Hours</small></li>
                    <li><small>3 Days</small></li>
                    <li><small>7 Days </small></li>
                    <li><small>Other </small></li>
                  </ul>
                </div>
              </div>
              <hr className='mt-8' />
              <div>
                <h2 className='text-lg font-bold text-gray-600 mb-2 mt-4'>What your Budget For This Services? </h2>
                <div className="col-span-2 flex items-center mt-5">
                  <input
                    required
                    className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                    type="number"
                    placeholder="$"
                  />
                </div>
                <input
                  required
                  className="border outline-green-400 border-gray-300 px-2 w-8/12 md:w-6/12 lg:w-6/12 py-2"
                  type="number"
                  placeholder="$"
                />
              </div>
            </div>
            <hr className='mt-8' />
            <div className="mt-8 flex justify-end">
              <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
                Submit Request
              </button>
            </div>
          </form>
        </div>
        {/* image section */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className='h-full' src="/Request/Image/request-img.jpg" alt="" />
        </div>
      </div >
    </div >
  );
};

export default Request;