import {
  Box,
  Center,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { VLAN } from "models/__generated__/netboxAPI";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

export type VLANCardProps = {
  vlan: VLAN;
};

const VLANCard: React.FC<VLANCardProps> = ({ vlan }) => {
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
          onClick={() =>
            router.push(`/sites/${vlan.site.slug}?vlanId=${vlan.vid}`)
          }
          cursor="pointer"
          w="100px"
          h="100px"
          borderRadius="md"
          bg={useColorModeValue("blue.300", "blue.600")}
        >
          <Text fontSize="3xl" fontWeight="bold">
            {vlan.vid}
          </Text>
        </Center>
        <VStack spacing="0" h="full" align="flex-start" justify="flex-start">
          <Text color={vlan.site && "blue.500"} fontSize="xs">
            {vlan.site ? 
             <Link as={NextLink} href={`/sites/${vlan.site.slug}`}>
             {vlan.site.display}
           </Link>
          : 
            "No site"
          }
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {vlan.site ? <Link
              as={NextLink}
              href={`/sites/${vlan.site.slug}?vlanId=${vlan.vid}`}
            >
              {vlan.name}
            </Link>
            :
            vlan.name
            }
          </Text>
          <Text pt="1" fontSize="sm">
            {vlan.description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default VLANCard;
