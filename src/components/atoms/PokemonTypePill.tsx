import React, { FC } from 'react'
import { Box } from '@chakra-ui/react'

import { pokemonTypes } from 'src/helpers/pokemon'

interface IPokemonTypePill {
  type: string
}

const PokemonTypePill: FC<IPokemonTypePill> = ({ type }) => {
  const pokemonType = pokemonTypes.find((data) => data.type === type)
  const bgColor = pokemonType?.color
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={bgColor}
      textTransform="uppercase"
      color="white"
      width="80px"
      height="20px"
      fontWeight={500}
      borderRadius="5px"
    >
      {pokemonType?.type}
    </Box>
  )
}

export default PokemonTypePill
