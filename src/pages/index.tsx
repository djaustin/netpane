import {
  Center,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import netboxAPI from "integrations/netboxAPI";
import { NetboxResponse, Site } from "models/__generated__/netboxAPI";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { Hero } from "../components/Hero";
import SiteCard from "../components/SiteCard";

type IndexProps = {
  sites: Site[]
}

const Index: React.FC<IndexProps> = ({ sites }) => {
  const inputBackground = useColorModeValue("gray.200", "gray.800");

  return (
    <>
      <Head>
        <title>Netpane</title>
      </Head>
      <Container centerContent>
        <Hero title="Netpane" />
        <InputGroup mt={5} border="2px" shadow="lg" rounded="lg">
          <InputLeftAddon border="none" borderRight="1px">
            <FiSearch />
          </InputLeftAddon>
          <Input
            border="none"
            placeholder='"192.168.1.39", "mysql-db01.qa.example.corp", "App Server"'
          />
        </InputGroup>
      </Container>
      <SimpleGrid mt={16} rowGap={10} columns={[1, null, null, 2, null, 3]}>
        {sites
          .sort((a, b) => (a.display < b.display ? -1 : 1))
          .map((site) => (
            <Center key={site.id}>
              <SiteCard site={site} />
            </Center>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const res = await netboxAPI.get<NetboxResponse<Site>>("/dcim/sites");
  const sites = res.data.results
  return { props: { sites }, revalidate: 5 };
};
