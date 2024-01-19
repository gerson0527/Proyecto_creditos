import  { useState } from 'react';
import imagen from "../../assets/imagen.jpg";
import { FaBars, FaSearch , FaMoon, FaSun,FaBell, FaUser, FaCog, FaSignOutAlt  } from 'react-icons/fa';
import './Navbar.css';
 
const Navbar = () => {
        const [isSun, setIsSun] = useState(true);
        const handleClick = () => {
          setIsSun(!isSun);
        };
        const [mostrarOpciones, setMostrarOpciones] = useState(false);

        const handleImagenClick = (e) => {
          e.preventDefault();  // Evita la recarga de la página por defecto
          setMostrarOpciones(!mostrarOpciones);
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
                <div className="Icons-nombre">
                    <li onClick={handleImagenClick}>
                        <a href=''>
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
  )
}

export default Navbar