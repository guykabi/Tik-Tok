'use client'

import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation'

const Refresh = () => { 

const {refresh} = useRouter()

useEffect(()=>{
  refresh()
},[])    

  return null
}

export default Refresh