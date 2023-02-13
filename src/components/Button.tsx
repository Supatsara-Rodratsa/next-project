import React from 'react'

export type ButtonProps = {
  title: string
  onClick: () => void
}

export const Button = (props: ButtonProps) => (
  <div
    onClick={props.onClick}
    className="flex justify-center items-center bg-black rounded-[6px] text-white px-4 py-2 w-fit cursor-pointer text-base hover:text-black hover:bg-green transition-all"
  >
    {props.title}
  </div>
)
