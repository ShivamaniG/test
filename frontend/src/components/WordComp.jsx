// src/components/WordComp.jsx
import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth'; // Install with npm or yarn

function WordComp({ fileData }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const renderWordDoc = async () => {
      const arrayBuffer = new Uint8Array(fileData).buffer;
      try {
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtml(result.value);
      } catch (error) {
        console.error('Error reading Word file:', error);
      }
    };

    renderWordDoc();
  }, [fileData]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default WordComp;
