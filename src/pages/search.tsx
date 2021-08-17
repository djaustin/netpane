import {
  Center,
  CircularProgress,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import GradientHeading from "components/GradientHeading";
import IPSearchPanel from "components/IPSearchPanel";
import SearchInput from "components/SearchInput";
import SiteSearchCard from "components/SiteSearchCard";
import VLANCard from "components/VLANCard";
import jsonFetcher from "integrations/jsonFetcher";
import { SearchResponse } from "models/SearchResponse";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import pluralize from "pluralize";
import React from "react";
import useSWR from "swr";

const SearchPage: React.FC = () => {
  const {
    query: { query: queryString, scope },
  } = useRouter();
  const { data, error } = useSWR<SearchResponse>(
    `/api/search?query=${queryString}&scope=${scope}`,
    jsonFetcher
  );

  const resultCount = () =>
    data.sites.length +
    data.vlans.length +
    data.ipAddresses.flatMap((e) => e.results).length;
  if (error) return <Error statusCode={500} />;
  return (
    <>
      <Head>
        <title>
          {data?.ipAddresses
            ? `${pluralize("result", resultCount(), true)} for '${queryString}'`
            : "Searching..."}
        </title>
      </Head>
      <Stack direction={{ base: "column", lg: "row" }} spacing={10}>
        <GradientHeading flexShrink={0}>
          {data
            ? resultCount() > 0
              ? `Search results for '${queryString}'`
              : `No results for '${queryString}'`
            : `Searching for '${queryString}'...`}
        </GradientHeading>
      </Stack>
      <SearchInput
        mt={4}
        hasButton
        align="flex-end"
        defaultCheckboxValue={(scope as string)?.split(",")}
      />
      {data ? (
        <Tabs mt="4">
          <TabList>
            {scope?.includes("ip-address") && (
              <Tab>
                IP Addresses{" "}
                {data &&
                  `(${data.ipAddresses.flatMap((e) => e.results).length})`}
              </Tab>
            )}
            {scope?.includes("site") && (
              <Tab>Sites {data && `(${data.sites.length})`}</Tab>
            )}
            {scope?.includes("vlan") && (
              <Tab>VLANs {data && `(${data.vlans.length})`}</Tab>
            )}
          </TabList>

          <TabPanels>
            {scope?.includes("ip-address") && (
              <TabPanel>
                <IPSearchPanel addresses={data.ipAddresses} />
              </TabPanel>
            )}
            {scope?.includes("site") && (
              <TabPanel>
                <SimpleGrid
                  spacing="5"
                  columns={{
                    base: 1,
                    lg: 2,
                    xl: 3,
                    "4xl": 4,
                    "5xl": 5,
                    "6xl": 6,
                  }}
                >
                  <>
                    {data.sites
                      .sort((a, b) => (a.display < b.display ? -1 : 1))
                      .map((site) => (
                        <SiteSearchCard key={site.id} site={site} />
                      ))}
                  </>
                </SimpleGrid>
              </TabPanel>
            )}
            {scope?.includes("vlan") && (
              <TabPanel>
                <SimpleGrid
                  gap={5}
                  columns={{
                    base: 1,
                    lg: 2,
                    xl: 3,
                    "4xl": 4,
                    "5xl": 5,
                    "6xl": 6,
                  }}
                >
                  {data.vlans
                    .sort((a, b) => a.vid - b.vid)
                    .map((vlan) => (
                      <VLANCard key={vlan.id} vlan={vlan} />
                    ))}
                </SimpleGrid>
              </TabPanel>
            )}
          </TabPanels>
        </Tabs>
      ) : (
        <Center h="90vh" w="100%">
          <CircularProgress isIndeterminate />
        </Center>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });
  if (!session)
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}${ctx.resolvedUrl}`,
        permanent: false,
      },
    };
  return {
    props: {},
  };
};

export default SearchPage;
