import React from 'react'
import './Sidebar.css';

function Sidebar({ oneRef, twoRef, threeRef, fourRef, fiveRef }) {  // Receive refs as props
    const scrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='sidebar'>
            <ul>
                <li onClick={() => scrollTo(oneRef)}>Introduction</li>
                <li onClick={() => scrollTo(twoRef)}>About Me</li>
                <li onClick={() => scrollTo(threeRef)}>Wrappify</li>
                <li onClick={() => scrollTo(fourRef)}>Novo</li>
                <li onClick={() => scrollTo(fiveRef)}>GoGreen</li>
            </ul>
        </div>
    )
}

export default Sidebar