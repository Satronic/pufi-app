import './Card.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { getProducts } from '../../Redux/Actions/index.js';


function Card({image, title, price}) {
    // const allProducts = useSelector(state => state.allProducts);
    // const dispatch = useDispatch();
    
    // console.log(allProducts);

    // useEffect(() =>{
    //     dispatch(getProducts())
    // })
    
    return (
        <div className="card">
            <img className="card-image" src={image} alt="" />
            <p className="card-title">
                {title}
            </p>
            <p className="card-price">
                {price}
            </p>
        </div>
    );
}

export default Card;