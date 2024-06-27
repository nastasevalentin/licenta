import React, { useState, useEffect } from 'react';

import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Image,
  Spacer,
  Link,
  Input,
  Button,
} from '@chakra-ui/react';
export const SkinDisease = () => {
  
  const diseases = {
    '0': 'actinic-keratosis',
    '1': 'basal-cell-carcinoma',
    '2': 'benign-skin-lesions',
    '3': 'dermatofibroma',
    '4': 'melanocytic-naevus',
    '5': 'vascular-skin-problems',
    '6': 'melanoma'
  };

  const diseaseNames = {
    '0': 'Actinic Keratoses',
    '1': 'Basal Cell Carcinoma',
    '2': 'Benign Keratosis-Like Lesions',
    '3': 'Dermatofibroma',
    '4': 'Melanocytic Nevi',
    '5': 'Vascular Lesions',
    '6': 'Melanoma'
  };
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', file);

    setImageURL(URL.createObjectURL(file));

    fetch('http://localhost:5000/skin_disease_model', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(prediction => {
        console.log('Prediction: ', prediction);
        setPrediction(prediction);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    console.log(prediction);
  }, [prediction]);

  return (
    <ChakraProvider>
      <Flex bg='gray.400' p={[2, 4]} color='white'>
        <Text>My App</Text>
        <Spacer />
        <Box>
          <Link href='/models' mr={4}>Home</Link>
          <Link mr={4}>About</Link>
          <Link href='/pneumonia-model' mr={4}>
            Pneumonia Model
          </Link>
          <Link mr={4} href='/hemorrhage-model'>
            Hemorrhage Model
          </Link>
          <Link href='/skin-disease-detection'>Skin Disease Model</Link>
        </Box>
      </Flex>
      <Box p={4} bg='white' color='black' borderRadius='md'>
        <Text fontSize='3xl' mr={4} ml={4}>
          Skin Disease Detection Model
        </Text>
        <Text fontSize='large' mr={4} ml={4}>
          Skin diseases pose significant health risks and can lead to severe
          complications if not diagnosed and treated promptly. Conditions such
          as melanoma, psoriasis, and eczema not only affect the skin but can
          also have systemic effects, leading to serious health problems. Early
          and accurate detection is essential to prevent the progression of
          these diseases and to ensure timely medical intervention. Our advanced
          machine learning model is at the forefront of skin disease prediction,
          utilizing state-of-the-art artificial intelligence to analyze skin
          images and accurately identify various skin conditions. This
          innovative technology empowers healthcare professionals by providing a
          reliable, efficient, and non-invasive diagnostic tool. Our model,
          trained on a comprehensive and diverse dataset, demonstrates robust
          performance across different skin types and conditions, ensuring
          accurate predictions for a wide range of patients.
        </Text>
      </Box>

      <Flex direction='row' align='center'>
        <Box position='relative' width='690px' height='auto'>
          <Image
            src='skin-disease-cm.png'
            alt='Image 3'
            width='690px'
            height='600px'
            objectFit='cover'
          />
        </Box>
        <Box p={4} marginLeft='30px' width='900px'>
          <Text fontSize='large' mb={4}>
            Take advantage of our advanced AI technology by uploading a photo with your skin. Our model will analyze the images and provide a quick and
            accurate assessment for signs of skin diseases. Join us in utilizing
            cutting-edge technology to improve early diagnosis and enhance
            healthcare outcomes.
          </Text>
          <Flex>
            <Input
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              style={{ border: 'none', outline: 'none' }}
            />
            <Button type='submit' marginLeft='10px' onClick={handleSubmit}>
              Submit
            </Button>
          </Flex>{' '}
        </Box>
      </Flex>
      {imageURL && (
        <Box mt={4} ml={4}>
          <Flex direction='row' align='center'>
            <Image height='600px' width='500px' src={imageURL} alt='Uploaded' />
            <Box ml={10}>
              {' '}
              {}
              {prediction && (
                <Text>
                {`Our prediction is: You have ${diseaseNames[prediction]}. Please consult with a healthcare professional immediately. You can learn more about it `}
                <Link href={`https://dermnetnz.org/topics/${diseases[prediction]}`} color="blue.500" isExternal>
                  here
                </Link>
                {'.'}
              </Text>
              )}
            </Box>
          </Flex>
        </Box>
      )}
    </ChakraProvider>
  );
};
