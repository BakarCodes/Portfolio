import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Routes'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projects' element={<Projects/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App;
