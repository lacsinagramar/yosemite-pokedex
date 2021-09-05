import React from 'react'
import { Box, Grid, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const PokemonCardsLoader = ({ loader: isLoading, children }) => {
  return isLoading ? (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <Box padding="6" boxShadow="lg" bg="white" borderRadius="15px">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white" borderRadius="15px">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white" borderRadius="15px">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white" borderRadius="15px">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </Grid>
  ) : (
    children
  )
}

export default PokemonCardsLoader
