import { NextRequest, NextResponse } from 'next/server';

import { topicPostsQuery } from '../../../../utils/queries';
import client from '../../../../sanity/config/client-config'

export async function GET(req: NextRequest,{params}:any , res: NextResponse) {
    const { topic } = params

    try{
      const videosQuery = topicPostsQuery(topic);

      const videos = await client.fetch(videosQuery);

      return NextResponse.json(videos)

    }catch{
      return NextResponse.json({message:'Error'},{status:500})
    }

  }