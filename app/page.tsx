import axios from "../app/api/api-instance"; 
import VideoPost from '../components/VideoPost';
import { Video } from '../types';
import NoResults from '../components/NoResults';
import Error from '../components/Error'


async function getVideos(topic:any): Promise<Video[]|string>{

    try{ 

      if(topic && topic !== 'All') {
        const {data:res} =  await axios(`discover/${topic}`);
        return res
      }
  
      const {data:res} = await axios('post')
      return res
  
    }catch{
       return 'Error'
    }
  
}


const Home = async ({searchParams,
  }: {
  searchParams?: { [key: string]: string | string[] | undefined }
  }) => {
    

 const videos = await getVideos(searchParams?.topic)

 if(videos === 'Error'){ 
    return <Error/>
 }

  return (
    <div className='flex flex-col gap-10 videos h-full shadow-lg
      overflow-scroll no-scrollbar pt-2'>
      { videos?.length && typeof videos !== 'string' 
        ? videos?.map((video: Video) => (
          <VideoPost post={video} isShowingOnHome  key={video._id} />
        )) 
        : <NoResults text={`No Videos`}  />}
    </div>
  );
};

export default Home;
