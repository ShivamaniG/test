// src/components/PdfComp.jsx
import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.entry";

function PdfComp({ pdfFile }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfFile);
      const pdf = await loadingTask.promise;
      const images = [];

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        images.push(canvas.toDataURL());
      }

      setImages(images);
    };

    loadPdf();
  }, [pdfFile]);

  return (
    <div className="pdf-div">
      {images.map((imgSrc, index) => (
        <img key={index} src={imgSrc} alt={`Page ${index + 1}`} />
      ))}
    </div>
  );
}

export default PdfComp;
