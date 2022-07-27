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
                ABUBAKAR
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul2 className={click ? 'nav-menu active' : 'nav-menu'}>
                <li2 className='ProjBut'>
                    <Link to = "/Projects" className='nav-links' onClick={closeMobileMenu}>
                        PROJECTS
                    </Link>
                </li2>
                <li2 className='GitHub'>
                    <Link to = "/Github" className='nav-links' onClick={closeMobileMenu} target="_blank" >
                        <a href='https://www.github.com/bakarcodes'>
                            GITHUB
                            {/*<img height={30} src={github} alt='github'/>*/}
                        </a>
                        
                    </Link>
                    
                </li2>
                <li2 className='LinkedIn'>
                    <Link to = "/LinkedIn" className='nav-links' onClick={closeMobileMenu}>
                        <a href="https://www.linkedin.com/in/abubakargudal">
                            LINKEDIN
                        </a>
                    </Link>
                </li2>
            </ul2>

        </div>
    </nav>
  )
}

export default Navbar