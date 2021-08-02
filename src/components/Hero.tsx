import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height={200}
    bgGradient="linear(90deg, #00d2ff 0%, #3a47d5 100%)"
    bgClip="text"
  >
    <Heading fontSize={['6xl', '9xl']}>{title}</Heading>
  </Flex>
)
