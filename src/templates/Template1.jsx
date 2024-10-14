import React, { useRef } from 'react';
import '../styles/Template1.css';
import html2pdf from 'html2pdf.js';

const TemplateOne = ({ personalInfo, skills, workHistory }) => {
  // Define resumeRef using useRef
  const resumeRef = useRef();

  const downloadResumeAsPDF = () => {
    const element = resumeRef.current; // Reference the resume element
    html2pdf().from(element).save();   // Convert the referenced element to PDF
  };

  return (
    <div className="template-one">
      <div ref={resumeRef}>
        <h1>{personalInfo.name}'s Resume</h1>
        <h2>Contact Information</h2>
        <p>Address: {personalInfo.address}</p>
        <p>Contact Number: {personalInfo.contact}</p>
        <p>Email: {personalInfo.email}</p>
        <p>GitHub: {personalInfo.github}</p>
        <p>LinkedIn: {personalInfo.linkedin}</p>

        <h2>Summary</h2>
        <p>{personalInfo.summary}</p>

        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h2>Work History</h2>
        <ul>
          {workHistory.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>

      {/* Button to trigger the PDF download */}
      <button onClick={downloadResumeAsPDF}>Download as PDF</button>
    </div>
  );
};

export default TemplateOne;
