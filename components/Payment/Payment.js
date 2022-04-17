import React from "react";
import { loadStripe } from "@stripe/stripe-js";
let stripePromice = null;

const Payment = () => {
  if (!stripePromice) {
    stripePromice = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromice;
};

export default Payment;
