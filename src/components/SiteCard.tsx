import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useTheme,
  Link,
} from "@chakra-ui/react";
import Case from "case";
import NextLink from "next/link";

const gradients = [
  `linear(to-t, #00C9FF, #92FE9D)`,
  `linear(to-tr, #00C9FF, #92FE9D)`,
  `linear(to-r, #00C9FF, #92FE9D)`,
  `linear(to-br, #00C9FF, #92FE9D)`,
  `linear(to-b, #00C9FF, #92FE9D)`,
  `linear(to-bl, #00C9FF, #92FE9D)`,
  `linear(to-l, #00C9FF, #92FE9D)`,
  `linear(to-tl, #00C9FF, #92FE9D)`,
  `linear(to-t, #3F2B96, #A8C0FF)`,
  `linear(to-tr, #3F2B96, #A8C0FF)`,
  `linear(to-r, #3F2B96, #A8C0FF)`,
  `linear(to-br, #3F2B96, #A8C0FF)`,
  `linear(to-b, #3F2B96, #A8C0FF)`,
  `linear(to-bl, #3F2B96, #A8C0FF)`,
  `linear(to-l, #3F2B96, #A8C0FF)`,
  `linear(to-tl, #3F2B96, #A8C0FF)`,
  `linear(to-t, #FDBB2D, #3A1C71)`,
  `linear(to-tr, #FDBB2D, #3A1C71)`,
  `linear(to-r, #FDBB2D, #3A1C71)`,
  `linear(to-br, #FDBB2D, #3A1C71)`,
  `linear(to-b, #FDBB2D, #3A1C71)`,
  `linear(to-bl, #FDBB2D, #3A1C71)`,
  `linear(to-l, #FDBB2D, #3A1C71)`,
  `linear(to-tl, #FDBB2D, #3A1C71)`,
  `linear(to-t, #0700b8, #00ff88)`,
  `linear(to-tr, #0700b8, #00ff88)`,
  `linear(to-r, #0700b8, #00ff88)`,
  `linear(to-br, #0700b8, #00ff88)`,
  `linear(to-b, #0700b8, #00ff88)`,
  `linear(to-bl, #0700b8, #00ff88)`,
  `linear(to-l, #0700b8, #00ff88)`,
  `linear(to-tl, #0700b8, #00ff88)`,
];

const colors = [
'red.700',
'orange.700',
'yellow.700',
'green.700',
'teal.700',
'blue.700',
'cyan.700',
'purple.700',
'pink.700',
]

export type SiteCardProps = {
  site: {
    name: string;
    ipCount: number;
    vlanCount: number;
  };
};

export default function SiteCard({ site }: SiteCardProps) {
  const theme = useTheme();
  const opacity = useColorModeValue(1, 0.5);
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      mt={12}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
    >

      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          name={site.name}
          
            border="4px solid white"
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {site.name}
          </Heading>
        </Stack>
        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{site.vlanCount}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              VLANs
            </Text>
          </Stack>
        </Stack>
        <Link as={NextLink} href={`/sites/${Case.lower(site.name)}`}>
          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("cyan.500", "cyan.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            View
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
