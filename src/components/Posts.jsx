import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
      .finally(() => setLoading(!loading)));
  }, 4000); },
  []);

  if (loading) return <Spinner />;

  //console.log(posts);

  return (
    <div className="container mt-5">
      <ul className="list-group">
        {posts.map(post => 
          <li 
          className="list-group-item" 
          key={post.id}>{post.title}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Posts;
