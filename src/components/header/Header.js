import './Header.css';
import Navbar from '../Navbar/Navbar.js'

function Header() {
    return (
    <header className="header">
        <Navbar />
        <h1 className="header-title">ESTAR CÓMODO, NUNCA FUE TAN FÁCIL</h1>
    </header>
);
}

export default Header;