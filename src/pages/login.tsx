import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
} from '@chakra-ui/react';
import { DarkModeSwitch } from 'components/DarkModeSwitch';
import GradientHeading from 'components/GradientHeading';
import React, { useState } from 'react';
import { signIn, getCsrfToken } from 'next-auth/client'
import { useRouter } from 'next/router';

export default function SplitScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {query} = useRouter()
  
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      
      <Flex p={8} flex='1' align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
        <Flex justify='space-between'>
        <GradientHeading>Netpane</GradientHeading>
          <DarkModeSwitch />
        </Flex>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input value={username} onChange={e => setUsername(e.target.value)} type="username" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
          </FormControl>
          <Box>

            <Button onClick={() =>{signIn('local', { callbackUrl: '/', username, password })}} w='full' mt='6' colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '/sander-weeteling-KABfjuSOx74-unsplash.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}