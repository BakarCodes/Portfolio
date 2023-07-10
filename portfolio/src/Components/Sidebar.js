import React from 'react'
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2 className='intro'>Introduction (i)</h2>
      <ul>
        <li>About Me</li>
        <li>NOVO</li>
        <li>Weather App</li>
        <li>Contacts</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  )
}

export default Sidebar
