import * as React from "react";
import "../style.sass";
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import { Helmet } from "react-helmet";
import { Text, Center, Link, Stack } from "@chakra-ui/react";

// import "@fontsource/open-sans/600-normal.css"
// import "@fontsource/open-sans/700-normal.css"
// import "@fontsource/open-sans/800-normal.css"

const page = () => {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#01579B" />
        <meta charSet="utf-8" />
        <html lang="cs" />
        <title>Opuštěná stránka | Marek Svitek - Svíťa</title>
        <meta name="description" content="Ahoj!  &#128075; &#128187;" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#01579B" />
      </Helmet>

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
    </>
  );
};

export default page;
