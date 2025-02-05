import React, { useState } from 'react';
import './Student.css';

const Student = () => {
  // States for the dropdown values
  const [semester, setSemester] = useState('');
  const [cae, setCae] = useState('');

  // Dummy data for the table
  const data = [
    { serial: 1, subjectCode: 'SCSA1303', name: 'Software Engineering', cae: 1, max: 50, obtained: 40, result: 'Pass' },
    { serial: 2, subjectCode: 'SCSA1402', name: 'Computer Architecture', cae: 1, max: 50, obtained: 44, result: 'Pass' },
    { serial: 3, subjectCode: 'SCSA1501', name: 'Operating Systems', cae: 1, max: 50, obtained: 45, result: 'Pass' },
  ];

  return (
    <div className="results-container">
      {/* First Section - Heading */}
      <div className="section">
        <h1>Your CAE Results</h1>
      </div>

      {/* Second Section - Dropdowns for Semester and CAE */}
      <div className="section">
        <div className="dropdowns">
          <div className="dropdown">
            <label htmlFor="semester">Semester: </label>
            <select
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
            </select>
          </div>

          <div className="dropdown">
            <label htmlFor="cae">CAE: </label>
            <select
              id="cae"
              value={cae}
              onChange={(e) => setCae(e.target.value)}
            >
              <option value="">Select CAE</option>
              <option value="1">CAE 1</option>
              <option value="2">CAE 2</option>
              <option value="3">CAE 3</option>
            </select>
          </div>
        </div>
      </div>

      {/* Third Section - Tabular Data */}
      <div className="section">
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Subject Code</th>
              <th>Name</th>
              <th>CAE</th>
              <th>Max</th>
              <th>Obtained</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.serial}>
                <td>{item.serial}</td>
                <td>{item.subjectCode}</td>
                <td>{item.name}</td>
                <td>{item.cae}</td>
                <td>{item.max}</td>
                <td>{item.obtained}</td>
                <td>{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
