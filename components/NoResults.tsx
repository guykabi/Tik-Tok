'use client'

import React from 'react';
import { MdOutlineVideocamOff } from 'react-icons/md';


interface IProps {
  text: string
  subText?:string
}

const NoResults = ({ text,subText }: IProps) => {


  return (
    <div className='flex flex-col justify-center items-center h-full w-full font-bold	'>
      <p className='text-8xl'>
        <MdOutlineVideocamOff />
      </p>
      <p className='text-2xl text-center'>{text}</p>
      <p className='text-lg text-center'>{subText}</p>
    </div>
  );
};

export default NoResults;