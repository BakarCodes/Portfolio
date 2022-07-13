import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'


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
                PORTFOLIO <i className='fa-solid fa-alien' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul2 className={click ? 'nav-menu active' : 'nav-menu'}>
                <li2 className='GoGreen'>
                    <Link to = "/GoGreen" className='nav-links' onClick={closeMobileMenu}>
                        GOGREEN
                    </Link>
                </li2>
                <li2 className='Weather'>
                    <Link to = "/Weather" className='nav-links' onClick={closeMobileMenu}>
                        WEATHER
                    </Link>
                    
                </li2>
                <li2 className='Otio'>
                    <Link to = "/Otio" className='nav-links' onClick={closeMobileMenu}>
                        OTIO
                    </Link>
                </li2>
            </ul2>

        </div>
    </nav>
  )
}

export default Navbar