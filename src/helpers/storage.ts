import localforage from 'localforage'

export interface IPokemon {
  id: number
  name: string
  types: string[]
}

export const addToMyTeam = async (pokemon: IPokemon) => {
  try {
    const currentTeam: IPokemon[] | null = await localforage.getItem('team')
    if (!currentTeam) {
      const team = [{ ...pokemon }]
      await localforage.setItem('team', team)
      return true
    }

    if (currentTeam.length !== 6) {
      const newTeam = [...currentTeam, { ...pokemon }]
      await localforage.setItem('team', newTeam)
      return true
    }

    return false
  } catch (e) {
    return false
  }
}

export const removeFromMyTeam = async (pokemonId: number) => {
  const currentTeam: IPokemon[] | null = await localforage.getItem('team')
  const filteredTeam = currentTeam?.filter((data) => data.id !== pokemonId)

  return await localforage.setItem('team', filteredTeam)
}

export const isPokemonInMyTeam = async (pokemonId: number) => {
  const currentTeam: IPokemon[] | null = await localforage.getItem('team')
  const isPokemonExisting = currentTeam?.find((data) => data.id === pokemonId)

  return !!isPokemonExisting
}

export const getMyTeam = async () => {
  const currentTeam: IPokemon[] | null = await localforage.getItem('team')

  return currentTeam
}
