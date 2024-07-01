import { useState } from 'react';
import { Button, Flex, Text, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate('/info');
  };

  const handleModelClick = () => {
    navigate('/models');
  }

  return (
    <Box
      background="url('/bg.png')"
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      height='100vh'
      width='100vw'
    >
      <Flex
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        height='100%'
      >
        <Text
          color='#447D88'
          fontSize='48'
          fontWeight='600'
          letterSpacing='2px'
          mb={8}
          pointerEvents='none'
          userSelect='none'
        >
          Medical
        </Text>

        <Button size='lg' mb={4} onClick={handleModelClick}>
          Test our ML models
        </Button>

        <Button
          color='white'
          size='lg'
          variant='link'
          onClick={handleInfoClick}
        >
          Find out more about symptoms and diseases
        </Button>
      </Flex>
    </Box>
  );
};
