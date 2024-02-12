export default async function EpisodiesPage (): Promise<JSX.Element> {
  await new Promise((resolve) => setTimeout(resolve, 4000))

  return (
    <div>
      <h1>Episodies</h1>

    </div>
  )
}
