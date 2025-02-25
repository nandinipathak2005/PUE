import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SustainabilityCalculator = () => {
  const [materials, setMaterials] = useState("Recycled Polypropylene Panels");
  const [infrastructure, setInfrastructure] = useState("Smart Grid Integration");
  const [energy, setEnergy] = useState("100% Renewable (Solar/Wind)");
  const [cooling, setCooling] = useState("Liquid Cooling");
  const [score, setScore] = useState(0);
  const [co2Savings, setCo2Savings] = useState(0);

  const sustainabilityScores = {
    "Natural Fiber Insulation": 50,
    "Recycled Polypropylene Panels": 70,
    "Upcycled E-Waste Materials": 90,
    "Standard Concrete & Steel": 30,
    "Smart Grid Integration": 20,
    "Green Roofs": 20,
    "None": 0,
    "100% Renewable (Solar/Wind)": 50,
    "Hybrid (Renewable + Grid)": 30,
    "Fossil Fuels (Coal/Natural Gas)": 10,
    "Liquid Cooling": 40,
    "AI-Optimized Cooling": 30,
    "Traditional Air Cooling": 10,
  };

  const calculateImpact = () => {
    const totalScore = sustainabilityScores[materials] +
      sustainabilityScores[infrastructure] +
      sustainabilityScores[energy] +
      sustainabilityScores[cooling];
    setScore(totalScore);
    setCo2Savings(totalScore * 1.2);
  };

  return (
    <div style={{ backgroundColor: "#111", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "#39FF14" }}>🌱 Data Center Sustainability Planner</h1>
      <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "90%", maxWidth: "500px", boxShadow: "0px 0px 10px #39FF14" }}>
        <label>Building Materials:</label>
        <select value={materials} onChange={(e) => setMaterials(e.target.value)} className="dropdown">
          {Object.keys(sustainabilityScores).slice(0, 4).map(option => <option key={option}>{option}</option>)}
        </select>
        <label>Infrastructure Efficiency:</label>
        <select value={infrastructure} onChange={(e) => setInfrastructure(e.target.value)} className="dropdown">
          <option>Smart Grid Integration</option>
          <option>Green Roofs</option>
          <option>None</option>
        </select>
        <label>Energy Source:</label>
        <select value={energy} onChange={(e) => setEnergy(e.target.value)} className="dropdown">
          <option>100% Renewable (Solar/Wind)</option>
          <option>Hybrid (Renewable + Grid)</option>
          <option>Fossil Fuels (Coal/Natural Gas)</option>
        </select>
        <label>Cooling Technology:</label>
        <select value={cooling} onChange={(e) => setCooling(e.target.value)} className="dropdown">
          <option>Liquid Cooling</option>
          <option>AI-Optimized Cooling</option>
          <option>Traditional Air Cooling</option>
        </select>
        <button onClick={calculateImpact} style={{ width: "100%", padding: "10px", marginTop: "10px", borderRadius: "5px", backgroundColor: "#39FF14", color: "black", fontWeight: "bold" }}>Calculate Sustainability</button>
      </div>
      {score > 0 && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#111", borderRadius: "5px", textAlign: "center", boxShadow: "0px 0px 5px #39FF14" }}>
          <h3>🌍 Sustainability Score: {score} / 100</h3>
          <p>💚 CO₂ Savings: {co2Savings.toFixed(2)} kg</p>
        </div>
      )}
      {score > 0 && (
        <div style={{ width: "80%", maxWidth: "600px", marginTop: "20px" }}>
          <Bar data={{ labels: ["Your Sustainability Score"], datasets: [{ label: "Score", data: [score], backgroundColor: "lightgreen" }] }} options={{ responsive: true, plugins: { legend: { display: false }, title: { display: true, text: "Sustainability Score" } } }} />
        </div>
      )}
      <style>
        {`
          .dropdown {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            background-color: #111;
            color: white;
            border: 1px solid #39FF14;
            outline: none;
            font-size: 1rem;
            box-shadow: 0px 0px 5px #39FF14;
          }
          .dropdown:focus {
            box-shadow: 0px 0px 10px #39FF14;
          }
        `}
      </style>
    </div>
  );
};

export default SustainabilityCalculator;
