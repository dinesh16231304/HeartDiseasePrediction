import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os
import requests

# 1. Download Dataset
url = "https://gist.githubusercontent.com/trantuyen082001/1fc2f5c0ad1507f40e721e6d18b34138/raw/heart.csv"
csv_path = "backend/heart.csv"

# if os.path.exists(csv_path):
#     os.remove(csv_path) # Remove the bad file

# print("Downloading dataset...")
# response = requests.get(url)
# with open(csv_path, 'wb') as f:
#     f.write(response.content)
# print("Download complete.")

# 2. Load Data
df = pd.read_csv(csv_path)
print(f"Dataset shape: {df.shape}")

# 3. Preprocessing
# Check for missing values
if df.isnull().sum().sum() > 0:
    print("Handling missing values...")
    df = df.dropna()

# Features and Target
X = df.drop('output', axis=1)
y = df['output']

# Split Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 4. Model Training (Random Forest)
print("Training Random Forest Model...")
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# 5. Evaluation
y_pred = model.predict(X_test_scaled)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.4f}")
print("Classification Report:")
print(classification_report(y_test, y_pred))

# 6. Save Model and Scaler
print("Saving model and scaler...")
joblib.dump(model, 'backend/heart_disease_model.pkl')
joblib.dump(scaler, 'backend/scaler.pkl')
print("Done.")
