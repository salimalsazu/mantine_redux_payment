"use client";

import { Badge, Button, Card, Group, Text } from "@mantine/core";
import StripeCheckout from "../component/stripe_chekout/StripeCheckout";
import { useDisclosure } from "@mantine/hooks";

const PaymentCardPage = () => {
  
  
  //stripe Button
  const [opened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const amount = 1000;


  //Paypal Button

  
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
        <Button onClick={openDrawer} color="blue" fullWidth mt="md" radius="md">
          Book with paypal
        </Button>
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
