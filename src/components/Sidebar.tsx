import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import React, { ReactNode, ReactText } from "react";
import { IconType } from "react-icons";
import { FiHome, FiMap, FiMapPin, FiMenu } from "react-icons/fi";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Site } from "models/__generated__/netboxAPI";
import jsonFetcher from "integrations/jsonFetcher";

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={4}>
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { data, error } = useSWR<Site[]>('/api/sites', jsonFetcher)
  const toast = useToast()
  const toastId = 'site-fetch-error'
  if(error && !toast.isActive(toastId)) {
    toast({
      id: toastId,
      description: 'Unable to fetch sites, please refresh to try again.',
      status: 'error',
      isClosable: true
    })
  }
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
      <Flex my={5} alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Netpane
        </Text>
        <Box display={{ base: "none", md: "block" }} alignItems='center'>
          <DarkModeSwitch />
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex h='full' overflowY='auto' mt={4} direction="column">
        <NavItem icon={FiHome} link={"/"}>
          Home
        </NavItem>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <Stack
              borderRadius="lg"
              spacing="0"
              _hover={{
                bg: hoverColor,
              }}
              align="center"
              direction="row"
              mt='1'
              mx="4"
              p="4"
            >
              <AccordionButton p='0'>
                 <Icon mr="4" fontSize="16" as={FiMap} />
                 <Box flex='1' textAlign='left'>
              
              Sites
                 </Box>
             
             
                <AccordionIcon />
              </AccordionButton>
            </Stack>

            <AccordionPanel pt='0' mt='0'>
              {data?.map((site) => (
                <NavItem
                  key={site.slug}
                  icon={FiMapPin}
                  link={`/sites/${site.slug}`}
                >
                  {site.display}
                </NavItem>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  link: string;
  children: ReactText;
}
const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  const { asPath: path } = useRouter();
  const isCurrentPage = path === link;
  const hoverColor = useColorModeValue("blue.100", "blue.900");
  const selectedColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Link as={NextLink} href={link} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mt={1}
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isCurrentPage ? selectedColor : undefined}
        _hover={{
          bg: hoverColor,
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" _groupHover={{}} as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
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
