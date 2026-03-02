import React from 'react';

const ResultCard = ({ result }) => {
    if (!result) return null;

    const isHighRisk = result.prediction === 1;
    const bgColor = isHighRisk ? 'bg-red-100' : 'bg-green-100';
    const textColor = isHighRisk ? 'text-red-800' : 'text-green-800';
    const borderColor = isHighRisk ? 'border-red-200' : 'border-green-200';

    return (
        <div className={`p-6 rounded-lg shadow-md border ${bgColor} ${borderColor} mt-6`}>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Prediction Result</h2>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-lg font-semibold text-gray-700">Risk Level:</p>
                    <p className={`text-3xl font-bold ${textColor}`}>
                        {isHighRisk ? 'HIGH RISK' : 'LOW RISK'}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-600">Confidence:</p>
                    <p className="text-xl font-bold text-gray-800">
                        {(result.probability * 100).toFixed(1)}%
                    </p>
                </div>
            </div>
            <p className="mt-4 text-gray-600">
                {isHighRisk
                    ? "The model suggests a high probability of heart disease. Please consult a cardiologist immediately."
                    : "The model suggests a low probability of heart disease. Maintain a healthy lifestyle."}
            </p>
        </div>
    );
};

export default ResultCard;
