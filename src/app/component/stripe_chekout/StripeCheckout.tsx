"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import MyCheckoutForm from "./MyCheckoutForm";

// Correct the validation logic
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

if (!stripePublishableKey) {
  throw new Error("Stripe publishable key not found");
}

const stripePromise = loadStripe(stripePublishableKey);

const amount = 1000;

const StripeCheckout = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <MyCheckoutForm amount={amount} />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
