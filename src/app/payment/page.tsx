"use client";

import { Badge, Button, Card, Group, Text } from "@mantine/core";
import StripeCheckout from "../component/stripe_chekout/StripeCheckout";

const PaymentCardPage = () => {
  return (
    <div className=" grid justify-center items-center h-screen  ">
      <Card className="w-60" shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Text size="xl" weight={700}>
            Payment
          </Text>
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book Now
        </Button>
      </Card>

      <div>
        <StripeCheckout />
      </div>
    </div>
  );
};

export default PaymentCardPage;
