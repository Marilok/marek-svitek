import * as React from "react";
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import { Text, Center, Link, Stack } from "@chakra-ui/react";

import Seo from "../components/seo";

const Page = ({ data }) => {
  return (
    <Template>
      <Center maxW="full" h="87vh">
        <Stack>
          <Link to="Je%20Bitcoin%20lepší%20než%20FIAT.docx" as={"textPath"} fontSize="4xl">
            Stáhnout soubor.
          </Link>
        </Stack>
      </Center>
    </Template>
  );
};

export const Head = () => <Seo title="Je Bitcoin lepší než FIAT?" />;

export default Page;
