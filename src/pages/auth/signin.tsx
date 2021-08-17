import { Flex, Image, Stack } from "@chakra-ui/react";
import LoginForm from "components/loginForm";
import Head from "next/head";
import React from "react";

const SignIn: React.FC = () => (
  <>
    <Head>
      <title>Sign in to Netpane</title>
    </Head>
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex="1" align={"center"} justify={"center"}>
        <LoginForm maxW="xl" />
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/sander-weeteling-KABfjuSOx74-unsplash.jpg"}
        />
      </Flex>
    </Stack>
  </>
);

export default SignIn;
