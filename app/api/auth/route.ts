import { NextRequest, NextResponse } from 'next/server';

import client from '../../../sanity/config/client-config'


export async function POST(req: NextRequest, res: NextResponse){
  
  const body = await req.json()

 try{

   let newUser = await client.createIfNotExists(body)
   return NextResponse.json('Successful login')

 }catch(err){
    return NextResponse.json({message:'Error'},{status:500})
 }
}