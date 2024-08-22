// src/components/ResumeView.jsx
import React from "react";
import PdfComp from "./PdfComp";
import pdf from "../static/Shivamani.pdf"; // Make sure this path is correct

function ResumeView() {
  return (
    <div className="flex-1 p-6 bg-white shadow-md rounded-lg">
      {/* <h1 className="text-2xl font-bold mb-4">Resume View</h1> */}
      <p className="text-gray-700">
      </p>
      <PdfComp pdfFile={pdf} />
    </div>
  );
}

export default ResumeView;
