import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import jsonFetcher from "integrations/jsonFetcher";
import { Site } from "models/__generated__/netboxAPI";
import React from "react";
import { FiHome } from "react-icons/fi";
import useSWR from "swr";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NavItem from "./NavItem";
import SiteAccordion from "./SiteAccordion";
import UserDetails from "./UserDetails";

type SidebarContentProps = BoxProps & {
  onClose: () => void;
};

const SidebarContent = ({ onClose, ...rest }: SidebarContentProps) => {
  const { data } = useSWR<Site[]>("/api/sites", jsonFetcher);
  const hoverColor = useColorModeValue("blue.100", "blue.900");
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Box mx="4" mt="4">
        <UserDetails />
      </Box>
      <Flex
        my={5}
        alignItems="center"
        ml="8"
        mr="4"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Netpane
        </Text>
        <DarkModeSwitch />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex h="calc(100% - 120px)" overflowY="auto" mt={4} direction="column">
        <NavItem icon={FiHome} link="/">
          Home
        </NavItem>
        <SiteAccordion sites={data} hoverColor={hoverColor} />
      </Flex>
    </Box>
  );
};

export default SidebarContent;
