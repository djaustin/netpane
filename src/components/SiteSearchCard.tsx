import {
  Box,
  Center,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Site } from "models/__generated__/netboxAPI";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

export type SiteSearchCardProps = {
  site: Site;
};

const SiteSearchCard: React.FC<SiteSearchCardProps> = ({ site }) => {
  const router = useRouter();
  return (
    <Box
      p="4"
      boxShadow="md"
      borderRadius="md"
      bg={useColorModeValue("white", "gray.700")}
    >
      <HStack spacing="4" align="flex-start">
        <Center
          flexShrink={0}
          onClick={() => router.push(`/sites/${site.slug}`)}
          cursor="pointer"
          w="100px"
          h="100px"
          borderRadius="md"
          bg={useColorModeValue("blue.300", "blue.600")}
        >
          <Text fontSize="3xl" fontWeight="bold">
            {site.display
              .split(" ")
              .map((e) => e[0])
              .join("")}
          </Text>
        </Center>
        <VStack spacing="0" h="full" align="flex-start" justify="flex-start">
          <Text fontSize="2xl" fontWeight="bold">
            <Link as={NextLink} href={`/sites/${site.slug}`}>
              {site.display}
            </Link>
          </Text>
          <Text pt="1" fontSize="sm">
            {site.description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default SiteSearchCard;
