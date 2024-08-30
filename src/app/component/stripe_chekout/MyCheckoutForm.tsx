"use client";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const MyCheckoutForm = ({ amount }: { amount: number }) => {
  console.log("MyCheckoutForm amount: ", amount);

  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log("MyCheckoutForm clientSecret: ", clientSecret);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  return (
    <div>
      <form>
        {clientSecret && <PaymentElement />}
        <button>Pay</button>
      </form>
    </div>
  );
};

export default MyCheckoutForm;
