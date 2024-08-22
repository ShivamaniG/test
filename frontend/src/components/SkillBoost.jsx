import React from 'react';

// Default values for jobSkills and missingSkills
const defaultJobSkills = [
  { skill: 'React', description: 'A JavaScript library for building user interfaces.' },
  { skill: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
  { skill: 'GraphQL', description: 'A query language for APIs and a server-side runtime for executing queries.' },
  { skill: 'CSS', description: 'A style sheet language used for describing the presentation of a document written in HTML or XML.' },
];

const defaultMissingSkills = [
  { skill: 'GraphQL' },
  { skill: 'CSS' },
];

const SkillBoost = ({ jobSkills = defaultJobSkills, missingSkills = defaultMissingSkills }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">

      {/* Displaying the skills mentioned in the job description */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Missing Skills</h2>
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
            <li>No skills are missing.</li>
          )}
        </ul>
      </div>


      {/* Message on how to improve the score */}
      <div className="p-6 bg-yellow-50 rounded-xl my-12 border-l-4 border-yellow-400 flex flex-col pb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Importance of Relevant Skills</h2>
        <p className="text-gray-800">
          Use the feedback to find and fix errors in your resume, then reupload it to get a new score. Consider adding the skills mentioned in the job description to improve your match percentage.
        </p>
      </div>

      {/* Displaying the missing skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills Mentioned in Job Description</h2>
        <ul className="list-inside text-gray-700 pl-5">
          {jobSkills.length > 0 ? (
            jobSkills.map((item, index) => (
              <li key={index} className="relative pl-6 mb-2">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">➤</span>
                <strong>{item.skill}:</strong> {item.description}
              </li>
            ))
          ) : (
            <li>No skills mentioned.</li>
          )}
        </ul>
      </div>

    </div>
  );
}

export default SkillBoost;
