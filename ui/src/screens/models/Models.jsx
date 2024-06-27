import React from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Image,
  Spacer,
  Link,
} from '@chakra-ui/react';

export const Models = () => {
  return (
    <ChakraProvider>
      <Flex bg="gray.400" p={[2, 4]} color="white">
        <Text>My App</Text>
        <Spacer />
        <Box>
        <Link href='/models' mr={4}>Home</Link>
        <Link mr={4}>About</Link>
          <Link href="/pneumonia-model" mr={4}>Pneumonia Model</Link>
          <Link href="/hemorrhage-model" mr={4}>Hemorrhage Model</Link>
          <Link>Skin Disease Model</Link>
        </Box>
      </Flex>
      <Flex direction="column" p={4} align="center">
        <Flex direction="row" align="center" mb={4} width="100%" maxWidth="1200px">
          <Box position="relative" width="600px" height="auto">
            <Image src="lungs.jpg" alt="Image 1" width="100%" height="auto" />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="black"
              opacity="0.4"
              zIndex="1"
            />
          </Box>
          <Text ml={4} flex="1" zIndex="2">
            Our advanced machine learning model leverages deep neural networks to analyze chest X-rays for signs of pneumonia. By training on a large dataset of labeled X-ray images, the model learns to identify patterns and anomalies associated with pneumonia. This system can assist radiologists by providing a second opinion, highlighting potential areas of concern, and prioritizing cases for further review. The model's high accuracy in detecting pneumonia can significantly reduce diagnostic errors and improve patient outcomes, especially in high-volume clinical settings where quick and accurate diagnosis is critical.
          </Text>
        </Flex>
        <Flex direction="row" align="center" mb={4} width="100%" maxWidth="1200px">
          <Box position="relative" width="600px" height="auto">
            <Image src="head2.jpg" alt="Image 2" width="100%" height="auto" />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="black"
              opacity="0.4"
              zIndex="1"
            />
          </Box>
          <Text ml={4} flex="1" zIndex="2">
            Head X-ray imaging is a crucial diagnostic tool for detecting hemorrhages within the skull. Hemorrhages can occur due to traumatic brain injuries, strokes, or other medical conditions. The detailed images produced by head X-rays allow medical professionals to assess the extent and location of bleeding. Our imaging technology enhances the visibility of subtle changes in the brain's structure, aiding in the early detection and treatment of hemorrhages. Prompt identification and intervention are essential to minimize potential brain damage and improve recovery prospects for patients.
          </Text>
        </Flex>
        <Flex direction="row" align="center" width="100%" maxWidth="1200px">
          <Box position="relative" width="600px" height="auto">
            <Image src="skin2.jpg" alt="Image 3" width="100%" height="auto" />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="black"
              opacity="0.4"
              zIndex="1"
            />
          </Box>
          <Text ml={4} flex="1" zIndex="2">
            Our comprehensive skin disease detection system utilizes high-resolution imaging and advanced image analysis algorithms to diagnose a wide range of skin conditions. From common ailments like eczema and psoriasis to more serious concerns such as melanoma, our system provides a thorough examination of skin anomalies. By comparing the images to a vast database of known conditions, the system can suggest potential diagnoses and treatment options. This technology empowers dermatologists with precise insights, enabling quicker and more accurate treatment plans, ultimately enhancing patient care and outcomes.
          </Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
