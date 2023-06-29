import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data)) 
        .catch(error => console.log(error));  
    }, [])

console.log(posts);
  return (
    <div>Posts</div>
  )
}

export default Posts