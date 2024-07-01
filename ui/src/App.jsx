import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Landing } from './screens/landing';
import { SkinDisease } from './models/skinDisease/SkinDisease';
import { Models } from './screens/models/Models.jsx';
import { PneumoniaModel } from './screens/pneumoniaModel/PneumoniaModel.jsx';
import { HemmorhageModel } from './screens/hemorrhageModel/HemorrhageModel.jsx';

export const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/skin-disease-detection' element={<SkinDisease/>} />
        <Route path='/models' element={<Models/>}/>
        <Route path='/pneumonia-model' element={<PneumoniaModel/>}/>
        <Route path='/hemorrhage-model' element={<HemmorhageModel />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
