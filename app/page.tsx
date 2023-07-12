import axios from "../app/api/api-instance"; 
import VideoPost from '../components/VideoPost';
import { Video } from '../types';
import NoResults from '../components/NoResults';


async function getVideos(topic:any): Promise<Video[]|string>{

    try{ 

      if(topic && topic !== 'All') {
        const {data:res} =  await axios(`discover/${topic}`);
        return res
      }
  
      const {data:res} = await axios('post')
      return res
  
    }catch{
       return 'Something went wrong'
    }
  
}


const Home = async ({searchParams,
  }: {
  searchParams?: { [key: string]: string | string[] | undefined }
  }) => {
    
  
 const videos = await getVideos(searchParams?.topic)

 if(videos === 'Something went wrong'){
  return <div>{videos}</div>
 }

  return (
    <div className='flex flex-col gap-10 videos h-full '>
      { videos?.length &&typeof videos !== 'string' 
        ? videos?.map((video: Video) => (
          <VideoPost post={video} isShowingOnHome key={video._id} />
        )) 
        : <NoResults text={`No Videos yet!`} />}
    </div>
  );
};

export default Home;
