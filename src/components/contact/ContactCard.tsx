"use client";
import {
  Card,
  Grid,
  Text,
  Flex,
  AspectRatio,
  Image,
  Tooltip,
  ActionIcon,
  Center,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconMail,
  IconBrandInstagram,
  IconRotateClockwise,
} from "@tabler/icons-react";
import { ContactLink } from "./ContactLink";
import NextImage from "next/image";

export function ContactCard() {
  return (
    <Card
      shadow="lg"
      padding="xl"
      withBorder
      style={{ aspectRatio: "17/11" }}
      mx="auto"
      pos="relative"
      className="hover:scale-105"
    >
      <Grid>
        <Grid.Col span={12}>
          <Text fw={"bold"} fz={"xl"} ta={"left"}>
            Marek Svitek
          </Text>
          <Text c="dimmed" ta={"left"} fz={"lg"}>
            CTO & Co-founder at Cognivibe
          </Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex gap="xs" direction="column">
            <ContactLink
              icon={<IconBrandLinkedin size={20} />}
              title="LinkedIn"
              subtitle="mareksvitek"
              href="https://linkedin.com/in/mareksvitek"
              color="blue"
              target="_blank"
            />

            <ContactLink
              icon={<IconMail size={20} />}
              title="Email"
              subtitle="marek@mareksvitek.cz"
              href="mailto:marek@mareksvitek.cz"
              color="red"
            />

            <ContactLink
              icon={<IconBrandInstagram size={20} />}
              title="Instagram"
              subtitle="@svitek.marek"
              href="https://instagram.com/svitek.marek"
              color="pink"
              target="_blank"
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex align="center" justify="center" direction="column">
            <AspectRatio
              ratio={1 / 1}
              pos={"relative"}
              className="justify-self-end self-center w-48 h-48"
            >
              <Image
                radius={"md"}
                component={NextImage}
                src="/hero.webp"
                alt="Headshot"
                fill
                objectFit="cover"
              />
            </AspectRatio>
            <Text ta="center" mt={"md"}>
              Signature
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
