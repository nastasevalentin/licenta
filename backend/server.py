from flask import Flask, request
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from PIL import Image
import numpy as np
import os
import cv2

app = Flask(__name__)
CORS(app, resources={r"/pneumonia_model": {"origins": "http://localhost:3000"}})
CORS(app, resources={r"/head_hemorrhage_model": {"origins": "http://localhost:3000"}})
CORS(app, resources={r"/skin_disease_model": {"origins": "http://localhost:3000"}})


models = {
    'dermatology_model': load_model(os.path.join('new_models', 'dermatology_model.keras')),
    'head_hemorrhage_model': load_model(os.path.join('new_models', 'head_hemorrhage_model.keras')),
    'pneumonia_model': load_model(os.path.join('new_models', 'pneumonia_model.keras')),
}

def prepare_image(image, target_size):
    if image.mode != "RGB":
        image = image.convert("RGB")
    image = image.resize(target_size)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    return image

@app.route('/pneumonia_model', methods=['POST'])
def predict_pneumonia():
    if 'file' not in request.files:
        return 'No file part in the request.', 400
    file = request.files['file']
    if file.filename == '':
        return 'No file selected for uploading.', 400
    if file:
        image = Image.open(file)
        prepared_image = prepare_image(image, target_size=(224, 224))
        prediction = models['pneumonia_model'].predict(prepared_image)
        label = 'PNEUMONIA' if np.argmax(prediction) == 0 else 'NORMAL'
        return label
    else:
        return 'Invalid file.', 400

@app.route('/head_hemorrhage_model', methods=['POST'])
def predict_hemorrhage():
    if 'file' not in request.files:
        return 'No file part in the request.', 400
    file = request.files['file']
    if file.filename == '':
        return 'No file selected for uploading.', 400
    if file:
        image = Image.open(file)
        prepared_image = prepare_image(image, target_size=(224, 224))
        prediction = models['head_hemorrhage_model'].predict(prepared_image)
        print(prediction)
        label = 'Hemorrhage' if np.argmax(prediction) == 0 else 'NORMAL'
        print(label)
        return label
    else:
        return 'Invalid file.', 400

@app.route('/skin_disease_model', methods=['POST'])
def predict_skin_disease():
    labels = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6'
    }
    if 'file' not in request.files:
        return 'No file part in the request.', 400
    file = request.files['file']
    if file.filename == '':
        return 'No file selected for uploading.', 400
    if file:
        image = Image.open(file)
        image_np = np.array(image)
        resized_image_np = cv2.resize(image_np, (28, 28))
        resized_image = Image.fromarray(resized_image_np)
        prepared_image = prepare_image(resized_image, target_size=(28, 28))
        prediction = models['dermatology_model'].predict(prepared_image)  
        label_index = np.argmax(prediction)
        print(label_index)
        label = labels.get(label_index, 'Unknown')
        return label
    else:
        return 'Invalid file.', 400

if __name__ == '__main__':
    app.run(debug=True)