import { type CharacterResult } from '@/interfaces/character.interface'
import { API_URL } from '@/lib/constants'

export const getEpisodies = async (): Promise<CharacterResult> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(`${API_URL}/episode`)
  const episodies = await response.json()

  return episodies
}
