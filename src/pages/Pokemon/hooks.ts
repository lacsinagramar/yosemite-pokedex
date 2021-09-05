import { useQuery } from 'react-query'

import { GET_POKEMON_DETAILS } from './constants'
import { getPokemonDetailsApi } from './api'

export const usePokemon = (pokemonId: number) => {
  const { data: pokemonData, isLoading: getPokemonDetailsLoading } = useQuery(
    GET_POKEMON_DETAILS,
    () => getPokemonDetailsApi(pokemonId)
  )

  return { getPokemonDetailsLoading, pokemonData }
}
