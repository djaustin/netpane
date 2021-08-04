import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Site } from "models/__generated__/netboxAPI";
import NextLink from "next/link";
import { useEffect, useState } from "react";

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
  const cardBackground = useColorModeValue("white", "gray.700");

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
        <Link as={NextLink} href={`/sites/${site.slug}`}>
          <Button w={"full"} mt={8}>
            View
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
