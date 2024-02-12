import { Skeleton } from '../ui/skeleton'

export const CharacterListSkeleton = (): React.ReactElement => {
  return (
    <section className="grid grid-cols-3 gap-4 flex-wrap">
        <Skeleton className="w-full h-[187px] rounded-md" />
        <Skeleton className="w-full h-[187px] rounded-md" />
        <Skeleton className="w-full h-[187px] rounded-md" />
        <Skeleton className="w-full h-[187px] rounded-md" />
        <Skeleton className="w-full h-[187px] rounded-md" />
        <Skeleton className="w-full h-[187px] rounded-md" />
    </section>
  )
}
