import React from 'react'
import axios from '../../api/api-instance';
import Details from '../details';


export default async function Page({params: { id },
       }: {
         params: { id: string };
       }){

 
  const {data:post} = await axios(`post/${id}`)
  
  
  return (
    <div>
       <Details postDetails={post}/>
    </div>
  )
}

