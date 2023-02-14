import Link from 'next/link'
import React from 'react'
import { useProductStore } from '@/stores/productStore'

export const NavBar = () => {
  const totalProduct = useProductStore((x) => x.total)
  return (
    <div className="nav bg-background flex justify-between items-center px-[60px] py-5 fixed z-50 w-screen top-0">
      <Link
        className="font-extrabold text-darkBrown tracking-widest text-2xl font-playFair"
        href="/"
      >
        HELLA CO.
      </Link>
      <div className="flex gap-3">
        <Link href="/products">Shop</Link>
        <Link href="/cart">Cart ({totalProduct || 0})</Link>
      </div>
    </div>
  )
}
