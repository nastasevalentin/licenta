import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Landing } from './screens/landing';
import { Info } from './screens/info';
import { Results } from './screens/results';
import { SkinDisease } from './models/skinDisease/SkinDisease';

export const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/info' element={<Info />} />
        <Route path='/results/:id' element={<Results />} />
        <Route path='/skin-disease-detection' element={<SkinDisease/>} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
