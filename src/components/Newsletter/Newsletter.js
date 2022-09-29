import './Newsletter.css';

function Newsletter() {
    return (
        <div className="newsletter">
            <h2 className="newsletter-title">NEWSLETTER</h2>
            <h3 className="newsletter-subtitle">Suscribete</h3>
            <p>Y enterate de todas las novedades que tenemos para ti</p>
            <form className="newsletter-form">
                <input className="form-input-email" type="email" placeholder="Ingresa tu e-mail"></input>
                <button className="form-button-submit" type="submit">ENVIAR</button>
            </form>
        </div>
    );
}

export default Newsletter;