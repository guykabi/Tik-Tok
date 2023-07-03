import Search from '../search';
import axios from '../../api/api-instance';


export default async function Page({params: { key },
}: {
  params: { key: string };
}){


const {data:videos} = await axios.get(`search/${key}`);


return (
<div>
  <Search videos={videos}/>
</div>
)
}
