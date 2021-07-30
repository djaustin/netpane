import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'blue'}))

export default theme
