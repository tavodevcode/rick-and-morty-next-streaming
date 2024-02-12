import CharacterList from '@/components/characters/character-list'
import { CharacterListSkeleton } from '@/components/characters/skeletons'

import { Suspense } from 'react'

export default async function Home (): Promise<JSX.Element> {
  return (
    <main className="w-full min-h-screen p-24">
      <p className="text-center text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient mb-14 z-50">
        Rick and Morty - Characters
      </p>
      <Suspense fallback={<CharacterListSkeleton />}>
        <CharacterList />
      </Suspense>
    </main>
  )
}
