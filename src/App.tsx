import { useCallback, useEffect, useState } from 'react';
import './App.css'

type Post = {
  id: number;
  title: string;
}
function App() {
  const [posts,setPosts] = useState<Post[]>([])
  
  const getPosts = useCallback(async() =>{
    const response = await fetch("https://dummyjson.com/posts");
    const result = await response.json();
    setPosts(result.posts)
  },[])

  useEffect(()=> {
    getPosts()
  },[])

  return (
    <div>
      <h1>This is the posts list, trying to avoid the deduplication</h1>
      <button onClick={getPosts}>Get More</button>
      <ul>
        {posts?.map(item=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
