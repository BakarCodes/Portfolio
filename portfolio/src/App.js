import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="content">
        <div className='Routes'>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
