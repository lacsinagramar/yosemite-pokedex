import React, { FC } from 'react'
import { Box, Container, Flex } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      backgroundColor="red.500"
      height="100px"
      clipPath="polygon(0 0, 100% 0, 100% 55%, 60% 55%, 50% 100%, 0 100%);"
      position="fixed"
      width="100%"
      zIndex={3}
    >
      <Container
        display="flex"
        color="white"
        py={2}
        px={4}
        alignItems="center"
        maxW={1200}
      >
        <Link to="/">
          <Flex
            width="80px"
            height="80px"
            backgroundColor="blue.400"
            borderWidth="3px"
            borderColor="gray.200"
            borderRadius="50%"
            boxShadow="12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset"
            justifyContent="center"
            alignItems="center"
            fontWeight={500}
          >
            Home
          </Flex>
        </Link>
        <Link to="/my-roster">
          <Flex
            ml={4}
            width="80px"
            height="60px"
            backgroundColor="orange.400"
            borderRadius="15px"
            justifyContent="center"
            alignItems="center"
            fontWeight={500}
            fontSize={12}
            _hover={{
              backgroundColor: 'orange.500',
            }}
          >
            My Roster
          </Flex>
        </Link>
        <Link to="#">
          <Flex
            ml={4}
            width="80px"
            height="60px"
            backgroundColor="yellow.400"
            borderRadius="15px"
            justifyContent="center"
            alignItems="center"
            fontWeight={500}
            fontSize={12}
            _hover={{
              backgroundColor: 'yellow.500',
            }}
          >
            Coming Soon
          </Flex>
        </Link>
        <Link to="#">
          <Flex
            ml={4}
            width="80px"
            height="60px"
            backgroundColor="green.500"
            borderRadius="15px"
            justifyContent="center"
            alignItems="center"
            fontWeight={500}
            fontSize={12}
            _hover={{
              backgroundColor: 'green.600',
            }}
          >
            Coming Soon
          </Flex>
        </Link>
      </Container>
    </Box>
  )
}

export default Header
