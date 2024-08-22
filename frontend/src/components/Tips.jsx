import React from 'react';

const Tips = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="space-y-6">
        <div className="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Heading 1</h2>
          <p className="text-gray-800">
            Content for Heading 1 goes here. This box has a light yellow background. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, numquam.
          </p>
        </div>

        <div className="p-6 bg-violet-50 rounded-xl my-10 border-l-4 border-violet-400">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Heading 2</h2>
          <p className="text-gray-800">
            Content for Heading 2 goes here. This box has a slightly darker yellow background. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, iste!
          </p>
        </div>

        <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-400 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Heading 3</h2>
          <p className="text-gray-800">
            Content for Heading 3 goes here. This box has a light green background. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ea.
          </p>
        </div>

        <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-400 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Heading 4</h2>
          <p className="text-gray-800">
            Content for Heading 4 goes here. This box has a light blue background. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, recusandae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tips;
