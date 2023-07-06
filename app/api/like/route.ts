import { NextRequest, NextResponse } from 'next/server';
import client from '../../../sanity/config/client-config'
import { v4 } from 'uuid';

export async function PUT(req: NextRequest, res: NextResponse) {
    
 
    const { userId, postId, like } = await req.json();
 
    
    try{
      const data = 
      like ? await client
        .patch(postId).setIfMissing({ likes: [] })
        .insert('after', 'likes[-1]', [
          {
            _key: v4(),
            _ref: userId,
          },
        ]).commit()
      : await client
        .patch(postId)
        .unset([`likes[_ref=="${userId}"]`])
        .commit(); 

        
        return NextResponse.json({data})

    }catch{
      return NextResponse.json({message:'Error'},{status:500})
    }

}