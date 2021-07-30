import {
  Button,
  ButtonGroup,
  Heading,
  HStack, Stack,
  ThemingProps
} from "@chakra-ui/react";
import axios from "axios";
import Case from "case";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useState } from "react";
import IPTable from "../../components/IPTable";
import { IPAddress, NetboxResponse, Prefix } from "../../models/netboxAPI";

const SitePage = ({ addresses }) => {
  const { query } = useRouter();
  const [tableSize, setTableSize] =
    useState<ThemingProps<"Table">["size"]>("md");
  const [tableVariant, setTableVariant] = useState<"striped" | "simple">(
    "simple"
  );
  return (
    <>
      <Head>
        <title>{Case.title(query.id as string)} IP Addresses</title>
      </Head>
      <Stack
        spacing={8}
        align={[null, null, null, "center"]}
        justify="space-between"
        direction={["column", null, null, "row"]}
      >
        <Heading bgGradient="linear(90deg, #00d2ff 0%, #3a47d5 100%)" bgClip="text">
          {Case.title(query.id as string)}
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
      <IPTable
        mt={8}
        tableProps={{ size: tableSize, variant: tableVariant }}
        addresses={addresses}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const siteSlug = ctx.query.id as string;
  
  const sitePrefixResponse = await axios.get<NetboxResponse<Prefix>>(
    `http://localhost:8000/api/ipam/prefixes?site=${siteSlug}`,
    {
      headers: {
        Authorization: `Token 0123456789abcdef0123456789abcdef01234567`,
      },
    }
  );

  const prefixes = sitePrefixResponse.data.results.map(
    (prefix) => prefix.prefix
  );

  const ipRequestPromises = prefixes.map((prefix) =>
    axios.get<NetboxResponse<IPAddress>>(
      `http://localhost:8000/api/ipam/ip-addresses?parent=${prefix}`,
      {
        headers: {
          Authorization: `Token 0123456789abcdef0123456789abcdef01234567`,
        },
      }
    )
  );

  const ipResponses = await Promise.all(ipRequestPromises);
  const addresses = ipResponses.flatMap((response) => response.data.results);
  return {
    props: {
      addresses,
    },
  };
};

export default SitePage;
