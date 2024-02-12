import CharacterCard from './character-card'
import { getCharacters } from '@/services/character'

export default async function CharacterList (): Promise<React.ReactElement> {
  const characters = await getCharacters()

  return (

    <section className='w-full mt-10 grid grid-cols-3 justify-items-center gap-4'>
      {
        characters.results.map(character => <CharacterCard key={character.id} character={character}/>)
      }
    </section>
  )
}
