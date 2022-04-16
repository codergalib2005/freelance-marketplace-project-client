import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;














// import React from 'react';
// import { Input } from 'antd';
// import styles from '../../styles/payment.module.css';


// const payment = () => {
//     return (
//         <div className='container-fluid mx-auto p-28'>

//                 <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12'>
//                     <div className={`flex justify-center ${styles.payment_container}`}>
//                         <form >
//                             <Input placeholder="Your Name" />
//                             <br />
//                             <br />
//                             <Input placeholder="Your Email" />
//                             <br />
//                             <br />
//                             <Input prefix="$" placeholder="Price" />
//                             <br />
//                             <br />
//                             <Input suffix="VISA" />
//                             <div className="mt-8 flex justify-center">
//                                 <button className="bg-green-500 text-white px-8 py-2 rounded-sm">
//                                     Pay
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                     <div>
//                         <img src="https://img.freepik.com/free-vector/top-up-credit-concept-illustration_114360-7284.jpg?size=338&ext=jpg&ga=GA1.1.1852109835.1638216464" alt="" />
//                     </div>
//                 </div>

//         </div >
//     );
// };

// export default payment;