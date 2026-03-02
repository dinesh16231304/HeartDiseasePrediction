from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import sqlite3
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# Load Model and Scaler
MODEL_PATH = 'backend/heart_disease_model.pkl'
SCALER_PATH = 'backend/scaler.pkl'

if os.path.exists(MODEL_PATH) and os.path.exists(SCALER_PATH):
    model = joblib.load(MODEL_PATH)
    scaler = joblib.load(SCALER_PATH)
    print("Model and Scaler loaded successfully.")
else:
    print("Error: Model or Scaler not found. Please run train_model.py first.")
    model = None
    scaler = None

# Database Setup
DB_PATH = 'backend/database.db'

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS predictions
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  date TEXT,
                  age INTEGER,
                  sex INTEGER,
                  cp INTEGER,
                  trtbps INTEGER,
                  chol INTEGER,
                  fbs INTEGER,
                  restecg INTEGER,
                  thalachh INTEGER,
                  exng INTEGER,
                  oldpeak REAL,
                  slp INTEGER,
                  caa INTEGER,
                  thall INTEGER,
                  prediction INTEGER,
                  probability REAL)''')
    conn.commit()
    conn.close()

init_db()

@app.route('/predict', methods=['POST'])
def predict():
    if not model or not scaler:
        return jsonify({'error': 'Model not loaded'}), 500

    try:
        data = request.json
        # Extract features in the correct order
        features = [
            data['age'], data['sex'], data['cp'], data['trtbps'], data['chol'],
            data['fbs'], data['restecg'], data['thalachh'], data['exng'],
            data['oldpeak'], data['slp'], data['caa'], data['thall']
        ]
        
        # Preprocess
        features_array = np.array([features])
        features_scaled = scaler.transform(features_array)
        
        # Predict
        prediction = model.predict(features_scaled)[0]
        probability = model.predict_proba(features_scaled)[0][1] # Probability of heart disease (class 1)
        
        # Save to DB
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute('''INSERT INTO predictions (date, age, sex, cp, trtbps, chol, fbs, restecg, thalachh, exng, oldpeak, slp, caa, thall, prediction, probability)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                  (datetime.now().strftime("%Y-%m-%d %H:%M:%S"), *features, int(prediction), float(probability)))
        conn.commit()
        conn.close()
        
        return jsonify({
            'prediction': int(prediction),
            'probability': float(probability),
            'message': 'High Risk' if prediction == 1 else 'Low Risk'
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/history', methods=['GET'])
def history():
    try:
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        c = conn.cursor()
        c.execute("SELECT * FROM predictions ORDER BY date DESC")
        rows = c.fetchall()
        conn.close()
        
        history_data = [dict(row) for row in rows]
        return jsonify(history_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
