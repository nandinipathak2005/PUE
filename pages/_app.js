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
  const [pue, setPue] = useState(2.5);

  const sustainabilityScores = {
    "Natural Fiber Insulation": 50,
    "Recycled Polypropylene Panels": 70,
    "Upcycled E-Waste Materials": 90,
    "Standard Concrete & Steel": 30,
    "None": 0,
    "Smart Grid Integration": 60,
    "Green Roofs": 50,
    "Advanced HVAC Systems": 70,
    "None": 0,
    "100% Renewable (Solar/Wind)": 80,
    "Hybrid (Renewable + Grid)": 50,
    "Fossil Fuels (Coal/Natural Gas)": 20,
    "None": 0,
    "Liquid Cooling": 60,
    "AI-Optimized Cooling": 50,
    "Traditional Air Cooling": 30,
    "None": 0,
  };

  const calculateImpact = () => {
    const totalScore = (
      (sustainabilityScores[materials] * 0.25) +
      (sustainabilityScores[infrastructure] * 0.25) +
      (sustainabilityScores[energy] * 0.30) +
      (sustainabilityScores[cooling] * 0.20)
    );
    setScore(totalScore);
    setPue((2.5 - (totalScore / 100) * 1.2).toFixed(2));
  };

  return (
    <div style={{ backgroundColor: "#111", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "#39FF14" }}>🌱 Data Center Sustainability Planner</h1>
      <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "10px", width: "90%", maxWidth: "500px", boxShadow: "0px 0px 10px #39FF14" }}>
        <label>Building Materials:</label>
        <select value={materials} onChange={(e) => setMaterials(e.target.value)} className="dropdown">
          {Object.keys(sustainabilityScores).slice(0, 5).map(option => <option key={option}>{option}</option>)}
        </select>
        <label>Infrastructure Efficiency:</label>
        <select value={infrastructure} onChange={(e) => setInfrastructure(e.target.value)} className="dropdown">
          <option>Smart Grid Integration</option>
          <option>Green Roofs</option>
          <option>Advanced HVAC Systems</option>
          <option>None</option>
        </select>
        <label>Energy Source:</label>
        <select value={energy} onChange={(e) => setEnergy(e.target.value)} className="dropdown">
          <option>100% Renewable (Solar/Wind)</option>
          <option>Hybrid (Renewable + Grid)</option>
          <option>Fossil Fuels (Coal/Natural Gas)</option>
          <option>None</option>
        </select>
        <label>Cooling Technology:</label>
        <select value={cooling} onChange={(e) => setCooling(e.target.value)} className="dropdown">
          <option>Liquid Cooling</option>
          <option>AI-Optimized Cooling</option>
          <option>Traditional Air Cooling</option>
          <option>None</option>
        </select>
        <button onClick={calculateImpact} style={{ width: "100%", padding: "10px", marginTop: "10px", borderRadius: "5px", backgroundColor: "#39FF14", color: "black", fontWeight: "bold" }}>Calculate Sustainability</button>
      </div>
      {score > 0 && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#111", borderRadius: "5px", textAlign: "center", boxShadow: "0px 0px 5px #39FF14" }}>
          <h3>🌍 Sustainability Score: {score.toFixed(2)} / 100</h3>
          <p>🔋 Estimated PUE: {pue}</p>
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
