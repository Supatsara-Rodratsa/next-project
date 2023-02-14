import React from 'react'

export type ButtonProps = {
  label: string
  isCircle?: boolean
  onClick: () => void
}

export const Button = (props: ButtonProps) => (
  <button
    onClick={props.onClick}
    className={`flex justify-center items-center bg-black rounded-[6px] text-white cursor-pointer text-base hover:text-black hover:bg-green transition-all
    ${props.isCircle ? 'w-12 h-12 p-2 rounded-full' : 'px-4 py-2 w-fit'}`}
  >
    {props.label}
  </button>
)
