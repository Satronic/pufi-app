import './Navbar.css';
// import logo from '../../assets/logo.svg';
import logo_rain from '../../assets/logo-rain.svg';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
    <nav className="navbar">
        <div className="navbar-container-logo">
            {/* <img src={logo} alt="logo"></img> */}
            <h1 className="navbar-logo">Pufi</h1>
        </div>
        <div className="navbar-container-menu">
            
            <NavLink className="navbar-link">
                <img className="logo-rain" src={logo_rain} alt="logo-rain" />
                PUFI PUFF
            </NavLink>
        
        
            <NavLink className="navbar-link">
                <img className="logo-rain" src={logo_rain} alt="logo-rain" />
                PUFI RAIN
            </NavLink>
    
        
            <NavLink className="navbar-link">
                <img className="logo-rain" src={logo_rain} alt="logo-rain" />
                PUFI CART
            </NavLink>
    
        
            <NavLink className="navbar-link">
                <img className="logo-rain" src={logo_rain} alt="logo-rain" />
                PUFI NAP
            </NavLink>

        </div>
        <div className="navbar-container-acount">
            <NavLink className="navbar-link">
                MI CUENTA
            </NavLink>
            <NavLink className="navbar-link">
                MI COMPRA
            </NavLink>
        </div>
    </nav>
);
}

export default Navbar;