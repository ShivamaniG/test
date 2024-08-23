import React from 'react';
// import { FaRegLightbulb } from 'react-icons/fa';

// Function to get the time-based greeting
const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
};
// Function to get user name
const getUserName = () => {
    // Replace with logic to get the actual user name
    return 'Shivamani G';
};

function Home() {
    const score = 80; // Replace with dynamic score if needed

    return (
        <div className="p-6  bg-white shadow-md rounded-lg">
            <div className="flex-1 text-center pb-5">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer mr-2">
                        <span className="material-icons">chevron_left</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                        <span className="material-icons">chevron_right</span>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">
                {getGreeting()}, {getUserName()}!
            </h1>
            <h1 className="text-2xl font-bold mb-4">Welcome to your resume review</h1>
            <p className="text-gray-700 mb-4">
                Your resume is scored {score} out of 100
            </p>
            <p className="text-gray-500 mb-6 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero qui aspernatur saepe, obcaecati quod perspiciatis reprehenderit quidem dicta exercitationem temporibus impedit iste sunt iusto aliquid minus quia fugiat sint! Iure officia aspernatur temporibus rem, delectus nesciunt sunt iusto architecto quam fuga debitis alias maiores sequi quis tempora quos quas officiis tempore. Totam, vero sit suscipit expedita aspernatur dolore repellat omnis?
            </p>
            <div className="relative w-full bg-gray-200 rounded-full h-4">
                <div
                    className="h-full rounded-full"
                    style={{
                        width: '100%',
                        background: 'linear-gradient(to right, red, yellow, green)',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        width: '5px', // Width of the black line
                        backgroundColor: 'black',
                        left: `${score}%`, // Position the line according to the score
                        transform: 'translateX(-50%)', // Center the line over the score
                        height: '100%', // Extend the line beyond the height of the progress bar
                        zIndex: 1, // Ensure the line is above other content
                    }}
                />
                <div className="absolute top-6 left-0 transform -translate-x-1/2 text-gray-700 text-lg">0</div>
                <div className="absolute top-6 right-0 transform translate-x-1/2 text-gray-700 text-lg">100</div>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl my-12 border-l-4 border-yellow-400 flex flex-col pb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Improve Your Score</h2>
                <p className="text-gray-800">
                    Use the feedback to find and fix errors in your resume, then reupload it to get a new score. Now current score is {score}. There are chances of increasing by {100 - score} points with minor changes and revisions to your resume.
                </p>
            </div>
            <div className="p-6 bg-violet-50 rounded-xl my-10 border-l-4 border-violet-400">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Fix Your Resume</h2>
                <p className="text-gray-800">
                    Here are some tips to improve your resume:
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>Review the feedback carefully and address each point.</li>
                        <li>Ensure your resume highlights your most relevant skills and experiences.</li>
                        <li>Use clear and concise language to describe your achievements.</li>
                        <li>Format your resume to be visually appealing and easy to read.</li>
                        <li>Consider seeking professional help or using resume templates for additional guidance.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Home;
