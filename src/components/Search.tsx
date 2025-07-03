import { useState } from 'react';

function Search(props:any) {
  const [search, setSearch] = useState('');

    const handleSearchChange = () => {
    props.handleSearchChange(search);
  };


  return (
    <>
    <div>Cari artikel:</div>
      <input
        type="text"
        placeholder="Search articles..."
        className="mt-2 p-2 border border-gray-300 rounded w-1/2"
        onChange={(e) =>setSearch(e.target.value)}
        />
        <button
          onClick={handleSearchChange}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Cari
        </button>
      <div className="mt-4 text-gray-500">
        Ditemukan {props.totalPosts} pencarian dengan judul: <span className="font-semibold">{search}</span>
      </div>
    </>
  );
}
export default Search;