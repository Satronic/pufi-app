import './Allproducts.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getProducts } from '../../Redux/Actions/index.js';
import Card from '../Card/Card.js';


function Allproducts() {
    const allProducts = useSelector(state => state.allProducts);
    const dispatch = useDispatch();
    
    console.log(allProducts);

    useEffect(() =>{
        dispatch(getProducts())
    })
    
    return (
        <section className="allproducts">
            <div className="container-left">

            </div>
            <div className="container-right">
                {allProducts.slice(1,16).map(product => {
                    return (<Card 
                        id={product.id}
                        key={product.id}
                        image={product.images[0]} 
                        title={product.title}
                        price={product.price}
                    />)
                })}
            </div>
        </section>
    );
}

export default Allproducts;