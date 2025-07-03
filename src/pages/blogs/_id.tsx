import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



// Kalo ada _ di awal file maka param id akan diambil dari url
// Misal: /blogs/1 -> id = 1
function SinglePost(){
  const { id } = useParams();
  const [post, setPost] = useState<{ title?: string; body?: string } | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setPost(json));
  }, [id])

  return(
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Detail</h1>
        <div className="bg-white rounded-lg shadow p-6 w-96">
          <h2 className="text-2xl font-semibold text-gray-800">
            {post ? post.title : "Loading..."}
          </h2>
          <p className="text-base leading-relaxed mb-4 text-gray-700">
            {post ? post.body : "Loading..."}
          </p>
          <p className="text-sm text-gray-500">
            {post ? `Post ID: ${post.id}` : ""}
          </p>
        </div>
      </div>
    </>
  )
};

export default SinglePost;
