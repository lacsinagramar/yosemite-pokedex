import { getRequest } from 'src/helpers/http'

export const getPokemonDetailsApi = (pokemonId) => {
  return getRequest(`pokemon/${pokemonId}`)
}
