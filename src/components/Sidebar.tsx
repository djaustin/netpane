import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import MobileNav from "./MobileNav";
import SidebarContent from "./SidebarContent";

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {/* Fixed sidebar on desktop/larger screens */}
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      {/* Drawer sidebar on mobile/smaller screens */}
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
      {/* Navbar at top of screen shown on mobile/smaller screens */}
      <MobileNav display={{ base: "flex", md: "none" }} onMenuClick={onOpen} />
      {/* box to store main page content */}
      <Box ml={{ base: 0, md: 60 }} p={4}>
        {children}
      </Box>
    </Box>
  );
}
