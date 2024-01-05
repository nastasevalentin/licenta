import React, { useState } from 'react';
import './NavBar.css';

const Models = () => {
    const [selectedFiles, setSelectedFiles] = useState({
        skinDisease: null,
        pneumoniaXRay: null,
        hemorrhageXRay: null,
        diseasePrediction: null
    });

    const [predictedLabel, setPredictedLabel] = useState({});  

    const fileSelectedHandler = (event, model) => {
        setSelectedFiles(prevState => ({
            ...prevState,
            [model]: event.target.files[0]
        }));
    }
    
    const fileUploadHandler = (model) => {
        const formData = new FormData();
        formData.append('file', selectedFiles[model]);
    
        fetch(`http://localhost:5000/predict/${model}`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('File:', selectedFiles[model]);  
            console.log('Prediction:', data.prediction);  
    
            
            const maxIndex = data.prediction.indexOf(Math.max(...data.prediction));
    
            
            const lesion_type_dicts = {
                'skinDisease': {
                    'akiec': 'Actinic keratoses',
                    'bcc': 'Basal cell carcinoma',
                    'bkl': 'Benign keratosis-like lesions ',
                    'df': 'Dermatofibroma',
                    'nv': 'Melanocytic nevi',
                    'vasc': 'Vascular lesions',
                    'mel': 'Melanoma'
                },
                'pneumoniaXRay': {
                    'pneumonia': 'Pneumonia',
                    'normal': 'Normal'
                },
                'hemorrhageXRay': {
                    
                },
                'diseasePrediction': {
                    
                }
                
            };
            const labels = Object.values(lesion_type_dicts[model]);
            const label = labels[maxIndex];
    
            setPredictedLabel(prevState => ({  
                ...prevState,
                [model]: label
            }));
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <h1>Available ML models</h1>
            <ul style={{ listStyleType: 'none' }}>
                <li style={{ marginBottom: '20px' }}>
                    Skin Disease Check
                    <input style={{ marginLeft: '50px' }} type="file" onChange={(event) => fileSelectedHandler(event, 'skinDisease')} />
                    <button onClick={() => fileUploadHandler('skinDisease')}>Submit</button>
                    {predictedLabel && predictedLabel['skinDisease'] && <p>Predicted label: {predictedLabel['skinDisease']}</p>}
                </li>
                <li style={{ marginBottom: '20px' }}>
                    Pneumonia X-Ray
                    <input style={{ marginLeft: '50px' }} type="file" onChange={(event) => fileSelectedHandler(event, 'pneumoniaXRay')} />
                    <button onClick={() => fileUploadHandler('pneumoniaXRay')}>Submit</button>
                    {predictedLabel && predictedLabel['pneumoniaXRay'] && <p>Predicted label: {predictedLabel['pneumoniaXRay']}</p>}
                </li>
                <li style={{ marginBottom: '20px' }}>
                    Hemorrhage X-Ray
                    <input style={{ marginLeft: '50px' }} type="file" onChange={(event) => fileSelectedHandler(event, 'hemorrhageXRay')} />
                    <button onClick={() => fileUploadHandler('hemorrhageXRay')}>Submit</button>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    Disease Prediction Survey
                    <input style={{ marginLeft: '50px' }} type="file" onChange={(event) => fileSelectedHandler(event, 'diseasePrediction')} />
                    <button onClick={() => fileUploadHandler('diseasePrediction')}>Submit</button>
                </li>
            </ul>
        </div>
    );
}

export default Models;