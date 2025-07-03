import { useContext } from "react";
import { GlobalContext } from "../context";

function Article(props: { title: string; content: string; author: string; date: string }) {
  const { user } = useContext(GlobalContext);
  return (
    <article className="post">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="post-title text-2xl mb-2 text-gray-800">
          {props.title}
        </h2>
        <p className="post-content text-base leading-relaxed mb-4 text-gray-700">
          {props.content}
        </p>
        <div className="post-meta flex gap-4 text-sm text-gray-500">
          <span className="post-author font-semibold">
            By {props.author}
          </span>
          <span className="post-date">
            {props.date}
          </span>
        </div>
      </div>
      <div className="mt-4 text-gray-600">
        <p>Current User: {user}</p>
      </div>
    </article>
  );
}
export default Article;