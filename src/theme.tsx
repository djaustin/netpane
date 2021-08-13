import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
  "3xl": "112em",
  "4xl": "130em",
  "5xl": "146em",
  "6xl": "160em"
})

const theme = extendTheme({breakpoints},withDefaultColorScheme({ colorScheme: "blue" }));

export default theme;
