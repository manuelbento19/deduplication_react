import {useEffect, useState } from 'react'
import { Post } from '../../types';

export const Scenario1 =  () => {
  const [posts,setPosts] = useState<Post[]>([])

  const getPosts = async() =>{
    const response = await fetch("https://dummyjson.com/posts");
    const result = await response.json();
    setPosts(result.posts)
  }

  useEffect(()=> {
    getPosts()
  },[])

  return (
    <div>
      <h2>Scenario 1 - without useCallback</h2>
      <ul>
        {posts?.map(item=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
