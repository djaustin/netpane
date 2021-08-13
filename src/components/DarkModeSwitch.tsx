import { Button, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label={useColorModeValue("enable dark mode", "enable light mode")}
      variant="ghost"
      onClick={toggleColorMode}
      icon={isDark ? <FiSun /> : <FiMoon />}
    />
  );
};
