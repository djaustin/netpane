import { useColorMode, Switch, Button } from "@chakra-ui/react";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Button variant="ghost" onClick={toggleColorMode}>
      {isDark ? <FiSun /> : <FiMoon />}
    </Button>
  );
};
