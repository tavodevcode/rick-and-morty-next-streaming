import { type CharacterResult } from '@/interfaces/character.interface'
import { API_URL } from '@/lib/constants'

export const getCharacters = async (): Promise<CharacterResult> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch(`${API_URL}/character`, { cache: 'no-store' })
  const episodies = await response.json()

  return episodies
}
