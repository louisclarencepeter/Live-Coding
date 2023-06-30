import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(fetchedPosts => setPosts(fetchedPosts))
            .catch(error => console.log(error))
            .finally(() => setIsloading(!isLoading));
        }, 4000);
    }, [])

    if (isLoading) return <Spinner />

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
    )
}

export default Posts
