import React, { useRef } from 'react';
import '../styles/Template2.css';
import html2pdf from 'html2pdf.js';

const TemplateTwo = ({ personalInfo, skills, workHistory }) => {
  // Define the resumeRef using useRef
  const resumeRef = useRef();

  const downloadResumeAsPDF = () => {
    const element = resumeRef.current; // Reference the resume element
    html2pdf().from(element).save();   // Convert the referenced element to PDF
  };

  return (
    <div className="template-two">
      {/* Apply the ref to the resume container */}
      <div ref={resumeRef}>
        <div className="header">
          <h1>{personalInfo.name}</h1>
          <p>{personalInfo.title}</p>
        </div>
        <div className="contact-info">
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.contact}</p>
          <p>LinkedIn: {personalInfo.linkedin}</p>
          <p>GitHub: {personalInfo.github}</p>
        </div>
        <div className="section">
          <h2>Profile</h2>
          <p>{personalInfo.summary}</p>
        </div>
        <div className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span className="skill" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="section">
          <h2>Work Experience</h2>
          <ul>
            {workHistory.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button to trigger PDF download */}
      <button onClick={downloadResumeAsPDF}>Download as PDF</button>
    </div>
  );
};

export default TemplateTwo;
