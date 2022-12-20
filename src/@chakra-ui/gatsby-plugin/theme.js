import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const baseTheme = extendTheme({}, withProse());
const theme = extendTheme({}, withProse());

export { baseTheme, theme };
