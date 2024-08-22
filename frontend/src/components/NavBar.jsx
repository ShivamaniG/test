import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaHome, FaChartLine, FaPalette, FaLightbulb} from 'react-icons/fa';

function NavBar({ setActivePage }) {
  return (
    <nav className="bg-white h-full flex flex-col">
      {/* Circular Progress Indicator */}
        <div className="flex items-center mb-4 my-4">
          <div className="relative w-42 h-42">
            <CircularProgressbar
              value={80}
              text="80"
              styles={buildStyles({
                pathColor: '#4f46e5',
                textColor: '#4f46e5',
                trailColor: '#e5e7eb',
                textSize: '29px',
              })}
            />
          </div>
        </div>
        

      {/* Navigation Links */}
      <ul className="list-none p-0 m-0 border-t border-gray-300 my-10">
        <li className="border-b border-gray-300">
          <button
            onClick={() => setActivePage('home')}
            className="text-gray-700 hover:text-gray-500 flex items-center w-full py-3 text-base"
          >
            <FaHome className="mr-2" />
            Home
          </button>
        </li>
        <li className="border-b border-gray-300">
          <button
            onClick={() => setActivePage('skillboost')}
            className="text-gray-700 hover:text-gray-500 flex items-center w-full py-3 text-base"
          >
            <FaChartLine className="mr-2" />
            Skill Boost
          </button>
        </li>
        <li className="border-b border-gray-300">
          <button
            onClick={() => setActivePage('style')}
            className="text-gray-700 hover:text-gray-500 flex items-center w-full py-3 text-base"
          >
            <FaPalette className="mr-2" />
            Style
          </button>
        </li>
        <li className="border-b border-gray-300">
          <button
            onClick={() => setActivePage('queryquill')}
            className="text-gray-700 hover:text-gray-500 flex items-center w-full py-3 text-base"
          >
            <FaChartLine className="mr-2" />
            Query Quill
          </button>
        </li>
        <li className="border-b border-gray-300">
          <button
            onClick={() => setActivePage('tips')}
            className="text-gray-700 hover:text-gray-500 flex items-center w-full py-3 text-base"
          >
            <FaLightbulb className="mr-2" />
            Pro-Tips
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
