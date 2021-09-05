import React, { FC } from 'react'
import { AspectRatio, Box, Flex, Heading, Image, Stack } from '@chakra-ui/react'

import { getPokemonImage } from 'src/helpers/pokemon'

import PokemonTypePill from 'src/components/atoms/PokemonTypePill'

interface IPokemonCard {
  pokemonId: number
  pokemonName: string
  types?: string[]
}

const PokemonCard: FC<IPokemonCard> = ({ pokemonId, pokemonName, types }) => {
  const pokemonImage = getPokemonImage(pokemonId)
  return (
    <Stack py={4} px={6} w="100%" bg="white" borderRadius="15px">
      <AspectRatio ratio={1}>
        <Image src={pokemonImage} />
      </AspectRatio>
      <Stack>
        <Heading
          fontSize="16px"
          fontWeight="600"
          textTransform="capitalize"
          color="blackAlpha.300"
        >
          #{pokemonId}
        </Heading>
        <Heading fontSize="16px" fontWeight="600" textTransform="capitalize">
          {pokemonName}
        </Heading>
        <Flex>
          {types?.map((type, index) => (
            <Box key={type} ml={!index ? 0 : 2}>
              <PokemonTypePill type={type} />
            </Box>
          ))}
        </Flex>
      </Stack>
    </Stack>
  )
}

export default PokemonCard
