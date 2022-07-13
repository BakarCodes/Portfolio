import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home';
import GoGreen from './Components/Pages/GoGreen';
import WeatherApp from './Components/Pages/WeatherApp';
import Otio from './Components/Pages/Otio.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Routes'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/GoGreen' element={<GoGreen/>} />
        <Route path='/Weather' element={<WeatherApp/>} />
        <Route path='/Otio' element={<Otio/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App;
