import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Faculty.css";

const Faculty = () => {
  const navigate = useNavigate(); // Initialize navigate

  // State to manage selected classes for each subject
  const [selectedClasses, setSelectedClasses] = useState({
    Graphics: '',
    Maths: '',
    ObjectOriented: '',
  });

  // Handle dropdown selection change
  const handleSelect = (subject, value) => {
    setSelectedClasses((prev) => ({
      ...prev,
      [subject]: value,
    }));

    // Navigate to a new page based on selection
    if (value) {
      navigate(`/${subject.toLowerCase()}/${value}`);
    }
  };

  return (
    <div className="fac-container">
      <h1>Select Class for Each Subject</h1>

      <div className="subject-container">
        <label>Graphics Subject:</label>
        <select
          value={selectedClasses.Graphics}
          onChange={(e) => handleSelect('Graphics', e.target.value)}
        >
          <option value="">Select Class</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
        </select>
      </div>

      <div className="subject-container">
        <label>Maths Subject:</label>
        <select
          value={selectedClasses.Maths}
          onChange={(e) => handleSelect('Maths', e.target.value)}
        >
          <option value="">Select Class</option>
          <option value="A3">A3</option>
          <option value="A4">A4</option>
        </select>
      </div>

      <div className="subject-container">
        <label>Object-Oriented Subject:</label>
        <select
          value={selectedClasses.ObjectOriented}
          onChange={(e) => handleSelect('ObjectOriented', e.target.value)}
        >
          <option value="">Select Class</option>
          <option value="B3">B3</option>
          <option value="B4">B4</option>
        </select>
      </div>
    </div>
  );
};

export default Faculty;
