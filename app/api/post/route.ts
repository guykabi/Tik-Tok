import { NextRequest, NextResponse } from 'next/server';

import { allPostsQuery } from '../../../utils/queries';
import client from '../../../sanity/config/client-config'

export async function GET() {
 
    const query = allPostsQuery();

    try{

      const data = await client.fetch(query);
      return NextResponse.json(data,{status:200})
      
    }catch{
      return NextResponse.json({message:'Error'},{status:500})
    }
  
}

export async function POST(req: NextRequest, res: NextResponse){

  const body = await req.json();
  
  try{
      
      await client.create(body)
      return NextResponse.json('video created');
   
  }catch(error){ 
    return NextResponse.json({message:'Error'},{status:500})
  }
  
}