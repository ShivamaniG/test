// src/components/ResumeView.jsx
import React from "react";
import PdfComp from "./PdfComp";
import { useUpload } from '../context/UploadContext'; // Import the useUpload hook

function ResumeView() {
  const { uploadedFile } = useUpload(); // Get the uploaded file from context

  return (
    <div className="flex-1 p-6 bg-white shadow-md rounded-lg">
      {uploadedFile ? (
        <PdfComp pdfFile={uploadedFile} />
      ) : (
        <p className="text-gray-700">No file uploaded yet.</p>
      )}
    </div>
  );
}

export default ResumeView;
