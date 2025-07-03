import { useState, useEffect } from 'react';
import posts from '../posts.json';
import Article from '../components/Post';
import Search from '../components/Search';

function Homepage() {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [totalPosts, setTotalPosts] = useState(0);
  const[externalPosts, setExternalPosts] = useState<{ title?: string }[]>([]);
  
  const handleSearchChange = (value: string) => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPosts(filtered);
    setTotalPosts(filtered.length);
  };

  //componentdidMount
  //componentdidUpdate
  //componentwillUnmount

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respone => respone.json())
    .then(json => {setExternalPosts(json)})
    
  }, [])

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Homepage</h1>
      <p className="text-lg text-gray-600">This is the main content of the homepage.</p>
      <Search handleSearchChange={handleSearchChange}totalPosts={totalPosts}/>
      {filteredPosts.map(({ title, content, author, date }, index) => (
        <Article {...{title,content,author,date}} key={index}/>
      ))}
        
    </div>
      <hr />
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">External Data</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </>
  );
}
export default Homepage;