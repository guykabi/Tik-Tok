'use client'

import React from 'react'


const ErrorFallBack = () => {


  return (
    <section className='w-full absolute left-0 top-0 bg-slate-200 text-xl font-bold h-[100vh]'>
        <div className='m-auto text-center align-middle mt-36 flex flex-col gap-8 w-full'>
        <header>
         <h2>
          Sorry <br/>
          It seems that something went wrong
         </h2>
        </header>
        <section className='flex justify-center gap-4'>
          <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-400 rounded" 
          onClick={()=>window.location.reload()}>
            Try again
          </button>
        </section>
        </div>
    </section>
  )
}

export default ErrorFallBack