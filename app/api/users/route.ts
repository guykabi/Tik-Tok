import { NextRequest, NextResponse } from 'next/server';

import { allUsersQuery } from '../../../utils/queries';
import client from '../../../sanity/config/client-config'

export async function GET(req: NextRequest, res: NextResponse) {

  try{
    const users = await client.fetch(allUsersQuery());
 
    if(users) {
      return NextResponse.json(users)
  } else {
      NextResponse.json([]);
    }
  }catch{
    return NextResponse.json({message:'Error'},{status:500})

  }
  

}