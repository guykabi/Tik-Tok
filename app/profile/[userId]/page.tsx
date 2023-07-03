import Profile from '../user';
import axios from '../../api/api-instance';


export default async function Page({params: { userId },
}: {
  params: { userId: string };
}){


const {data:user} = await axios.get(`profile/${userId}`);


return (
<div>
  <Profile data={user}/>
</div>
)
}
