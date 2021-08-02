import {
  Box,
  Center,
  CircularProgress,
  Divider,
  Heading,
} from "@chakra-ui/react";
import IPTable from "components/IPTable";
import jsonFetcher from "integrations/jsonFetcher";
import { SearchResult } from "models/SearchResult";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const SearchPage: React.FC = () => {
  const { query } = useRouter();
  const { data, error } = useSWR<SearchResult[]>(
    `/api/search?query=${query.query}`,
    jsonFetcher
  );
  return (
    <>
      <Head>
        <title>
          {data
            ? `(${data.flatMap((result) => result.results).length}) Results`
            : "Searching..."}
        </title>
      </Head>
      <Heading
        bgGradient="linear(90deg, #00d2ff 0%, #3a47d5 100%)"
        bgClip="text"
      >
        {data
          ? data.length > 0
            ? `Search results for '${query.query}'`
            : `No results for '${query.query}'`
          : `Searching for '${query.query}'...`}
      </Heading>
      {data ? (
        data
          .sort((a, b) => (a.site.display < b.site.display ? -1 : 1))
          .map((result) => {
            return (
              <Box key={result.site.id} mt={10}>
                <Heading size="lg">{result.site.display}</Heading>
                <IPTable mt={4} addresses={result.results} />
              </Box>
            );
          })
      ) : (
        <Center h="90vh" w="100%">
          <CircularProgress isIndeterminate />
        </Center>
      )}
    </>
  );
};

export default SearchPage;
