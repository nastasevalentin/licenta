import React, { useState } from 'react';

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
export const HemmorhageModel = () => {
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

    fetch('http://localhost:5000/head_hemorrhage_model', {
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
          <Link mr={4} href='/hemorrhage-model'>Hemorrhage Model</Link>
          <Link href='/skin-disease-detection'>Skin Disease Model</Link>
        </Box>
      </Flex>
      <Box p={4} bg='white' color='black' borderRadius='md'>
        <Text fontSize='3xl' mr={4} ml={4}>
          Head Hemorrhage Detection Model
        </Text>
        <Text fontSize='large' mr={4} ml={4}>
        Detecting head hemorrhages early and accurately is critical in medical emergencies. Our advanced machine learning model leverages cutting-edge artificial intelligence to analyze CT scans, accurately identifying signs of head hemorrhage with remarkable precision. This innovative technology supports healthcare professionals by providing a reliable, efficient, and non-invasive diagnostic tool, enabling timely interventions and improving patient outcomes. Our model is trained on a diverse dataset, ensuring robust performance across different patient demographics. 
        </Text>
      </Box>

      <Flex direction='row' align='center'>
        <Box position='relative' width='650px' height='auto'>
          <Image
            src='head-hemorrhage-cm.png'
            alt='Image 3'
            width='650px'
            height='600px'
            objectFit='cover'
          />
        </Box>
        <Box p={4} marginLeft='30px' width='900px'>
          <Text fontSize='large' mb={4}>
            Take advantage of our advanced AI technology by uploading your head
            CT images. Our model will analyze the images and provide a quick
            and accurate assessment for signs of hemorrhage. Join us in utilizing
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
    <Flex direction="row" align="center">
      <Image height="600px" width="500px" src={imageURL} alt="Uploaded" />
      <Box ml={10}> {}
        {prediction && (
          <Text>
            {prediction === 'Hemorrhage' 
              ? 'Our prediction is: You have hemorrhage. Please consult with a healthcare professional immediately.' 
              : 'Our prediction is: You do not have hemorrhage. However, if you are feeling unwell, please consult with a healthcare professional.'}
          </Text>
        )}
      </Box>
    </Flex>
  </Box>
)}
    </ChakraProvider>
  );
};
