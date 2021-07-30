import {
  Text,
  Container,
  Input,
  InputLeftAddon,
  InputGroup,
  useColorModeValue,
  Button,
  Divider,
  Link,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import React from "react";

import { Hero } from "../components/Hero";
import NextLink from "next/link";
import { GetStaticProps } from "next";
import axios from "axios";
import SiteCard from "../components/SiteCard";
import Head from "next/head";

const Index = ({ sites }) => {
  const inputBackground = useColorModeValue("gray.200", "gray.800");

  return (
    <>
      <Head>
        <title>Netplane</title>
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
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((site) => (
            <Center key={site.name}>
              <SiteCard site={site} />
            </Center>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("http://localhost:8000/api/dcim/sites", {
    headers: {
      Authorization: `Token 0123456789abcdef0123456789abcdef01234567`,
    },
  });
  const sites = res.data.results.map((site) => ({
    name: site.display,
    vlanCount: site.vlan_count,
  }));
  return { props: { sites }, revalidate: 5 };
};
