import { useState } from 'react';
import TemplateOne from '../templates/Template1';
import TemplateTwo from '../templates/Template2';
import TemplateThree from '../templates/Template3';
import '../styles/HomePage.css';

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',
    github: '',
    linkedin: '',
    summary: '',
  });

  const [skills, setSkills] = useState(['']);
  const [workHistory, setWorkHistory] = useState(['']);
  const [template, setTemplate] = useState(''); // State for selected template
  const [showPreview, setShowPreview] = useState(false); // State for showing preview

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleWorkHistoryChange = (index, value) => {
    const newHistory = [...workHistory];
    newHistory[index] = value;
    setWorkHistory(newHistory);
  };

  const addSkill = () => setSkills([...skills, '']);
  const removeSkill = (index) => setSkills(skills.filter((_, i) => i !== index));

  const addWorkHistory = () => setWorkHistory([...workHistory, '']);
  const removeWorkHistory = (index) => setWorkHistory(workHistory.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true); // Trigger preview display upon form submission
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  const renderTemplatePreview = () => {
    switch (template) {
      case 'template1':
        return <TemplateOne personalInfo={personalInfo} skills={skills} workHistory={workHistory} />;
      case 'template2':
        return <TemplateTwo personalInfo={personalInfo} skills={skills} workHistory={workHistory} />;
      case 'template3':
        return <TemplateThree personalInfo={personalInfo} skills={skills} workHistory={workHistory} />;
      default:
        return <p>Please select a template to preview your resume.</p>;
    }
  };

  return (
    <div>
      {!showPreview ? (
        <>
          <h1>Resume Builder</h1>
          <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            {Object.keys(personalInfo).map((key) => (
              <div key={key}>
                <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                <input
                  type="text"
                  name={key}
                  value={personalInfo[key]}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}

            <h2>Skills</h2>
            {skills.map((skill, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder="Enter a skill"
                  required
                />
                <button type="button" onClick={() => removeSkill(index)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={addSkill}>Add Skill</button>

            <h2>Work History</h2>
            {workHistory.map((job, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={job}
                  onChange={(e) => handleWorkHistoryChange(index, e.target.value)}
                  placeholder="Enter job title or description"
                  required
                />
                <button type="button" onClick={() => removeWorkHistory(index)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={addWorkHistory}>Add Work History</button>

            <h2>Select Template</h2>
            <select value={template} onChange={handleTemplateChange} required>
              <option value="">Select a template</option>
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
              <option value="template3">Template 3</option>
            </select>

            <button type="submit">Submit Resume</button>
          </form>
        </>
      ) : (
        <div>
          <h1>Resume Preview</h1>
          {renderTemplatePreview()}
          <button onClick={() => setShowPreview(false)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default Home;
