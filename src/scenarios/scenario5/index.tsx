import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../types';

export const Scenario5 =  () => {
  const [posts,setPosts] = useState<Post[]|null>(null)

  const getPosts = useCallback(async() =>{
    const response = await fetch("https://dummyjson.com/posts");
    const result = await response.json();
    setPosts(result.posts)
  },[])

  useEffect(()=> {
    if(posts===null)
    getPosts()
  },[getPosts,posts])

  return (
    <div>
      <h2>Scenario 5 - verify if the posts state is already with data</h2>
      <ul>
        {posts?.map(item=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
