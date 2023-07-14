import { NextRequest, NextResponse } from 'next/server';

import { postDetailQuery } from '../../../../utils/queries';
import client from '../../../../sanity/config/client-config'
import { uuid } from 'uuidv4';

export async function GET( req: NextRequest, {params}:any , res: NextResponse) {
      
      const {id} = params 

      try{

        const query = postDetailQuery(id); 

        const data = await client.fetch(query);
        
        return NextResponse.json(data[0]); 

      }catch{
        return NextResponse.json({message:'Error'},{status:500})

      }
       
} 

export async function PUT(req: NextRequest,{params}:any, res: NextResponse) {

    try{
      const { comment, userId } = await req.json()

      const { id } = params
  
      const data = await client
        .patch(id)
        .setIfMissing({ comments: [] })
        .insert('after', 'comments[-1]', [
          {
            comment,
            _key: uuid(),
            postedBy: { _type: 'postedBy', _ref: userId },
          },
        ])
        .commit();
  
        return NextResponse.json(data);
    }catch{
      return NextResponse.json({message:'Error'},{status:500})

    }

    
}