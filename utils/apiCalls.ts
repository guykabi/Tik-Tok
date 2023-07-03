import axios from "../app/api/api-instance"; 


export const getAllVideos = async () => {  
   const {data:res} = await axios('post')
   return res
} 

export const getPost = async (postId:any) => {  
   const {data:res} = await axios('post',postId)
   return res
} 