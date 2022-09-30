import './Footer.css';
import facebook_icon from './assets/facebook-icon.svg';
import twitter_icon from './assets/twitter-icon.svg';
import instagram_icon from './assets/instagram-icon.svg';
import secure_payment_icon from './assets/secure-payment-icon.png';

function Footer() {
    return (
        <>
            <div className="footer">
                <div id="footer-logo" className="footer-container">
                    <h2 id="footer-logo-title">Pufi</h2>
                </div>
                <div id="footer-products" className="footer-container">
                    <h5 className="footer-list-product-links">PUFI RAIN</h5>
                    <h5 className="footer-list-product-links">PUFI PUFF</h5>
                    <h5 className="footer-list-product-links">PUFI CART</h5>
                    <h5 className="footer-list-product-links">PUFI NAP</h5>
                </div>
                <div id="footer-contact" className="footer-container">
                    <h5 className="footer-list-product-links">CONTACTO</h5>
                    <h5 className="footer-list-product-links">AYUDA</h5>
                    <h5 className="footer-list-product-links">COMO COMPRAR</h5>
                    <h5 className="footer-list-product-links">TÉRMINOS Y CONDICIONES</h5>
                </div>
                <div id="footer-secure-buy" className="footer-container">
                    <h5 className="footer-list-product-links">COMPRA 100% SEGURA</h5>
                    <div id="secure">
                        <img className="icon-2x" src={secure_payment_icon} alt="facebook" />
                        <span>COMPRA CON LA GARANTIA DE PUFI</span>
                    </div>
                </div>
                <div className="footer-container">
                    <h5 className="footer-list-product-links">SIGUENOS EN</h5>
                    <img className="icon" src={facebook_icon} alt="facebook" />
                    <img className="icon" src={twitter_icon} alt="facebook" />
                    <img className="icon" src={instagram_icon} alt="facebook" />
                </div>
                
            </div>
            <div className="footer-copyright">
                <p>
                    PUFI Copyright 2022 - Todos los derechos reservados
                </p>
            </div>
        </>
    );
}

export default Footer;