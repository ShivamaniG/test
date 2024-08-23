// src/context/UploadContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const UploadContext = createContext();

export const useUpload = () => useContext(UploadContext);

export const UploadProvider = ({ children }) => {
  const [isUploaded, setIsUploaded] = useState(() => {
    return JSON.parse(localStorage.getItem('isUploaded')) || false;
  });

  const [uploadedFile, setUploadedFile] = useState(() => {
    const fileName = localStorage.getItem('uploadedFileName');
    const fileData = localStorage.getItem('uploadedFileData');
    if (fileName && fileData) {
      const typedArray = new Uint8Array(JSON.parse(fileData));
      return new File([typedArray], fileName);
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem('isUploaded', JSON.stringify(isUploaded));
  }, [isUploaded]);

  useEffect(() => {
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem('uploadedFileData', JSON.stringify(Array.from(new Uint8Array(reader.result))));
      };
      reader.readAsArrayBuffer(uploadedFile);
    }
  }, [uploadedFile]);

  useEffect(() => {
    if (uploadedFile) {
      localStorage.setItem('uploadedFileName', uploadedFile.name);
    }
  }, [uploadedFile]);

  return (
    <UploadContext.Provider value={{ isUploaded, setIsUploaded, uploadedFile, setUploadedFile }}>
      {children}
    </UploadContext.Provider>
  );
};
