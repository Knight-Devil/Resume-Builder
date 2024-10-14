import React, { useRef } from 'react';
import '../styles/Template3.css';
import html2pdf from 'html2pdf.js';

const TemplateThree = ({ personalInfo, skills, workHistory }) => {
  // Define the resumeRef using useRef
  const resumeRef = useRef();

  const downloadResumeAsPDF = () => {
    const element = resumeRef.current; // Reference the resume element
    html2pdf().from(element).save();   // Convert the referenced element to PDF
  };

  return (
    <div className="template-three">
      {/* Ref applied to the container for the resume */}
      <div ref={resumeRef}>
        <div className="left-panel">
          <h1>{personalInfo.name}</h1>
          <p className="job-title">{personalInfo.title}</p>

          <h2>Contact</h2>
          <p>Phone: {personalInfo.contact}</p>
          <p>Email: {personalInfo.email}</p>
          <p>LinkedIn: {personalInfo.linkedin}</p>
          <p>GitHub: {personalInfo.github}</p>

          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          <h2>Summary</h2>
          <p>{personalInfo.summary}</p>

          <h2>Work History</h2>
          {workHistory.map((job, index) => (
            <div key={index} className="job-entry">
              <p>{job}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button to trigger PDF download */}
      <button onClick={downloadResumeAsPDF}>Download as PDF</button>
    </div>
  );
};

export default TemplateThree;
