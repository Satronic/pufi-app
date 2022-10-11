import './Allproducts.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getProducts } from '../../Redux/Actions/index.js';


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

            </div>
        </section>
    );
}

export default Allproducts;