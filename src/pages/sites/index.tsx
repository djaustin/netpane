import {
  Box,
  Center,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import useAxios from "axios-hooks";
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType } from "next";
import NextLink from "next/link";
import React from "react";
import Case from "case";
import SiteCard from "../../components/SiteCard";

const SitesPage = ({ sites }) => (
    <SimpleGrid rowGap={10} columns={[1, null, null, 2, null, 3]}>
      {sites
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .map((site) => (
            <Center>
                <SiteCard site={site} />
            </Center>
        ))}
    </SimpleGrid>
);

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios
    .get('http://localhost:8000/api/dcim/sites', {
      headers: {
        'Authorization': `Token 0123456789abcdef0123456789abcdef01234567` 
      }})
const sites = res.data.results.map(site => ({
    name: site.display,
    vlanCount: site.vlan_count
}))
  return { props: { sites }, revalidate: 5 };
};
export default SitesPage;
