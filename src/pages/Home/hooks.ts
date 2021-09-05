import { useQuery } from 'react-query'

import { GET_ALL_POKEMON } from './constants'
import { getAllPokemonApi, getPokemonApi } from './api'

export const usePokemons = () => {
  const {
    data,
    refetch: getAllPokemon,
    isLoading: getAllPokemonLoading,
  } = useQuery(GET_ALL_POKEMON, getAllPokemonApi)

  return {
    data,
    getAllPokemon,
    getAllPokemonLoading,
  }
}

export const useSearch = (name) => {
  const {
    data: searchData,
    refetch: getPokemon,
    isLoading: getPokemonLoading,
  } = useQuery(GET_ALL_POKEMON, () => getPokemonApi(name))

  return {
    searchData,
    getPokemon,
    getPokemonLoading,
  }
}
