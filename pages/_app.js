import React, { useState } from "react";
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
    "Hempcrete": 80,
    "Bamboo Fiber Panels": 85,
    "Recycled Steel": 75,
    "None": 0,
    "Smart Grid Integration": 60,
    "Green Roofs": 50,
    "Advanced HVAC Systems": 70,
    "Passive Cooling Design": 80,
    "AI-Powered Smart Grids": 75,
    "None": 0,
    "100% Renewable (Solar/Wind)": 80,
    "Hybrid (Renewable + Grid)": 50,
    "Fossil Fuels (Coal/Natural Gas)": 20,
    "Geothermal Energy": 85,
    "Hydro Power": 75,
    "None": 0,
    "Liquid Cooling": 60,
    "AI-Optimized Cooling": 50,
    "Traditional Air Cooling": 30,
    "Immersion Cooling": 85,
    "Phase-Change Cooling": 75,
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
    <div style={{
      backgroundColor: "#111",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "#39FF14", marginBottom: "20px" }}>
        🌱 Data Center Sustainability Planner
      </h1>
      <div style={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "500px",
        boxShadow: "0px 0px 10px #39FF14",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
        <label>Building Materials:</label>
        <select value={materials} onChange={(e) => setMaterials(e.target.value)} className="dropdown">
          {Object.keys(sustainabilityScores).slice(0, 7).map(option => <option key={option}>{option}</option>)}
        </select>
        <label>Infrastructure Efficiency:</label>
        <select value={infrastructure} onChange={(e) => setInfrastructure(e.target.value)} className="dropdown">
          <option>Smart Grid Integration</option>
          <option>Green Roofs</option>
          <option>Advanced HVAC Systems</option>
          <option>Passive Cooling Design</option>
          <option>AI-Powered Smart Grids</option>
          <option>None</option>
        </select>
        <label>Energy Source:</label>
        <select value={energy} onChange={(e) => setEnergy(e.target.value)} className="dropdown">
          <option>100% Renewable (Solar/Wind)</option>
          <option>Hybrid (Renewable + Grid)</option>
          <option>Fossil Fuels (Coal/Natural Gas)</option>
          <option>Geothermal Energy</option>
          <option>Hydro Power</option>
          <option>None</option>
        </select>
        <label>Cooling Technology:</label>
        <select value={cooling} onChange={(e) => setCooling(e.target.value)} className="dropdown">
          <option>Liquid Cooling</option>
          <option>AI-Optimized Cooling</option>
          <option>Traditional Air Cooling</option>
          <option>Immersion Cooling</option>
          <option>Phase-Change Cooling</option>
          <option>None</option>
        </select>
        <button onClick={calculateImpact} style={{
          width: "100%",
          padding: "12px",
          marginTop: "10px",
          borderRadius: "5px",
          backgroundColor: "#39FF14",
          color: "black",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
          border: "none",
        }}>Calculate Sustainability</button>
      </div>

      {score > 0 && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#222",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0px 0px 8px #39FF14",
          width: "90%",
          maxWidth: "500px",
        }}>
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
            transition: box-shadow 0.3s ease-in-out;
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
