import { ChakraProvider, Progress } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import SimpleSidebar from '../components/Sidebar'
import Router from "next/router";
import { useEffect, useState } from 'react';

function MyApp ({ Component, pageProps }: AppProps) {
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
    <ChakraProvider resetCSS theme={theme}>
      <Progress zIndex='9999' hidden={!loading} position='fixed' top='0' left='0' right='0' isIndeterminate size='xs'/>
      <SimpleSidebar>
        <Component {...pageProps} />
      </SimpleSidebar>
    </ChakraProvider>
  )
}

export default MyApp
