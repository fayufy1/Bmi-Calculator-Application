import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [image, setImage] = useState(''); // State for image

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight && height) {
      const bmiValue = calculateBMI(weight, height);
      setBmi(bmiValue);
      const bmiStatus = getBMIStatus(bmiValue);
      setStatus(bmiStatus);
      setImageBasedOnBMI(bmiValue); // Set image based on BMI
    }
  };

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    return bmiValue;
  };

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    return 'Obese';
  };

  const setImageBasedOnBMI = (bmi) => {
    if (bmi < 18.5) {
      setImage('/images/underweight.jpg'); // Notice the leading '/'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setImage('/images/normal.jpg');
    } else if (bmi >= 25 && bmi <= 29.9) {
      setImage('/images/overweight.jpg');
    } else {
      setImage('/images/obese.jpg');
    }
  };

  return (
    <div className="app">
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>

      {bmi && (
        <div className="result">
          <h2>Your BMI is: {bmi}</h2>
          <p className={`status ${status.toLowerCase()}`}>{status}</p>
          <div className="tips">
            {status === 'Underweight' && <p>Tips: Increase your calorie intake and focus on nutrient-dense foods.</p>}
            {status === 'Overweight' && <p>Tips: Consider reducing calorie intake and increasing physical activity.</p>}
            {status === 'Obese' && <p>Tips: Focus on a balanced diet, regular exercise, and consult a healthcare provider.</p>}
            {status === 'Normal weight' && <p>Maintain your weight by eating a balanced diet and staying physically active.</p>}
          </div>

          {image && <img src={image} alt={status} className="bmi-image" />} {/* Conditionally render the image */}
        </div>
      )}
    </div>
  );
}

export default App;
