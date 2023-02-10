import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-primary px-6 py-5 border-b fixed z-50 w-screen">
      <Link
        className="font-extrabold text-darkBrown tracking-widest text-2xl"
        href="/"
      >
        Scented Candle
      </Link>
      <div className="flex gap-3">
        <p className="flex">Shop</p>
        <p>Cart (0)</p>
      </div>
    </div>
  )
}
