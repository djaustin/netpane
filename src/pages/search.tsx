import {
  Box,
  Button,
  Center,
  CircularProgress,
  Heading,
  HStack,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import IPTable from "components/IPTable";
import jsonFetcher from "integrations/jsonFetcher";
import { SearchResult } from "models/SearchResult";
import Head from "next/head";
import Error from "next/error";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import NextLink from "next/link";
import { FiArrowRight } from "react-icons/fi";
import pluralize from "pluralize";

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
            ? `(${resultCount(data)}) '${query.query}' ${pluralize(
                "result",
                resultCount(data)
              )}`
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
              }'`
            : `No results for '${query.query}'`
          : `Searching for '${query.query}'...`}
      </Heading>
      {data ? (
        data
          .sort((a, b) => (a.site.display < b.site.display ? -1 : 1))
          .map((result) => {
            return (
              <Box key={result.site.id} mt={10}>
                <HStack align="baseline" spacing={4}>
                  <Heading size="lg">{result.site.display}</Heading>
                    <Link as={NextLink} href={`/sites/${result.site.slug}`}>
                      <Button variant="link">
                        <FiArrowRight />
                      </Button>
                    </Link>
                </HStack>
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
