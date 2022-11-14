import React from 'react';
import './App.css';
import SensorPage from './pages/SensorPage/SensorPage';
import Radon from './pages/SensorData/Radon';
import Multiparametro from './pages/SensorData/Multiparametro';
import BcMagee from './pages/SensorData/BcMagee';
import BcMaap from './pages/SensorData/BcMaap';
import Radiometro from './pages/SensorData/Radiometro';
import MpGrimm from './pages/SensorData/MpGrimm';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = 'container'>

      <Routes>
        <Route path = '/' element = {<SensorPage/>}></Route>
        <Route path = '/api/radon' element = {<Radon/>}></Route>
        <Route path = '/api/multiparametro' element = {<Multiparametro/>}></Route>
        <Route path = '/api/bcmagee' element = {<BcMagee/>}></Route>
        <Route path = '/api/bcmaap' element = {<BcMaap/>}></Route>
        <Route path = '/api/radiometro' element = {<Radiometro/>}></Route>
        <Route path = '/api/mpgrimm' element = {<MpGrimm/>}></Route>
      </Routes>

    </div>
  );
}

export default App;