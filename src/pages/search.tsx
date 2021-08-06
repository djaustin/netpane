import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Center,
  CircularProgress,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import GradientHeading from "components/GradientHeading";
import IPTable from "components/IPTable";
import SearchInput from "components/SearchInput";
import SiteSearchCard from "components/SiteSearchCard";
import VLANCard from "components/VLANCard";
import jsonFetcher from "integrations/jsonFetcher";
import { SearchResponse } from "models/SearchResponse";
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
          {data ? resultCount() > 0
              ? `Search results for '${queryString}'`
              : `No results for '${queryString}'`
            : `Searching for '${queryString}'...`}
        </GradientHeading>
      </Stack>
      <SearchInput
        mt={4}
        hasButton
        align="flex-start"
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
                <Accordion
                  defaultIndex={data.ipAddresses.map((_, i) => i)}
                  allowMultiple
                >
                  {data?.ipAddresses
                    .sort((a, b) => (a.site.display < b.site.display ? -1 : 1))
                    .map((result) => {
                      return (
                        <AccordionItem key={result.site.id}>
                          <AccordionButton>
                            <HStack w="full" justify="space-between">
                              <Heading size="md">{`${result.site.display} (${result.results.length})`}</Heading>
                              <AccordionIcon />
                            </HStack>
                          </AccordionButton>
                          <AccordionPanel pt={0}>
                            <IPTable pb={10} addresses={result.results} />
                          </AccordionPanel>
                        </AccordionItem>
                      );
                    })}
                </Accordion>
              </TabPanel>
            )}
            {scope?.includes("site") && (
              <TabPanel>
                <SimpleGrid gap={5} columns={[1, null, null, 2, null, 3]}>
                  <>
                    {data?.sites
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
                <SimpleGrid gap={5} columns={[1, null, null, 2, null, 3]}>
                  {data?.vlans.map((vlan) => (
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

export default SearchPage;
