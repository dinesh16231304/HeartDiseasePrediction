# ❤️ Heart Disease Prediction System

A Machine Learning-based web application that predicts the likelihood of heart disease using patient medical data.  
The model is built using **K-Means clustering** and evaluated using a **Confusion Matrix**.  
The application integrates a Python backend with a JavaScript-based frontend for real-time predictions.

---

## 🚀 Features

- Heart disease risk prediction
- K-Means clustering model
- Model trained and saved as `model.pkl`
- Confusion Matrix evaluation
- Flask backend integration
- Interactive frontend using HTML, CSS, and JavaScript
- SQLite database support (`database.db`)

---

## 🛠️ Tech Stack

- **Python**
- **Flask**
- **Scikit-learn**
- **Pandas & NumPy**
- **HTML, CSS**
- **JavaScript**
- **SQLite**

---

## 📂 Project Structure

```
HeartDiseasePrediction/
│
├── app.py                # Main Flask application
├── main.py               # Backend logic
├── train_model.py        # Model training script
├── test_predict.py       # Model testing script
├── model.pkl             # Trained ML model
├── database.db           # SQLite database
├── index.html            # Frontend HTML
├── style.css             # Styling
├── script.js             # Frontend logic
└── Heart_Disease_Prediction.csv  # Dataset
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/heart-disease-prediction.git
cd heart-disease-prediction
```

### 2️⃣ Create Virtual Environment (Optional but Recommended)

```bash
python -m venv venv
venv\Scripts\activate   # For Windows
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

If no requirements file, install manually:

```bash
pip install flask pandas numpy scikit-learn
```

---

## ▶️ Run the Application

```bash
python app.py
```

Open your browser and go to:

```
http://127.0.0.1:5000/
```

---

## 📊 Model Details

- Algorithm: **K-Means Clustering**
- Evaluation: **Confusion Matrix**
- Features used: Age, Cholesterol, Blood Pressure, etc.
- Output: Risk Prediction (High / Low)

---

## 📈 Future Improvements

- Replace K-Means with supervised classification (Logistic Regression / Random Forest)
- Deploy on Render / AWS / Heroku
- Add user authentication
- Improve UI design

---

## 👩‍💻 Author

Sai Dinesh Somavarapu 
2025
