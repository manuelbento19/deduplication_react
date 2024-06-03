import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../types';

export const Scenario4 =  () => {
  const [posts,setPosts] = useState<Post[]>([])

  const getPosts = useCallback(async() =>{
    const response = await fetch("https://dummyjson.com/posts");
    const result = await response.json();
    setPosts(result.posts)
  },[])

  useEffect(()=> {
    getPosts()
  },[getPosts])

  return (
    <div>
      <h2>Scenario 4 - setting useCallback function inside dependencyList of useEffect</h2>
      <ul>
        {posts?.map(item=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
