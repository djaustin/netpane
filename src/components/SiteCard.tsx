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
import Case, { random } from "case";
import { Site } from "models/__generated__/netboxAPI";
import NextLink from "next/link";
import { useEffect, useState } from "react";

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
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
] as const;
export type SiteCardProps = {
  site: Site;
};

export default function SiteCard({ site }: SiteCardProps) {
  const [color, setColor] = useState<typeof colors[number]>("blue");
  const avatarBackground = useColorModeValue(`${color}.300`, `${color}.700`);
  const cardBackground = useColorModeValue("white", "gray.700")
  useEffect(() => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[colorIndex];
    setColor(randomColor);
  }, []);

  return (
    <Box
      maxW={"270px"}
      w={"full"}
      mt={12}
      bg={cardBackground}
      boxShadow={"2xl"}
      rounded={"md"}
    >
      <Flex justify={"center"} mt={-12}>
        <Avatar
          bg={avatarBackground}
          color={useColorModeValue("gray.700", "gray.200")}
          size={"xl"}
          name={site.name}
          borderWidth="8px"
          borderStyle="solid"
          borderColor={cardBackground}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {site.display}
          </Heading>
        </Stack>
        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>{site.vlan_count}</Text>
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
