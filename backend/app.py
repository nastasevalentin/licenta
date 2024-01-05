from flask import Flask, request, jsonify
from flask_cors import CORS  
import os
os.environ['CUDA_VISIBLE_DEVICES'] = '-1'
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image


skinDiseaseModel = load_model('./models/skin_model')
pneumoniaXRayModel = load_model('./models/pneumonia_model')

app = Flask(__name__)
CORS(app)  

@app.route('/predict/skinDisease', methods=['POST'])
def predict_skinDisease():
    file = request.files['file']
    image = Image.open(file).resize((28, 28)) 
    image = np.expand_dims(image, axis=0)
    prediction = skinDiseaseModel.predict(image)
    predicted_values = prediction[0].tolist()  
    return jsonify({'prediction': predicted_values})

@app.route('/predict/pneumoniaXRay', methods=['POST'])
def predict_pneumoniaXRay():
    file = request.files['file']
    image = Image.open(file).resize((224, 224))
    image = np.expand_dims(image, axis=0)
    prediction = pneumoniaXRayModel.predict(image)
    predicted_values = prediction[0].tolist()
    return jsonify({'prediction': predicted_values})



if __name__ == '__main__':
    app.run(debug=True)