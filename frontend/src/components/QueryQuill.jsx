import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

const QueryQuill = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">    
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Ask Me a Question?</h2>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Type your query here..."
            className="w-full px-4 py-2 my-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring=grey-500 pr-12"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="p-6 bg-white rounded-xl my-12 border-l-4 border-gray-400 flex flex-col">
      {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">Solution</h2> */}
      <p className="text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia sunt quidem suscipit tenetur incidunt, aspernatur ipsam accusantium iure culpa provident adipisci, alias ipsa est fugit non nam repudiandae excepturi iste dicta ullam ea dolore? Voluptas aliquam exercitationem quod nesciunt, quibusdam hic est, a obcaecati, quae sint aut fugiat praesentium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati possimus quidem quasi autem cupiditate fuga necessitatibus ratione sint vitae consectetur?
      </p>
    </div>
      </div>
    </div>
  );
}

export default QueryQuill;
