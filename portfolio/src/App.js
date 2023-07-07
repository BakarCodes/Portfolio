import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <div className='Routes'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App;
