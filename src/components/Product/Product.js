import './Product.css';
import pufi_rain from './assets/pufi-rain.jpg';



function Product() {
    return (
        <div className="product">
            <div className="product-container-left">
                <img className="product-image-primary" src={pufi_rain} alt="pufi-rain"></img>
            </div>
            <div className="product-container-right">
                <img className="product-image-secundary" src={pufi_rain} alt="pufi-rain"></img>
                <h2 className="product-title">Pufi RAIN</h2>
                <hr />
                <p className="product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora atque ducimus vitae iste assumenda quis esse blanditiis amet nisi distinctio deserunt quas fuga cumque, vero aperiam. Velit ipsum tempore hic?
                </p>
                <button className="product-button">VER MAS</button>
            </div>
        </div>
    );
}

export default Product;