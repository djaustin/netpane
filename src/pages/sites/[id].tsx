import { Button, ButtonGroup, Heading, Input, InputGroup, InputLeftAddon, Stack, ThemingProps, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import Case from "case";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import IPTable from "../../components/IPTable";
import { IPAddress, NetboxResponse, Prefix } from "../../models/netboxAPI";


const SitePage = ({addresses}) => {
  const { query } = useRouter();
  const [tableSize, setTableSize] = useState<ThemingProps<"Table">["size"]>('md')
  return (
    <>
      <Stack spacing={8} align={[null, null, null, 'center']} justify='space-between' direction={['column', null, null, 'row']}>
      <Heading bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text">{Case.title(query.id as string)}</Heading>
      <ButtonGroup isAttached size='sm' variant='outline'>
        <Button isActive={tableSize === 'sm'} onClick={() => setTableSize('sm')}>Compact</Button>
        <Button isActive={tableSize === 'md'} onClick={() => setTableSize('md')}>Standard</Button>
        <Button isActive={tableSize === 'lg'} onClick={() => setTableSize('lg')}>Comfortable</Button>
      </ButtonGroup>
      </Stack>
      <IPTable mt={8} tableProps={{size: tableSize}} addresses={addresses}/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const siteSlug = ctx.query.id as string;
  const sitePrefixResponse = await axios.get<NetboxResponse<Prefix>>(`http://localhost:8000/api/ipam/prefixes?site=${siteSlug}`, {headers: {Authorization: `Token 0123456789abcdef0123456789abcdef01234567`}})
  const prefixes = sitePrefixResponse.data.results.map(prefix => prefix.prefix)
  const ipRequestPromises = prefixes.map(prefix => axios.get<NetboxResponse<IPAddress>>(`http://localhost:8000/api/ipam/ip-addresses?parent=${prefix}`, {headers: {Authorization: `Token 0123456789abcdef0123456789abcdef01234567`}}))
  const ipResponses = await Promise.all(ipRequestPromises)
  const addresses = ipResponses.flatMap(response => response.data.results)
  return {
    props: {
      addresses
    }
  }
}

export default SitePage;
