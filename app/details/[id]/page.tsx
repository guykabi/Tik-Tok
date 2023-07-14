import React from 'react'
import axios from '../../api/api-instance';
import Details from '../details';
import Refresh from '../refresh';

export default async function Page({params: { id },
       }: {
         params: { id: string };
       }){

   let res:any    
   let isError = false
   try{
    const {data:post} = await axios(`post/${id}`)
    res = post
   }catch(err){
      isError = true
   }
     
     
  
  return (
    <div>
       <Refresh/>
       <Details postDetails={res} isError={isError}/>
    </div>
  )
}

