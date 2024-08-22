import React from 'react';

// Dummy missing keywords for demonstration
const dummyMissingKeywords = [
  { skill: 'TypeScript'},
  { skill: 'GraphQL' },
];

const Style = ({ missingSkills = dummyMissingKeywords }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Buzzwords Section */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Buzzwords</h2>
        <p className="text-gray-700 my-4">
          Importance of Buzz Words and Keywords. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque dict Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi aperiam delectus assumenda accusantium quasi laudantium hic dignissimos eos doloribus?
        </p>
      </div>

      {/* KeyWords Missing Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">KeyWords Missing</h2>
        <ul className="list-inside text-gray-700 pl-5 my-4">
          {missingSkills.length > 0 ? (
            missingSkills.map((item, index) => (
              <li key={index} className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">➤</span>
                  <strong className="text-gray-800">{item.skill}</strong>
                </div>
                <span className="text-red-500 text-2xl font-bold w-8 h-8 flex items-center justify-center cursor-pointer">
                  ✗
                </span>
              </li>
            ))
          ) : (
            <li>No keywords are missing.</li>
          )}
        </ul>
      </div>

      {/* Words to Avoid Section */}
      <div className="p-6 bg-blue-50 rounded-xl my-12 border-l-4 border-blue-400 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Words to Avoid</h2>
        <p className="text-gray-800 mb-4">
          Certain words and phrases can come across as generic or unimpressive. It's better to use specific examples and achievements rather than terms like: "Hardworking", "Self-starter", "Team player", "Detail-oriented", "Go-getter".
        </p>
      </div>
    </div>
  );
}

export default Style;
