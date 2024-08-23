// src/pages/FileUpload.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpload } from '../context/UploadContext';
import { FaCloudUploadAlt } from 'react-icons/fa';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const { setIsUploaded, setUploadedFile } = useUpload();
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      const fileData = reader.result;
      localStorage.setItem('uploadedFileName', selectedFile.name);
      localStorage.setItem('uploadedFileData', JSON.stringify(Array.from(new Uint8Array(fileData))));
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    // Check job description length
    const wordCount = jobDescription.trim().split(/\s+/).length;
    if (wordCount < 20) {
      alert('Please enter a job description with at least 20 words.');
      return;
    }

    setIsUploaded(true);
    setUploadedFile(file);
    localStorage.setItem('jobDescription', jobDescription);
    navigate('/');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">File Upload</h1>
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-4" 
      />
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Enter job description (min 20 words)"
        rows="5"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
      >
        <FaCloudUploadAlt className="mr-2" />
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
