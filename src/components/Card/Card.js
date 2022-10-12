import './Card.css';


function Card({image, title, price, category}) {
    
    return (
        <div className="card">
            <img className="card-image" src={image} alt="" />
            <p className="card-title">
                {title}
            </p>
            <p className="card-price">
                {category}
            </p>
            <p className="card-price">
                {`$${price}`}
            </p>
        </div>
    );
}

export default Card;