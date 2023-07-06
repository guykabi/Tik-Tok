import { NextRequest, NextResponse } from 'next/server';

import { searchPostsQuery } from '../../../../utils/queries';
import client from '../../../../sanity/config/client-config'

export async function GET(req: NextRequest,{params}:any ,res: NextResponse) {
  
    const { id } = params;

    try{

        const videosQuery = searchPostsQuery(id!);

        const videos = await client.fetch(videosQuery);

        return NextResponse.json(videos,{status:200});

    }catch{
        return NextResponse.json({message:'Error'},{status:500})
    }

}