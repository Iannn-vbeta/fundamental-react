import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

function Blog(){
    const[post, setPosts] = useState<{ title?: string }[]>([]);


      //componentdidMount
  //componentdidUpdate
  //componentwillUnmount

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respone => respone.json())
    .then(json => {setPosts(json)})
    
  }, [])

  return(
  <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Blog</h1>
      <p className="text-lg text-gray-600">This is the main content of the blog.</p>
      {post.map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow p-6 mb-4 w-96 h-32">
        <Link to={`/blogs/${item.id}`}><h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2></Link>
      </div>
      ))}
    </div>
  </>
  )
}

export default Blog;