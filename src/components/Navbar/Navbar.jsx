import React, { useState } from 'react';
import Vite from "../../assets/react.svg";
import { FaBars, FaSearch , FaMoon, FaSun,FaBell } from 'react-icons/fa';
import './Navbar.css';
 
const Navbar = () => {
        const [isSun, setIsSun] = useState(true);
        const handleClick = () => {
          setIsSun(!isSun);
        };
  return (
    <div className='Navbar'>
        <div className="Icon-hamburger">
        <FaBars size={20} style={{ color: 'rgb(126, 58, 242)' }} />
        </div>
        <div className="Search">
            <div className='Search-input'>    
            <button><FaSearch size={16} style={{ color: 'rgb(126, 58, 242)' }} /></button>
            </div>
            <input type="text"  placeholder="Search for projects"/>
            
        </div>
        <div className="Icons">
            <ul>
                <li>
                    <button onClick={handleClick}>
                        {isSun ? (
                        <FaSun size={20} style={{ color: 'rgb(126, 58, 242)' }} />
                        ) : (
                        <FaMoon size={20} style={{ color: 'rgb(126, 58, 242)' }} />
                        )}
                    </button>
                </li>
                <li><button><FaBell size={20} style={{ color: 'rgb(126, 58, 242)' }} /></button></li>

                <li><a href=''><img src={Vite} alt="Nombre de la persona" /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar