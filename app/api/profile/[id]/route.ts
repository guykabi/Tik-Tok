import { NextRequest, NextResponse } from 'next/server';

import { singleUserQuery, 
         userCreatedPostsQuery, 
         userLikedPostsQuery } from '../../../../utils/queries';
import client from '../../../../sanity/config/client-config'

export async function GET(req: NextRequest,{params}:any ,res: NextResponse) {
 
    const { id } = params

    try{
        const query = singleUserQuery(id);
        const likedVideosQuery = userLikedPostsQuery(id);
        const videosQuery = userCreatedPostsQuery(id);
    
        const user = await client.fetch(query);
        const userVideos = await client.fetch(videosQuery);
        const userLikedVideos = await client.fetch(likedVideosQuery);
    
        const profile = { user: user[0], userVideos, userLikedVideos };
    
        return NextResponse.json(profile,{status:200});

    }catch{
        return NextResponse.json({message:'Error'},{status:500})
    }

  
}