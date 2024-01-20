import  { useState,useEffect } from 'react';
import imagen from "../../assets/imagen.jpg";
import { FaBars, FaSearch , FaMoon, FaSun,FaBell, FaUser, FaCog, FaSignOutAlt  } from 'react-icons/fa';
import { FaHome, FaUserTie, FaUsers, FaUniversity,FaBuilding } from 'react-icons/fa';

import './Navbar.css';
 
const Navbar = () => {
    const storedActiveIndex = localStorage.getItem('activeIndex');
    const [activeIndex, setActiveIndex] = useState(storedActiveIndex ? parseInt(storedActiveIndex) : 0);
    const [isSun, setIsSun] = useState(true);
    const [nav, setINav] = useState(true);

    const [mostrarOpciones, setMostrarOpciones] = useState(false);
  
    useEffect(() => {
      localStorage.setItem('activeIndex', activeIndex.toString());
    }, [activeIndex]);
  
    const handleClickNav = () => {
        setINav(!nav);
    };
      const handleClick = () => {
        setIsSun(!isSun);
    };
    const handleImagenClick = (e) => {
      e.preventDefault();
      setMostrarOpciones(!mostrarOpciones);
    };
  
    const handleItemClick = (index, event) => {
      event.preventDefault();
      setActiveIndex(index);
    };
  
    const navigationItems = [
      { label: 'Dashboard', icon: <FaHome /> },
      { label: 'Asesoras', icon: <FaUserTie /> },
      { label: 'Administradoras', icon: <FaBuilding /> },
      { label: 'Clientes', icon: <FaUsers /> },
      { label: 'Bancos', icon: <FaUniversity /> },
      { label: 'Salir', icon: <FaSignOutAlt /> },
    ];

  return (
    <div className='Navbar__completo'>
        <div className='Navbar__completo__izquierdo'>
            <div className={`Icon-hamburger`} onClick={handleClickNav}>
                <FaBars size={20} style={{ color: 'rgb(126, 58, 242)', position: 'absolute', right: 40 }} />
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
                    <div className="Icons-nombre">
                        <li onClick={handleImagenClick}>
                            <a href='' className='nombre_imagen'>
                            <img src={imagen} alt="Nombre de la persona" className='imagen-person' />
                            </a>
                        </li>
                        <ul className={`${mostrarOpciones ? 'Icons-nombre-aparecer' : 'Icons-nombre-ul'}`}>
                            <li><a href=""><FaUser className='Icons-nombre-svg' /><span className='opcion-texto'>Profile</span></a></li>
                            <li><a href=""><FaCog className='Icons-nombre-svg'/>  <span className='opcion-texto'>Settings</span></a></li>
                            <li><a href=""><FaSignOutAlt className='Icons-nombre-svg mover-icon' /> <span className='opcion-texto'>Log out</span></a></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
        <div className={`${nav ? 'Navbar__completo__derecho' : 'Navbar__completo__derecho__esconder'}`}>
            <div className="logo">
                <h1>Empresa</h1>
            </div>
            <div className="navbar__dashboard">
                <ul className="navigation-bar">
                {navigationItems.map((item, index) => (
                    <li
                    key={index}
                    onClick={(event) => handleItemClick(index, event)}
                    >
                    <a href="#" className={index === activeIndex ? 'active' : ''}>
                        <span className="icon">{item.icon}</span>
                        <span className="text">{item.label}</span>
                        {index === activeIndex && (
                        <span className="barra-vertical" aria-hidden="true"></span>
                        )}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar