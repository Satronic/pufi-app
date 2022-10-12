import './Allcategories.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { filterProducts } from '../../Redux/Actions/index.js';


function Allcategories({categories}) {

    const [ selectedCategories, setSelectedCategories ] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterProducts(selectedCategories));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategories])

    function selectCategory(event){
        
        const selectedCategory = event.target.name;
        
        const categoryFound = selectedCategories.find(category => {
            return category === selectedCategory;
        });

        if(!categoryFound){
            setSelectedCategories([...selectedCategories, selectedCategory])
        }

        if(categoryFound){
            const filterCategories = selectedCategories.filter(category => category !== categoryFound);
            setSelectedCategories(filterCategories)
        }      
    }
    
    return (
        <div className="categories">
            <p className="categories-title"><strong>Filtrar por categoria</strong></p>
            {categories.map((category, index) => {
                return (
                    <div className="category-item" key={index}>
                        <input id={index} type="checkbox" name={category} onChange={selectCategory}/>
                        <label htmlFor={index}>{category}</label>
                    </div>
                )
            })}
        </div>
    );
}

export default Allcategories;