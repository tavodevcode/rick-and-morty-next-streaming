export default function DashboardLayout ({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
      <section className="w-screen h-screen flex justify-center items-center">
        {children}
      </section>
  )
}
