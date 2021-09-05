import React, { FC, useEffect, useState } from 'react'
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import {
  addToMyTeam,
  isPokemonInMyTeam,
  removeFromMyTeam,
} from 'src/helpers/storage'
import { getPokemonImage } from 'src/helpers/pokemon'

import BackButton from 'src/components/atoms/BackButton'
import Button from 'src/components/atoms/Button'
import Loader from 'src/components/molecules/Loader'
import PokemonTypePill from 'src/components/atoms/PokemonTypePill'

import { usePokemon } from './hooks'

const Pokemon: FC = () => {
  const { pokemonId } = useParams()
  const { getPokemonDetailsLoading, pokemonData } = usePokemon(pokemonId)
  const [isExistingInMyTeam, setIsExistingInMyTeam] = useState(false)
  const toast = useToast()

  const pokemonImage = getPokemonImage(pokemonId)
  const {
    name: pokemonName,
    abilities,
    types: rawTypes,
    stats,
  } = pokemonData ?? {}

  const visibleAbility = abilities?.find((ability) => !ability.is_hidden)
  const ability = visibleAbility?.ability.name
  const types = rawTypes?.map((data) => data.type.name)

  const addPokemon = async () => {
    const response = await addToMyTeam({
      id: pokemonId,
      name: pokemonName,
      types,
    })

    setIsExistingInMyTeam(response)
    if (response) {
      toast({
        title: 'Pokemon Added',
        description: 'Pokemon successfully added to your team!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Failed',
        description: 'You already have 6 pokemons in your team.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }
  const removePokemon = async () => {
    await removeFromMyTeam(pokemonId)

    setIsExistingInMyTeam(false)
    toast({
      title: 'Pokemon Removed',
      description: 'Pokemon successfully removed from your team!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  useEffect(() => {
    const checkIfExisting = async () => {
      const isExistingInMyTeam = await isPokemonInMyTeam(pokemonId)

      setIsExistingInMyTeam(isExistingInMyTeam)
    }
    checkIfExisting()
  }, [])

  return (
    <>
      <BackButton title="Back" />
      <Loader loader={getPokemonDetailsLoading}>
        <Flex justifyContent="space-between">
          <Box flex={0.45}>
            <AspectRatio ratio={1} maxW="250px" margin="auto">
              <Image src={pokemonImage} />
            </AspectRatio>
          </Box>
          <Stack flex={0.45} spacing={4}>
            <Flex justifyContent="flex-end">
              <Button
                disabled={!isExistingInMyTeam}
                bgColor="red.400"
                hoverBgColor="red.500"
                onClick={removePokemon}
                mr={2}
              >
                Remove from my team
              </Button>
              <Button
                disabled={isExistingInMyTeam}
                bgColor="green.400"
                hoverBgColor="green.500"
                onClick={addPokemon}
              >
                Add to my team
              </Button>
            </Flex>
            <Heading
              fontWeight={600}
              textTransform="capitalize"
              fontSize="24px"
            >
              Details
            </Heading>
            <Box backgroundColor="white" borderRadius="15px" p={4}>
              <Stack spacing={4}>
                <Heading
                  fontWeight={500}
                  textTransform="capitalize"
                  fontSize="24px"
                >
                  {pokemonName}
                  <Box
                    display="inline"
                    ml={2}
                    fontWeight={500}
                    textTransform="capitalize"
                    fontSize="24px"
                    color="blackAlpha.300"
                  >
                    #{pokemonId}
                  </Box>
                </Heading>
                <Box>
                  <Heading fontWeight={500} fontSize="18px">
                    Ability:
                    <Box
                      display="inline"
                      ml={2}
                      fontWeight={400}
                      textTransform="capitalize"
                      fontSize="18px"
                    >
                      {ability}
                    </Box>
                  </Heading>
                </Box>
                <Flex alignItems="center">
                  <Heading fontWeight={500} fontSize="18px">
                    Type:
                  </Heading>
                  {types?.map((type) => {
                    return (
                      <Box key={type} ml={2}>
                        <PokemonTypePill type={type} />
                      </Box>
                    )
                  })}
                </Flex>
                <Stack spacing={2}>
                  <Heading fontWeight={500} fontSize="18px">
                    Base Stats:
                  </Heading>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {stats?.map((data) => {
                      const value = data.base_stat
                      const statName = data.stat.name
                      return (
                        <Flex key={statName} ml={2}>
                          <Box
                            fontWeight={500}
                            fontSize="17px"
                            textTransform="capitalize"
                          >
                            {statName}:
                          </Box>
                          <Box fontWeight={400} fontSize="17px">
                            {value}
                          </Box>
                        </Flex>
                      )
                    })}
                  </Grid>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Loader>
    </>
  )
}

export default Pokemon
