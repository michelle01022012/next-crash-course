import { useEffect, useState } from "react";

export async function getServerSideProps() {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await res.json();

    return {
      props: {
        posts: data
      }
    }
   
}

export default function Posts({posts}) {

  
  //const [posts, setPosts] = useState([]);
 // useEffect(() => {
 //   const fetchPosts = async () => {
 //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
 //     const data = await res.json();
 //     setPosts(data);
//
//    }
//      fetchPosts();
//
//  }, []);

  return (
    <>
      <h1>This is the Posts Page</h1>  
      {posts?.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </> 
  )
}