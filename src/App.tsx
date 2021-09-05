import React, { FC } from 'react'
import { Box, ChakraProvider, Container, extendTheme } from '@chakra-ui/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import colors from 'src/helpers/colors'

import Header from 'src/components/organisms/Header'

import Home from 'src/pages/Home'
import MyRoster from './pages/MyRoster'
import Pokemon from 'src/pages/Pokemon'

const theme = extendTheme({
  fonts: {
    body: `"M PLUS Rounded 1c", "sans-serif"`,
  },
  colors: {
    red: colors.red,
  },
})

const queryClient = new QueryClient()

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap"
        rel="stylesheet"
      />
      <BrowserRouter>
        <Box minH="100vh" backgroundColor="blue.100">
          <Header />
          <Container maxW={1200} color="black" py={6} pt="124px">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/pokemon/:pokemonId">
                <Pokemon />
              </Route>
              <Route exact path="/my-roster">
                <MyRoster />
              </Route>
            </Switch>
          </Container>
        </Box>
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
)

export default App
