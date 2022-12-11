import * as React from "react";
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import { Text, Center, Link, Stack } from "@chakra-ui/react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import Seo from "../components/seo";

const page = () => {
  return (
    <Template>
      <Center maxW="full" h="87vh">
        <Stack>
          <Text fontSize="6xl">Na tomto teprv pracuji. 👷</Text>
          <OutboundLink
            target="_blank"
            href={"https://www.linkedin.com/in/mareksvitek/"}
          >
            <Link as={"textPath"} fontSize="3xl">
              Zatím můžeš mrknout na můj LinkedIn.
            </Link>
          </OutboundLink>
        </Stack>
      </Center>
    </Template>
  );
};

export const Head = () => <Seo title="Životopis | Marek Svitek - Svíťa" />;

export default page;
