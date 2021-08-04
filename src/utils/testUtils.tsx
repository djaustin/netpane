import { render } from "@testing-library/react";
import theme from "theme";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraWrapper = ({ children }) => (
  <ChakraProvider resetCSS theme={theme}>
    {children}
  </ChakraProvider>
);

const customRender = (ui, options?) =>
  render(ui, { wrapper: ChakraWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
