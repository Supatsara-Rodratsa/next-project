import React from 'react'

export type ButtonProps = {
  title: string
  onClick: () => void
}

export const Button = (props: ButtonProps) => (
  <div
    onClick={props.onClick}
    className="flex justify-center items-center bg-transparent border-2 border-white px-5 py-3 w-fit cursor-pointer hover:bg-darkBrown hover:text-white transition-all"
  >
    {props.title}
  </div>
)
