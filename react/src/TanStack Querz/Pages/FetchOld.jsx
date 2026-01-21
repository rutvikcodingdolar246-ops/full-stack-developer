import { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";


export const FetchOld = () => {

  const [posts, setPosts] = useState([]);

  const getPostsData = async () =>{
    try{
        const res = await fetchPosts();
        
        res.status === 200 ? setPosts(res.data) : [];
    }catch(error){
      console.log(error)
      return [];
    }
  }

  useEffect(()=>{
    getPostsData()
  },[])

return(
  <div>
  <ul className="section-accordion">
   {posts.map(({ id, title, body }) => (
  <li key={id}>
    <p>{title}</p>
    <p>{body}</p>
  </li>
))}

  </ul>
</div>

)
  
};