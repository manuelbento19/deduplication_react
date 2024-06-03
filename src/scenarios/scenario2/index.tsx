import { useEffect, useState } from 'react'
import { Post } from '../../types';

export const Scenario2 =  () => {
    const [posts,setPosts] = useState<Post[]>([])
  
    useEffect(()=> {
        const getPosts = async() =>{
            const response = await fetch("https://dummyjson.com/posts");
            const result = await response.json();
            setPosts(result.posts)
        }
        getPosts()
    },[])
  
    return (
      <div>
        <h2>Scenario 2 - creating the function inside the useEffect</h2>
        <ul>
          {posts?.map(item=>(
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
}
