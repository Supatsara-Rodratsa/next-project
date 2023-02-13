import { NavBar } from '@/components/Nav'

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}
