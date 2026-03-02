import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import HistoryTable from './components/HistoryTable';

function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/history');
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handlePredict = async (formData) => {
    setLoading(true);
    try {
      // Convert types
      const payload = {
        age: parseInt(formData.age),
        sex: parseInt(formData.sex),
        cp: parseInt(formData.cp),
        trtbps: parseInt(formData.trtbps),
        chol: parseInt(formData.chol),
        fbs: parseInt(formData.fbs),
        restecg: parseInt(formData.restecg),
        thalachh: parseInt(formData.thalachh),
        exng: parseInt(formData.exng),
        oldpeak: parseFloat(formData.oldpeak),
        slp: parseInt(formData.slp),
        caa: parseInt(formData.caa),
        thall: parseInt(formData.thall)
      };

      const response = await axios.post('http://localhost:5000/predict', payload);
      setResult(response.data);
      fetchHistory(); // Refresh history
    } catch (error) {
      console.error("Error predicting:", error);
      alert("Prediction failed. Please check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900">Heart Disease Prediction System</h1>
          <p className="mt-2 text-lg text-gray-600">Advanced ML-powered risk assessment</p>
        </header>

        <main>
          <PredictionForm onPredict={handlePredict} loading={loading} />
          <ResultCard result={result} />
          <HistoryTable history={history} />
        </main>
      </div>
    </div>
  );
}

export default App;
