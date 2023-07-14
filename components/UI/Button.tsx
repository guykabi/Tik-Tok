import React from 'react'

interface IProps{
  onClick?:()=>void
  text:string
  type:string
  color:string
  textColor:string
  width:string
  disable?:boolean
}

export const Button = ({text,color,textColor,width,onClick,disable}:IProps) => {
  return (
   <button className={`bg-${color}-500 hover:bg-blue-400 text-${textColor} font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-400 rounded w-${width}/12`}
   onClick={onClick}
   disabled={disable}>
      {text}
   </button>
  )
}
