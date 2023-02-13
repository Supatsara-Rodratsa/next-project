import React from 'react'
import { Candle } from '../interfaces/product.interface'
import { useProductStore } from '../stores/productStore'
import Image from 'next/image'

export const Product = (product: Candle) => {
  const allSelectedProducts = useProductStore((x) => x.allSelectedProducts)
  const addItem = useProductStore((x) => x.addItem)
  const removeItem = useProductStore((x) => x.removeItem)
  return (
    <div>
      <div className="w-[300px] h-[370px] overflow-hidden object-fill">
        <Image
          alt={product.name}
          src={product.image}
          width="300"
          height="370"
        />
      </div>
      <h2 className="uppercase text-[20px] font-bold py-3 w-full text-center">
        {product.name}
      </h2>
      <div className="flex justify-between text-[18px] w-full px-2">
        <p>Price</p>
        -----------------
        <p>{product.price}&#8364;</p>
      </div>
      <div className="flex justify-center items-center gap-2 pt-8">
        <div
          data-testid="remove-item"
          className="flex justify-center items-center p-1 border rounded-full w-[28px] text-[18px] h-[28px] cursor-pointer"
          onClick={() => removeItem(product.name)}
        >
          -
        </div>
        <p data-testid="count-item" className="px-2 text-[18px]">
          {allSelectedProducts.get(product.name) || 0}
        </p>
        <div
          data-testid="add-item"
          className="flex justify-center items-center p-1 rounded-full w-[28px] h-[28px] text-[18px] cursor-pointer bg-darkBrown text-white font-bold"
          onClick={() => addItem(product.name)}
        >
          +
        </div>
      </div>
    </div>
  )
}
