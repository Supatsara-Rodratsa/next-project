import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <div className="nav flex justify-between items-center bg-transparent px-[60px] py-5 fixed z-50 w-screen">
      <Link
        className="font-extrabold text-darkBrown tracking-widest text-2xl font-playFair"
        href="/"
      >
        HELLA CO.
      </Link>
      <div className="flex gap-3">
        <Link href="/products">Shop</Link>
        <p>Cart (0)</p>
      </div>
    </div>
  )
}
