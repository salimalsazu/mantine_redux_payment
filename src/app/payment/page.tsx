"use client";

import { Badge, Button, Card, Group, Text } from "@mantine/core";
import StripeCheckout from "../component/stripe_chekout/StripeCheckout";
import { useDisclosure } from "@mantine/hooks";
import { use, useEffect } from "react";
import { Form } from "@mantine/form";

const PaymentCardPage = () => {
  //stripe Button
  const [opened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const amount = 1000;

  // const handlePaypalSubmit = async (event: React.FormEvent) => {
  //   // Prevent the default form submission behavior
  //   event.preventDefault();

  //   try {
  //     const response = await fetch(serverUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to process PayPal payment.");
  //     }

  //     // Assuming the server returns a URL for the PayPal checkout
  //     const data = await response.json();
  //     if (data.url) {
  //       window.location.href = data.url; // Redirect the user to PayPal
  //     } else {
  //       console.error("Error: No URL returned from the server.");
  //     }
  //   } catch (error) {
  //     console.error("Error during PayPal payment:", error);
  //   }
  // };

  const handlePay = async () => {
    try {
      // Make a request to your backend to create a PayPal order
      const response = await fetch("http://localhost:7000/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("response: ", response);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Failed to create PayPal order.");
      }

      // Redirect to PayPal's approval URL
      window.location.href = response.url;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" grid justify-center items-center h-screen  ">
      <Card className="w-60" shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <p className="mx-auto">Tk {amount}</p>

        <Button onClick={openDrawer} color="blue" fullWidth mt="md" radius="md">
          Book with stripe
        </Button>

        <button
          onClick={handlePay}
          className="px-8 py-2 rounded-md text-white bg-blue-600 my-2"
        >
          Book with paypal
        </button>
      </Card>

      <div>
        <StripeCheckout
          opened={opened}
          closeDrawer={closeDrawer}
          amount={amount}
        />
      </div>
    </div>
  );
};

export default PaymentCardPage;
