import { NavBar } from '@/components/Nav'

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <main className="pt-16">{children}</main>
    </>
  )
}
