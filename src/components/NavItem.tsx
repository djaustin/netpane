import {
  Flex,
  FlexProps,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactText } from "react";
import { IconType } from "react-icons";
import NextLink from "next/link";

type NavItemProps = FlexProps & {
  icon?: IconType;
  link: string;
  children: ReactText;
};
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
        mt="1"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isCurrentPage && selectedColor}
        _hover={{
          bg: hoverColor,
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
export default NavItem;
