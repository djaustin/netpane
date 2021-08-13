import { ChakraProvider, Progress } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SimpleSidebar from "../components/Sidebar";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const startLoad = () => {
      setLoading(true);
    };
    const endLoad = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", startLoad);
    Router.events.on("routeChangeComplete", endLoad);
    Router.events.on("routeChangeError", endLoad);
    return () => {
      Router.events.off("routeChangeStart", startLoad);
      Router.events.off("routeChangeComplete", endLoad);
      Router.events.off("routeChangeError", endLoad);
    };
  }, []);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Progress
          zIndex="9999"
          hidden={!loading}
          position="fixed"
          top="0"
          left="0"
          right="0"
          isIndeterminate
          size="xs"
        />
        {asPath === "/login" ? (
          <Component {...pageProps} />
        ) : (
          <SimpleSidebar>
            <Component {...pageProps} />
          </SimpleSidebar>
        )}
      </ChakraProvider>
    </>
  );
}

export default MyApp;
