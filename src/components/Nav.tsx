import Link from 'next/link'
import React from 'react'
import { useProductStore } from '@/stores/productStore'
import { useLoadingStore } from '@/stores/loadingStore'
import clsx from 'clsx'

export const NavBar = () => {
  const totalProduct = useProductStore((x) => x.total)
  const isLoaded = useLoadingStore((x) => x.isLoaded)
  console.log(isLoaded, 'isLoaded')

  return (
    <div
      className={clsx(
        !isLoaded
          ? 'hidden'
          : 'bg-background flex justify-between items-center px-[60px] py-5 fixed z-50 w-screen top-0'
      )}
    >
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
