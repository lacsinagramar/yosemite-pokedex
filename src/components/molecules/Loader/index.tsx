import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

const Loader = ({ loader: isLoading, children }) => {
  return isLoading ? (
    <Flex alignItems="center" justifyContent="center" p={8}>
      <Spinner size="xl" />
    </Flex>
  ) : (
    children
  )
}

export default Loader
