import {
  Button,
  ButtonGroup,
  Center,
  CircularProgress,
  HStack,
  Link,
  Stack,
  Text,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import GradientHeading from "components/GradientHeading";
import IPTable from "components/IPTable";
import config from "config";
import netboxAPI from "integrations/netboxAPI";
import { IPTableItem } from "models/IPTableData";
import { NetboxResponse, Site } from "models/__generated__/netboxAPI";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import useSWR from "swr";

type SitePageProps = {
  site: Site;
};

const SitePage = ({ site }: SitePageProps) => {
  const { query } = useRouter();
  const { data } = useSWR<IPTableItem[]>(
    query.vlanId
      ? `/api/ip-addresses/${site.slug}?vlanId=${query.vlanId}`
      : `/api/ip-addresses/${site.slug}`
  );
  const [tableSize, setTableSize] =
    useState<ThemingProps<"Table">["size"]>("md");
  const [tableVariant, setTableVariant] = useState<"striped" | "simple">(
    "simple"
  );
  const linkColor = useColorModeValue("blue.500", "blue.600");
  const openTab = (url) => {
    const win = window.open(url, "_blank");
    if (win) win.focus();
  };
  return (
    <>
      <Head>
        <title>
          {site.display} {query.vlanId && `VLAN ${query.vlanId}`} IP Addresses{" "}
        </title>
      </Head>
      <VStack align="start">
        <Stack
          w="full"
          spacing={8}
          align={[null, null, null, "center"]}
          justify="space-between"
          direction={["column", null, null, "row"]}
        >
          <GradientHeading>
            {site.display}
            {query.vlanId && ` (VLAN ${query.vlanId})`}
          </GradientHeading>
          <Stack direction={{ base: "column", lg: "row" }} spacing={2}>
            <ButtonGroup colorScheme="green" size="sm" spacing="2">
              <Button
                onClick={() =>
                  openTab(`${config.baseURL}/ipam/vlans/add?site=${site.id}`)
                }
                leftIcon={<FiPlus />}
              >
                VLAN
              </Button>
              <Button
                onClick={() =>
                  openTab(`${config.baseURL}/ipam/prefixes/add?site=${site.id}`)
                }
                leftIcon={<FiPlus />}
              >
                Subnet
              </Button>
            </ButtonGroup>
            <Stack direction={{ base: "column", lg: "row" }}>
              <ButtonGroup isAttached size="sm" variant="outline">
                <Button
                  isActive={tableVariant === "simple"}
                  onClick={() => setTableVariant("simple")}
                >
                  Simple
                </Button>
                <Button
                  isActive={tableVariant === "striped"}
                  onClick={() => setTableVariant("striped")}
                >
                  Striped
                </Button>
              </ButtonGroup>
              <ButtonGroup isAttached size="sm" variant="outline">
                <Button
                  isActive={tableSize === "sm"}
                  onClick={() => setTableSize("sm")}
                >
                  Compact
                </Button>
                <Button
                  isActive={tableSize === "md"}
                  onClick={() => setTableSize("md")}
                >
                  Standard
                </Button>
                <Button
                  isActive={tableSize === "lg"}
                  onClick={() => setTableSize("lg")}
                >
                  Comfortable
                </Button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </Stack>
      </VStack>

      {data ? (
        data.length > 0 ? (
          <IPTable
            mt={8}
            tableProps={{ size: tableSize, variant: tableVariant }}
            addresses={data}
            allowGlobalFilter
          />
        ) : (
          <Center h="90vh" w="100%">
            <Text size="lg">
              No results found.{" "}
              <Link
                isExternal
                fontWeight="bold"
                color={linkColor}
                href={config.baseURL}
              >
                Create IP addresses in Netbox
              </Link>
            </Text>
          </Center>
        )
      ) : (
        <Center h="90vh" w="100%">
          <CircularProgress isIndeterminate />
        </Center>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.query.slug as string;
  const results = (
    await netboxAPI.get<NetboxResponse<Site[]>>(`/dcim/sites?slug=${slug}`)
  ).data.results;
  if (results.length <= 0) return { notFound: true };

  ctx.res.setHeader("Cache-Control", "max-age=60, stale-while-revalidate=120");
  return {
    props: {
      site: results[0],
    },
  };
};
export default SitePage;
