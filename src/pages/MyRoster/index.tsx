import React, { FC, useEffect, useState } from 'react'
import { Grid, Heading, Stack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

import { getMyTeam, IPokemon } from 'src/helpers/storage'

import PokemonCard from 'src/components/molecules/PokemonCard'

const MyRoster: FC = () => {
  const [myTeam, setMyTeam] = useState<IPokemon[] | null>(null)

  useEffect(() => {
    const getTeam = async () => {
      const team = await getMyTeam()

      setMyTeam(team)
    }
    getTeam()
  }, [])

  return (
    <Stack>
      <Heading fontSize="24px" fontWeight={500}>
        My Roster - {myTeam?.length || 0} Pokémons
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {myTeam?.map((pokemon) => {
          const { id, name, types } = pokemon

          return (
            <Link key={`id-${id}`} to={`/pokemon/${id}`}>
              <PokemonCard
                pokemonId={Number(id)}
                pokemonName={name}
                types={types}
              />
            </Link>
          )
        })}
      </Grid>
    </Stack>
  )
}

export default MyRoster
