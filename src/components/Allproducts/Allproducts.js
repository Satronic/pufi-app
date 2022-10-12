import './Allproducts.css';
import { useSelector } from 'react-redux';
import Card from '../Card/Card.js';
import Allcategories from '../Allcategories/Allcategories.js';
import Pager from '../Pager/Pager.js';


function Allproducts() {
    const allProducts = useSelector(state => state.allProducts);
    const pages = useSelector(state => state.pages);
    const productsByPage = allProducts.slice(pages[0], pages[1]);

    const filterCategories = ['Furniture', 'Others', 'Electronics', 'Clothes', 'Shoes'];

    
    
    return (
        <section className="allproducts">
            <div className="container-left">
                <Allcategories categories={filterCategories}/>
            </div>
            <div className="container-right">
                <Pager products={allProducts}/>
                {productsByPage.map(product => {
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