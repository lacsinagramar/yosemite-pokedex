import { getRequest } from 'src/helpers/http'

export const getAllPokemonApi = () => {
  return getRequest(`/pokemon?limit=900&offset=0`)
}

export const getPokemonApi = (name: string) => {
  return getRequest(`/pokemon/${name}`)
}
