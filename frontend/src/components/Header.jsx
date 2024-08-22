// src/components/Header.jsx
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Header() {
  return (
    <header className="bg-[#172747] text-white flex items-center justify-between p-2">
      <h1 className="text-lg font"> RESUME BOOST | SCORE MY RESUME</h1>
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <MdKeyboardArrowDown className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white" size={20} />
          <select className="bg-[#172747] text-white py-1 px-3 rounded border-none hover:bg-[#1a2a41] pl-8 appearance-none">
            <option value="option1">More</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <button className="bg-[#5040ff] text-white py-1 px-4 rounded hover:bg-[#4032c0]">
          Rescore My Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
