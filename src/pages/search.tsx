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
} from "@chakra-ui/react";
import IPTable from "components/IPTable";
import jsonFetcher from "integrations/jsonFetcher";
import { SearchResult } from "models/SearchResult";
import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import pluralize from "pluralize";
import React from "react";
import useSWR from "swr";

const SearchPage: React.FC = () => {
  const { query } = useRouter();
  const { data, error } = useSWR<SearchResult[]>(
    `/api/search?query=${query.query}`,
    jsonFetcher
  );

  const resultCount = (data) => data.flatMap((result) => result.results).length;
  if (error) return <Error statusCode={500} />;
  return (
    <>
      <Head>
        <title>
          {data
            ? `${pluralize("result", resultCount(data), true)} for '${
                query.query
              }'`
            : "Searching..."}
        </title>
      </Head>
      <Heading
        bgGradient="linear(90deg, #00d2ff 0%, #3a47d5 100%)"
        bgClip="text"
      >
        {data
          ? data.length > 0
            ? `${pluralize("result", resultCount(data), true)} for '${
                query.query
              }' in ${pluralize("site", data.length, true)}`
            : `No results for '${query.query}'`
          : `Searching for '${query.query}'...`}
      </Heading>
      {data ? (
        <Accordion defaultIndex={data.map((_, i) => i)} allowMultiple mt={10}>
          {data
            .sort((a, b) => (a.site.display < b.site.display ? -1 : 1))
            .map((result) => {
              return (
                <AccordionItem key={result.site.id}>
                  <AccordionButton>
                    <HStack w="full" justify="space-between">
                      <Heading size="lg">{`${result.site.display} (${result.results.length})`}</Heading>
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
      ) : (
        <Center h="90vh" w="100%">
          <CircularProgress isIndeterminate />
        </Center>
      )}
    </>
  );
};

export default SearchPage;
