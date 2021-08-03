import { Center, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import SearchInput from "components/SearchInput";
import SiteCardSkeleton from "components/SiteCardSkeleton";
import jsonFetcher from "integrations/jsonFetcher";
import { Site } from "models/__generated__/netboxAPI";
import Head from "next/head";
import React from "react";
import useSWR from "swr";
import { Hero } from "../components/Hero";
import SiteCard from "../components/SiteCard";

const Index: React.FC = () => {
  const { data } = useSWR<Site[]>("/api/sites", jsonFetcher);

  if (data) console.log(data);
  return (
    <>
      <Head>
        <title>Netpane</title>
      </Head>
      <Container centerContent>
        <Hero title="Netpane" />
        <HStack align="center" mt={5} w="100%">
          <SearchInput hasButton w="full" />
        </HStack>
      </Container>
      <SimpleGrid mt={16} rowGap={10} columns={[1, null, null, 2, null, 3]}>
        {data ? (
          <>
            {data
              .sort((a, b) => (a.display < b.display ? -1 : 1))
              .map((site) => (
                <Center key={site.id}>
                  <SiteCard site={site} />
                </Center>
              ))}
          </>
        ) : (
          <>
            <Center>
              <SiteCardSkeleton />
            </Center>
            <Center>
              <SiteCardSkeleton />
            </Center>
            <Center>
              <SiteCardSkeleton />
            </Center>
            <Center>
              <SiteCardSkeleton />
            </Center>
          </>
        )}
      </SimpleGrid>
    </>
  );
};

export default Index;
