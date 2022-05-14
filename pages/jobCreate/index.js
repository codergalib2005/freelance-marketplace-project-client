import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../components/Shared/Footer';
import Header from '../../components/Shared/Header';
import HeaderTop from '../../components/Shared/HeaderTop';

const JobCreate = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <HeaderTop />
            <Header />
            <div className='shadow-md'>
                <h2 className='text-xl text-[#2a3254] text-center p-5'>Create a Job Post</h2>
            </div>
            <form className='p-6' onSubmit={handleSubmit(onSubmit)}>
                <section className='border-2 border-zinc-400 border-dotted'>
                    <div className='px-5 py-10'>
                    <h2 className='text-lg text-black font-semibold text-left mb-4'> Job Description </h2>
                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'> Job Title:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("jobTtile")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'> Job Type:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("jobType")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2'>
                                <h4 className='text-base inline-block font-semibold'> salery</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="number" className='py-1 px-2 rounded-2 border border-[#2a3254] rounded-md shadow-base w-[90%] ml-8'  {...register("salery")} required />
                            </div>
                        </div> <br /> <br />
                    </div>
                </section>

                <section className='border-2 border-zinc-400 border-dotted'>
                 <div className='px-5 py-10'>
                 <h2 className='text-lg text-black font-semibold text-left mb-4'> About Company </h2>
                <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Your Image URL:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("jobType")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Company Name:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("companyName")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Company Description:</h4>
                            </div>
                            <div className='col-span-10 '>
                            <textarea className='py-1 px-2 rounded-2 border focus:outline-none  border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("companyDescription")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                            <div>
                            <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Your First Name:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("firstName")} required />
                            </div>
                        </div> 
                            </div>
                            
                              <div>
                              <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Your Last Name:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("lastName")} required />
                            </div>
                        </div> 
                              </div>
                        </div>

                        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-5'>
                            <div>
                            <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Your Role:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("role")} required />
                            </div>
                        </div> 
                            </div>

                              <div >
                              <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Your Email:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="email" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("email")} required />
                            </div>
                        </div> 
                              </div>
                        </div>

                        </div>
                </section>
        
                <section className='border-2 border-zinc-400 border-dotted'>
                <div className='px-5 py-10'>
                    <h2 className='text-lg text-black font-semibold text-left mb-4'> Responsibilities: </h2>

                    <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Responsibility1:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("responsibility1")} required />
                            </div>
                        </div> <br /> <br />

                    <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Responsibility2:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("responsibility2")} required />
                            </div>
                        </div> <br /> <br />

                    <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Responsibility3:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("responsibility3")} required />
                            </div>
                        </div> <br /> <br />

                </div>
                </section>

                <section className='border-2 border-zinc-400 border-dotted'>
                <div className='px-5 py-10'>
                    <h2 className='text-lg text-black font-semibold text-left mb-4'> Requirements: </h2>

                    <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Requirement1:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("requirement1")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Requirement2:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("requirement2")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Requirement3:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("requirement3")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Requirement4:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("requirement4")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Requirement5:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("requirement5")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Requirement6:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("requirement6")} />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Requirement7:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("requirement7")}  />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Requirement8:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("requirement8")}  />
                            </div>
                        </div> <br /> <br />

                    </div>
                </section>


                <section className='border-2 border-zinc-400 border-dotted'>
                <div className='px-5 py-10'>
                        <h2 className='text-lg text-black font-semibold text-left mb-4'>  Qualifications: </h2>
                      
                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Qualification1:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("qualification1")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Qualification2:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("qualification2")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Qualification3:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("qualification3")} required />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Qualification4:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("qualification4")}  />
                            </div>
                        </div> <br /> <br />

                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Qualification5:</h4>
                            </div>
                            <div className='col-span-10 '>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[90%] ml-8' {...register("qualification5")} />
                            </div>
                        </div> <br /> <br />

                  </div>
                    
                </section>

                <section className='border-2 border-zinc-400 border-dotted'>
                <div className='px-5 py-10'>
                    <h2 className='text-lg text-black font-semibold text-left mb-4'> Highlighted Techonology: </h2>

                     
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                            <div>
                            <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Techonology1:</h4>
                            </div>
                            <div className='col-span-10 ml-3'>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[80%] ml-8' {...register("techonology1")} required />
                            </div>
                        </div> 
                            </div>
                            
                              <div>
                              <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Techonology2:</h4>
                            </div>
                            <div className='col-span-10 ml-3'>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[80%] ml-8' {...register("techonology2")} required />
                            </div>
                        </div> 
                              </div>

                              <div>
                            <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Techonology3:</h4>
                            </div>
                            <div className='col-span-10 ml-3'>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[80%] ml-8' {...register("techonology3")} required />
                            </div>
                        </div> 
                            </div>

                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6'>
                            <div>
                            <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Techonology4:</h4>
                            </div>
                            <div className='col-span-10 ml-3'>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[80%] ml-8' {...register("techonology4")} required />
                            </div>
                        </div> 
                            </div>
                            
                              <div>
                              <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Techonology5:</h4>
                            </div>
                            <div className='col-span-10 ml-3'>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[80%] ml-8' {...register("techonology5")} />
                            </div>
                        </div> 
                              </div>

                              <div>
                            <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-2 '>
                                <h4 className='text-base inline-block font-semibold'>Techonology6:</h4>
                            </div>
                            <div className='col-span-10 ml-3'>
                                <input type="text" className='py-1 px-2 rounded-2 border-[1px] focus:outline-none border-[#2a3254] rounded-md shadow-xl w-[80%] ml-8' {...register("techonology6")}  />
                            </div>
                        </div> 
                            </div>

                        </div>

                    </div>        
                </section>
                <input className="text-white bg-purple-500 px-8 py-2 rounded-md font-bold text-center" type="submit" />
            </form>
            <Footer />
        </div>
    );
};

export default JobCreate;