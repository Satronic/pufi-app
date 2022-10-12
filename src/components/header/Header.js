import './Header.css';
import Navbar from '../Navbar/Navbar.js';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
    <header className={location.pathname === '/' ? 'header' : 'header-min'}>
        <Navbar />
        <h1 className={location.pathname === '/' ? 'header-title' : 'header-title-min'}>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL</h1>
    </header>
);
}

export default Header;