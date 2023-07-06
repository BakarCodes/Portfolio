import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
import github from '../Images/github.svg'


    

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }   else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize',showButton);

    return (
    <nav className='navbar'>
        
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                abubakar
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul2 className={click ? 'nav-menu active' : 'nav-menu'}>
                <li2 className='ProjBut'>
                    <Link to = "/Projects" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li2>
                <li2 className='about'>
                    <Link to = "/Projects" className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li2>
                <li2 className='Projects'>
                    <Link to = "/Projects" className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li2>
                
            </ul2>

        </div>
    </nav>
  )
}

export default Navbar