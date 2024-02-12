import { Status, type Character } from '@/interfaces/character.interface'

const status = {
  [Status.Alive]: 'bg-green-500',
  [Status.Dead]: 'bg-red-500',
  [Status.Unknown]: 'bg-gray-500'
}

export default function CharacterCard ({ character }: { character: Character }): JSX.Element {
  return (
    <div className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 active:scale-95 duration-300">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={character.image}
        alt={`${character.name} image from Rick and Morty series`}
      />
      <div className="w-full h-full flex flex-col p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ character.name }</h5>
        <p className="flex gap-2 items-center mb-6 font-normal text-gray-700 dark:text-gray-400">
          <span className={`${status[character.status]} w-[15px] h-[15px] rounded-full`}></span>
          { character.status } - { character.species }
        </p>
        <h3 className='text-slate-800 font-bold mb-2'>Visto por ultima vez</h3>
        <a href={ `/locations/${character.location.url.split('/').slice(-1)[0]}` } className='hover:underline decoration-purple-300 hover:decoration-2 transition-all duration-200'>{ character.location.name }</a>
      </div>
    </div>
  )
}
