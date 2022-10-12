import './Allproducts.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Card from '../Card/Card.js';
import Allcategories from '../Allcategories/Allcategories.js';


function Allproducts() {
    const allProducts = useSelector(state => state.allProducts);
    const dispatch = useDispatch();

    // const allCategories = allProducts.map(product => {
    //     return product.category.name;
    // })

    // let filterCategories = allCategories.filter((item,index)=>{
    //   return allCategories.indexOf(item) === index;
    // });

    const filterCategories = ['Furniture', 'Others', 'Electronics', 'Clothes', 'Shoes'];

    
    
    return (
        <section className="allproducts">
            <div className="container-left">
                <Allcategories categories={filterCategories}/>
            </div>
            <div className="container-right">
                {allProducts.map(product => {
                    return (<Card 
                        id={product.id}
                        key={product.id}
                        image={product.images[0]} 
                        title={product.title}
                        category={product.category.name}
                        price={product.price}
                    />)
                })}
            </div>
        </section>
    );
}

export default Allproducts;