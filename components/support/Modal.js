// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { message, Button } from "antd";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// export default function Modal({ open, setOpen, name }) {
//   const { register, handleSubmit, reset } = useForm();
//   const onSubmit = (data) => {
//     data.receiver = name;
//     // sending data to backend
//     axios
//       .post(`${process.env.NEXT_PUBLIC_API_URL}/support`, data)
//       .then((res) => {
//         if (res.data._id) {
//           message.success("Message was successfully sent!", 5);
//           setOpen(false);
//           reset();
//         } else {
//           message.warning("There was an error!", 5);
//         }
//       });
//   };
//   const sendMessage = (e) => {
//     e.preventDefault();
//   };

//   return (
//     // <Transition.Root show={true | false} as={Fragment}>
//     <>
//       <Dialog
//         as="div"
//         className="relative z-10"
//         // initialFocus={cancelButtonRef}
//         onClose={open}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed z-10 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span
//               className="hidden sm:inline-block sm:align-middle sm:h-screen"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             {/* <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             > */}
//             <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4  sm:pb-2">
//                 <form className="pr-4" onSubmit={handleSubmit(onSubmit)}>
//                   <div className="sm:flex sm:items-start">
//                     <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//                         />
//                       </svg>
//                     </div>
//                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                       <Dialog.Title
//                         as="h3"
//                         className="text-lg leading-6 font-medium text-gray-900"
//                       >
//                         You are going to send message to <b>{name}</b>
//                       </Dialog.Title>
//                       <div className="mt-8 ">
//                         <div className="flex gap-4">
//                           <input
//                             {...register("sender")}
//                             required
//                             className="border border-gray-500 rounded-lg py-2 px-3 w-6/12 outline-none"
//                             type="text"
//                             placeholder="Name.."
//                           />
//                           <input
//                             {...register("email")}
//                             required
//                             className="border border-gray-500 rounded-lg py-2 px-3 w-6/12 outline-none"
//                             type="email"
//                             placeholder="Email.."
//                           />
//                         </div>
//                         <input
//                           {...register("title")}
//                           required
//                           className="border border-gray-500 rounded-lg w-full mt-4 py-2 px-3 outline-none"
//                           type="text"
//                           placeholder="Title.."
//                         />
//                         <input
//                           {...register("subject")}
//                           required
//                           className="border border-gray-500 mt-4 py-2 px-3 rounded-lg w-full outline-none"
//                           type="text"
//                           placeholder="Subject.."
//                         />

//                         <textarea
//                           {...register("message")}
//                           required
//                           className="border border-gray-500 mt-4 py-2 px-3 rounded-lg w-full h-24 outline-none"
//                           placeholder="Message"
//                           style={{
//                             resize: "none",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mt-4">
//                     <input
//                       value="Send Message"
//                       type="submit"
//                       className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
//                     />

//                     <button
//                       type="button"
//                       className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                       onClick={() => setOpen(false)}
//                       // ref={cancelButtonRef}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </Dialog.Panel>
//             {/* </Transition.Child> */}
//           </div>
//         </div>
//         {/* </Transition.Root> */}
//       </Dialog>
//     </>
//   );
// }

import React from 'react';

const Modal2 = () => {
  return (
    <div>
      
    </div>
  );
};

export default Modal2;
