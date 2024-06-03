import { useCallback, useEffect, useRef, useState } from 'react'
import { Post } from '../../types';

export const Scenario6 =  () => {
  const [posts,setPosts] = useState<Post[]|null>(null)

  const getPosts = useCallback(async() =>{
    const response = await fetch("https://dummyjson.com/posts");
    const result = await response.json();
    setPosts(result.posts)
  },[])

  useDeduplication(()=>{
    getPosts()
  },[])

  return (
    <div>
      <h2>Scenario 6 - using ref to set value indicating if the request was done</h2>
      <ul>
        {posts?.map(item=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

const useDeduplication = (callback: ()=> void,dependencies?: React.DependencyList) => {
  const fetchedRef = useRef(false);

  useEffect(()=>{
    if(!fetchedRef.current){
      fetchedRef.current = true;
      callback()
    }
  },[callback,dependencies])

}