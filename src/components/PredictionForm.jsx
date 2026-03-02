import React, { useState } from 'react';

const PredictionForm = ({ onPredict, loading }) => {
    const [formData, setFormData] = useState({
        age: '',
        sex: '1',
        cp: '0',
        trtbps: '',
        chol: '',
        fbs: '0',
        restecg: '0',
        thalachh: '',
        exng: '0',
        oldpeak: '',
        slp: '0',
        caa: '0',
        thall: '0'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPredict(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Patient Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Sex</label>
                    <select name="sex" value={formData.sex} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2">
                        <option value="1">Male</option>
                        <option value="0">Female</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Chest Pain Type (cp)</label>
                    <select name="cp" value={formData.cp} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2">
                        <option value="0">Typical Angina</option>
                        <option value="1">Atypical Angina</option>
                        <option value="2">Non-anginal Pain</option>
                        <option value="3">Asymptomatic</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Resting Blood Pressure (trtbps)</label>
                    <input type="number" name="trtbps" value={formData.trtbps} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Cholesterol (chol)</label>
                    <input type="number" name="chol" value={formData.chol} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Fasting Blood Sugar > 120 mg/dl (fbs)</label>
                    <select name="fbs" value={formData.fbs} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2">
                        <option value="0">False</option>
                        <option value="1">True</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Resting ECG (restecg)</label>
                    <select name="restecg" value={formData.restecg} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2">
                        <option value="0">Normal</option>
                        <option value="1">ST-T Wave Abnormality</option>
                        <option value="2">Left Ventricular Hypertrophy</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Max Heart Rate (thalachh)</label>
                    <input type="number" name="thalachh" value={formData.thalachh} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Exercise Induced Angina (exng)</label>
                    <select name="exng" value={formData.exng} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2">
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Oldpeak</label>
                    <input type="number" step="0.1" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Slope (slp)</label>
                    <select name="slp" value={formData.slp} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2">
                        <option value="0">Upsloping</option>
                        <option value="1">Flat</option>
                        <option value="2">Downsloping</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number of Major Vessels (caa)</label>
                    <select name="caa" value={formData.caa} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Thalassemia (thall)</label>
                    <select name="thall" value={formData.thall} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2">
                        <option value="0">Null</option>
                        <option value="1">Fixed Defect</option>
                        <option value="2">Normal</option>
                        <option value="3">Reversable Defect</option>
                    </select>
                </div>
            </div>
            <div className="mt-6">
                <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors">
                    {loading ? 'Predicting...' : 'Predict Risk'}
                </button>
            </div>
        </form>
    );
};

export default PredictionForm;
