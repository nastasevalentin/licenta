import React from 'react';
import { ChakraProvider, Flex, Box, Text, Button } from '@chakra-ui/react';

export const Models = () => {
  return (
    <div style={{ marginTop: '200px' }}>
      <Box
        width='75%'
        height='200px'
        borderRadius='25px'
        boxShadow='md'
        p='4'
        mb='4'
        bg='gray.400'
        border='1px solid'
        borderColor='gray.200'
        textAlign='center'
        ml='0'
        display='flex'
        alignItems='center'
        justifyContent='center'
        _hover={{ transform: 'scale(1.02)' }} // Add hover effect
        transition='transform 0.3s'
      >
        <Button
          background='gray.400'
          textAlign='center'
          fontSize='2xl'
          _hover={{ transform: 'scale(1.2)' }}
          transition='transform 0.3s'
          _active={{ bg: 'gray.400' }} 

        >
          This is some text inside the second round card.
        </Button>
      </Box>

      <Box
        width='75%'
        height='200px'
        borderRadius='25px'
        boxShadow='md'
        p='4'
        mb='4'
        bg='gray.400'
        border='1px solid'
        borderColor='gray.200'
        textAlign='center'
        ml='auto'
        display='flex'
        alignItems='center'
        justifyContent='center'
        _hover={{ transform: 'scale(1.02)' }} // Add hover effect
        transition='transform 0.3s'
      >
        <Button
          background='gray.400'
          textAlign='center'
          fontSize='2xl'
          _hover={{ transform: 'scale(1.2)' }}
          transition='transform 0.3s'
          _active={{ bg: 'gray.400' }} 

        >
          This is some text inside the second round card.
        </Button>
      </Box>

      <Box
        width='75%'
        height='200px'
        borderRadius='25px'
        boxShadow='md'
        p='4'
        mb='4'
        bg='gray.400'
        border='1px solid'
        borderColor='gray.200'
        textAlign='center'
        ml='0'
        display='flex'
        alignItems='center'
        justifyContent='center'
        _hover={{ transform: 'scale(1.02)' }} // Add hover effect
        transition='transform 0.3s'
      >
        <Button
          background='gray.400'
          textAlign='center'
          fontSize='2xl'
          _hover={{ transform: 'scale(1.2)' }}
          transition='transform 0.3s'
          _active={{ bg: 'gray.400' }} 

        >
          This is some text inside the second round card.
        </Button>
      </Box>

      <Box
        width='75%'
        height='200px'
        borderRadius='25px'
        boxShadow='md'
        p='4'
        mb='4'
        bg='gray.400'
        border='1px solid'
        borderColor='gray.200'
        textAlign='center'
        ml='auto'
        display='flex'
        alignItems='center'
        justifyContent='center'
        _hover={{ transform: 'scale(1.02)' }} // Add hover effect
        transition='transform 0.3s'
      >
        <Button
          background='gray.400'
          textAlign='center'
          fontSize='2xl'
          _hover={{ transform: 'scale(1.2)' }}
          transition='transform 0.3s'
          _active={{ bg: 'gray.400' }} 

        >
          This is some text inside the second round card.
        </Button>
      </Box>
    </div>
  );
};
