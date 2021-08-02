import {
  Button,
  ButtonGroup,
  Center,
  CircularProgress,
  Heading,
  HStack,
  Stack,
  Text,
  ThemingProps
} from "@chakra-ui/react";
import Case from "case";
import IPTable from "components/IPTable";
import netboxAPI from "integrations/netboxAPI";
import { IPTableItem } from "models/IPTableData";
import { NetboxResponse, Site } from "models/__generated__/netboxAPI";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useState } from "react";
import useSWR from "swr";

type SitePageProps = {
  site: Site
}

const SitePage = ({site}: SitePageProps) => {
  const { data, error } = useSWR<IPTableItem[]>(
    `/api/ip-addresses/${site.slug}`
  );
  const [tableSize, setTableSize] =
    useState<ThemingProps<"Table">["size"]>("md");
  const [tableVariant, setTableVariant] = useState<"striped" | "simple">(
    "simple"
  );

  return (
    <>
      <Head>
        <title>{site.display} IP Addresses</title>
      </Head>
      <Stack
        spacing={8}
        align={[null, null, null, "center"]}
        justify="space-between"
        direction={["column", null, null, "row"]}
      >
        <Heading
          bgGradient="linear(90deg, #00d2ff 0%, #3a47d5 100%)"
          bgClip="text"
        >
          {site.display}
        </Heading>
        <HStack spacing={2}>
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
        </HStack>
      </Stack>
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
              No results found. Create a VLAN with an IP address range in
              Netbox to view IP addresses here.
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
  const slug = ctx.query.slug as string
  const results = (await netboxAPI.get<NetboxResponse<Site[]>>(`/dcim/sites?slug=${slug}`)).data.results
  if (results.length <= 0) return {notFound: true}

  ctx.res.setHeader('Cache-Control', 'max-age=60, stale-while-revalidate=120')
  return {
    props: {
      site: results[0]
    }
  }

}
export default SitePage;
