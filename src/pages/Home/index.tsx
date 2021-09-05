import React, { FC, useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import { FaAngleLeft, FaAngleRight, FaSearch, FaSync } from 'react-icons/fa'
import { includes, lowerCase } from 'lodash'
import { Link } from 'react-router-dom'

import { getPokemonIdFromUrl, pokemonPerPage } from 'src/helpers/pokemon'

import Button from 'src/components/atoms/Button'
import Loader from 'src/components/molecules/Loader'
import PokemonCard from 'src/components/molecules/PokemonCard'

import { PokemonGeneralInfo } from './constants'
import { usePokemons } from './hooks'

const Home: FC = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const { data, getAllPokemon, getAllPokemonLoading } = usePokemons()

  const offset = (pageNumber - 1) * pokemonPerPage
  const offsetEnd = offset + pokemonPerPage

  const filteredData = data?.results.filter((pokemon) =>
    includes(pokemon.name, lowerCase(search))
  )
  const totalPokemonPages = Math.ceil(filteredData?.length / pokemonPerPage)
  const pokemons: PokemonGeneralInfo[] = filteredData?.slice(offset, offsetEnd)

  const searchRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * data.results.length + 1)
    setSearch(data.results[randomIndex].name)
  }

  useEffect(() => {
    getAllPokemon()
  }, [pageNumber])

  return (
    <Stack spacing={4}>
      <Heading>Pokédex</Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <InputGroup>
            <Input
              color="black"
              placeholder="Search a pokemon name..."
              _placeholder={{ color: 'gray' }}
              borderColor="black"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPageNumber(1)
              }}
            />
            <InputRightElement>
              <FaSearch color="gray.400" />
            </InputRightElement>
          </InputGroup>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          colStart={4}
          colSpan={3}
        >
          <Box mr={4}>
            <Flex alignItems="center">
              <Box fontSize={18}>Page</Box>
              <Input
                color="black"
                placeholder="Page"
                _placeholder={{ color: 'gray' }}
                borderColor="black"
                value={pageNumber}
                onChange={(e) => {
                  setPageNumber(Number(e.target.value))
                }}
                mx={2}
                maxW="55px"
              />
              <Box fontSize={18}>of {totalPokemonPages}</Box>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <IconButton
                size="md"
                fontSize="lg"
                variant="ghost"
                color="current"
                onClick={() => {
                  const prevPage = pageNumber - 1
                  if (prevPage) {
                    setPageNumber(prevPage)
                  }
                }}
                icon={<FaAngleLeft color="gray.400" />}
                aria-label={`Previous`}
              />
              <IconButton
                size="md"
                fontSize="lg"
                variant="ghost"
                color="current"
                marginLeft="2"
                onClick={() => {
                  const nextPage = pageNumber + 1
                  if (nextPage <= totalPokemonPages) {
                    setPageNumber(nextPage)
                  }
                }}
                icon={<FaAngleRight color="gray.400" />}
                aria-label={`Next`}
              />
            </Flex>
          </Box>
          <Button
            bgColor="blue.400"
            hoverBgColor="blue.500"
            onClick={searchRandomPokemon}
          >
            Get a Random Pokemon
            <FaSync color="white" style={{ marginLeft: 8 }} />
          </Button>
        </GridItem>
      </Grid>
      <Loader loader={getAllPokemonLoading}>
        {pokemons?.length ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {pokemons.map((pokemon) => {
              const { name, url } = pokemon
              const pokemonId = getPokemonIdFromUrl(url)

              return (
                <Link key={`id-${pokemonId}`} to={`/pokemon/${pokemonId}`}>
                  <PokemonCard
                    pokemonId={Number(pokemonId)}
                    pokemonName={name}
                  />
                </Link>
              )
            })}
          </Grid>
        ) : (
          <Flex
            alignItems="center"
            justifyContent="center"
            fontSize="17px"
            mt={4}
          >
            Nothing to show.
          </Flex>
        )}
      </Loader>
    </Stack>
  )
}

export default Home
