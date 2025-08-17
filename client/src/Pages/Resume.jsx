import React, { useEffect, useState } from "react";
import { fetchResumePDF } from "../utils/contentful";

const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    fetchResumePDF().then(setPdfUrl);
  }, []);

  if (!pdfUrl) {
    return <div>Loading resume...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-transparent">
      <h1 className="text-4xl font-bold text-fuchsia-400 mb-6">My Resume</h1>

      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 inline-flex items-center gap-3 px-6 py-4 rounded bg-amber-700 hover:bg-amber-800 text-white font-semibold shadow transition text-lg"
      >
        Download Resume PDF
      </a>

      <iframe
        src={pdfUrl}
        className="w-full max-w-5xl h-screen border border-white/20 rounded-lg shadow-lg"
        title="Resume PDF"
      ></iframe>
    </div>
  );
};

export default Resume;
