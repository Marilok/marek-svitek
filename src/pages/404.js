import * as React from "react";
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import { Text, Center, Link, Stack } from "@chakra-ui/react";

import Seo from "../components/seo";

const NotFoundPage = ({ data }) => {
  return (
    <Template>
      <Center maxW="full" h="87vh">
        <Stack>
          <Text fontSize="6xl">Našel jsi opuštěnou stránku! 👻</Text>

          <Link to="" as={"textPath"} fontSize="3xl">
            Pokuď tě to tu děsí, můžeš se vrátit zpět na hlavní stránku. 😏
          </Link>
        </Stack>
      </Center>
    </Template>
  );
};

// export const Head = () => <Seo title="404: Not Found" />;
export const Head = () => (
  <Seo title="Opuštěná stránka | Marek Svitek - Svíťa" />
);

export default NotFoundPage;
