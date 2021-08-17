import { Center, Container, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import GradientHeading from "components/GradientHeading";
import SearchInput from "components/SearchInput";
import SiteCardSkeleton from "components/SiteCardSkeleton";
import SiteSearchCard from "components/SiteSearchCard";
import jsonFetcher from "integrations/jsonFetcher";
import { Site } from "models/__generated__/netboxAPI";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import SiteCard from "../components/SiteCard";

const Index: React.FC = () => {
  const { data } = useSWR<Site[]>("/api/sites", jsonFetcher);
  return (
    <>
      <Head>
        <title>Netpane</title>
      </Head>
      <GradientHeading>Organisation Summary</GradientHeading>
      <HStack align="center" mt={5} w="100%">
        <SearchInput hasButton w="100%" />
      </HStack>
      <SimpleGrid
        spacing="5"
        mt={16}
        rowGap={10}
        columns={{
          base: 1,
          lg: 2,
          xl: 3,
          "3xl": 4,
          "4xl": 5,
          "5xl": 6,
          "6xl": 8,
        }}
      >
        {data ? (
          <>
            {data
              .sort((a, b) => (a.display < b.display ? -1 : 1))
              .map((site) => (
                <Flex key={site.id} justify="center">
                  <SiteCard site={site} />
                </Flex>
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

export default Index;
