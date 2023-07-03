import { NextRequest, NextResponse } from 'next/server';
import client from '../../../sanity/config/client-config'
import { uuid } from 'uuidv4';

export default async function PUT(req: NextRequest, res: NextResponse) {
  
 
    const { userId, postId, like } = await req.json();

    try{
      const data = 
      like ? await client
        .patch(postId).setIfMissing({ likes: [] })
        .insert('after', 'likes[-1]', [
          {
            _key: uuid(),
            _ref: userId,
          },
        ]).commit()
      : await client
        .patch(postId)
        .unset([`likes[_ref=="${userId}"]`])
        .commit();
  
        return NextResponse.json({data},{status:200})

    }catch{
      return NextResponse.json({message:'Error'},{status:500})
    }

}