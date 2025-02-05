import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Analysis.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", score: 85 },
    { id: 2, name: "Bob", score: 70 },
    { id: 3, name: "Charlie", score: 90 },
  ]);

  // Data for Pie Chart
  const chartData = {
    labels: students.map((student) => student.name),
    datasets: [
      {
        data: students.map((student) => student.score),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Buttons */}
      <div className="button-container">
        <button className="btn">Enter Student</button>
        <button className="btn">Update Student</button>
        <button className="btn">Delete Student</button>
      </div>

      {/* Main Content: Table & Chart */}
      <div className="content-container">
        {/* Left Side: Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Student Name</th>
                <th>Obtained Score</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side: Pie Chart */}
        <div className="chart-container">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
