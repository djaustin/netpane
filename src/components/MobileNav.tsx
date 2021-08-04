import {
  FlexProps,
  IconButton,
  useColorModeValue,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { DarkModeSwitch } from "./DarkModeSwitch";

type MobileNavProps = FlexProps & {
  onOpen: () => void;
};
const MobileNav = ({ onOpen, ...rest }: MobileNavProps) => {
  return (
    <Flex
      px={4}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="ghost"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontWeight="bold">
        Netpane
      </Text>
      <Box flexGrow={1} />
      <DarkModeSwitch />
    </Flex>
  );
};

export default MobileNav;
