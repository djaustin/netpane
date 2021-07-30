import {
  Text,
  Container,
  Input,
  InputLeftAddon,
  InputGroup,
  useColorModeValue,
  Button,
  Divider,
  Link
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import React from "react";

import { Hero } from "../components/Hero";
import NextLink from "next/link";

const Index = () => {
  const inputBackground = useColorModeValue('gray.200', 'gray.800');

  return (<Container centerContent>
    <Hero title="Netpane" />
    <Text mt={8}>Get started with a search or view available sites</Text>
    <InputGroup mt={5} border='2px' shadow='lg' rounded='lg'>
      <InputLeftAddon border='none' borderRight='1px'>
        <FiSearch />
      </InputLeftAddon>
      <Input border='none' placeholder='"192.168.1.39", "mysql-db01.qa.example.corp", "App Server"' />
    </InputGroup>
  </Container>)
};

export default Index;
