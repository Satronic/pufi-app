import './Product.css';
import pufi_rain from './assets/pufi-rain.jpg';
import pufi_rain_primary from './assets/pufi-rain-primary.jpg';
import pufi_puff from './assets/pufi-puff.jpg';
import pufi_puff_primary from './assets/pufi-puff-primary.jpg';
import { useNavigate } from 'react-router-dom';


function Product() {
    const navigateTo = useNavigate();
    function goToProducts(){
        navigateTo('/products');
    }
    return (
        <>
            <div className="product">
                <div className="product-container-left">
                    <img className="product-image-primary" src={pufi_rain_primary} alt="pufi-rain"></img>
                </div>
                <div className="product-container-right">
                    <img className="product-image-secundary" src={pufi_rain} alt="pufi-rain"></img>
                    <h2 className="product-title">Pufi RAIN</h2>
                    <hr />
                    <p className="product-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora atque ducimus vitae iste assumenda quis esse blanditiis amet nisi distinctio deserunt quas fuga cumque, vero aperiam. Velit ipsum tempore hic?
                    </p>
                    <button className="product-button" onClick={goToProducts}>VER MAS</button>
                </div>
            </div>
            <div className="product">
                <div className="product-container-right">
                    <img className="product-image-secundary" src={pufi_puff} alt="pufi-rain"></img>
                    <h2 className="product-title">Pufi PUFF</h2>
                    <hr />
                    <p className="product-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora atque ducimus vitae iste assumenda quis esse blanditiis amet nisi distinctio deserunt quas fuga cumque, vero aperiam. Velit ipsum tempore hic?
                    </p>
                    <button className="product-button" onClick={goToProducts}>VER MAS</button>
                </div>
                <div className="product-container-left">
                    <img className="product-image-primary" src={pufi_puff_primary} alt="pufi-rain"></img>
                </div>
            </div>
        </>
        
    );
}

export default Product;