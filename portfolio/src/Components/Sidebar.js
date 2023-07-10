import React from 'react'
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2 className='intro'>Introduction (i)</h2>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  )
}

export default Sidebar
