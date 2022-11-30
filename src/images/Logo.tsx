import * as React from "react";
import "@fontsource/barlow";
import "@fontsource/caveat";
import { Text, ChakraProvider, VStack } from "@chakra-ui/react";

export const Logo = (props: any) => {
  if (props.variant == "twoLines") {
    return (
      <VStack spacing={4}>
        <Text as={"span"} style={{ fontFamily: "Barlow", fontWeight: 900 }}>
          Marek Svitek
        </Text>
        <Text
          mt={5}
          color={"blue.400"}
          style={{
            fontFamily: "Caveat",
            position: "absolute",
            fontSize: "1.2em",
            fontWeight: 500,
            transform: "rotate(-10deg) translateY(-2px)",
          }}
        >
          Svíťa
        </Text>
      </VStack>
    );
  } else if (props.variant == "oneLine") {
    return (
      <Text style={{ margin: "0 24px 0 0" }}>
        <span style={{ fontFamily: "Barlow", fontWeight: 900 }}>
          Marek Svitek -{" "}
        </span>
        <Text
          as={"span"}
          color={"blue.400"}
          style={{
            fontFamily: "Caveat",
            position: "absolute",
            fontSize: "1.2em",
            fontWeight: 500,
            transform: "rotate(-10deg) translateY(-2px)",
          }}
        >
          Svíťa
        </Text>
      </Text>
    );
  }
};
