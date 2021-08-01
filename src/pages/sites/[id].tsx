import {
  Button,
  ButtonGroup,
  Center,
  CircularProgress,
  Heading,
  HStack,
  Stack,
  ThemingProps,
} from "@chakra-ui/react";
import Case from "case";
import IPTable from "components/IPTable";
import { IPTableItem } from "models/IPTableData";
import { useRouter } from "next/dist/client/router";
import Error from "next/error";
import Head from "next/head";
import React, { useState } from "react";
import useSWR from "swr";

const SitePage = () => {
  const { query } = useRouter();
  const { data, error } = useSWR<IPTableItem[]>(
    `/api/ip-addresses/${query.id}`
  );
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
        <Heading
          bgGradient="linear(90deg, #00d2ff 0%, #3a47d5 100%)"
          bgClip="text"
        >
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
      {data ? (
        <IPTable
          mt={8}
          tableProps={{ size: tableSize, variant: tableVariant }}
          addresses={data}
        />
      ) : (
        <Center h="90vh" w="100%">
          <CircularProgress isIndeterminate />
        </Center>
      )}
    </>
  );
};

export default SitePage;
