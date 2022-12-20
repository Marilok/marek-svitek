import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const baseTheme = extendTheme({});
const theme = extendTheme(
  {},
  withProse({
    baseStyle: {
      li: {
        my: 0.5,
      },
    },
  })
);

export { baseTheme, theme };
