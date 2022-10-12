
function filterProductsByCategory(products, categories){
    console.log('categories in utils', categories);
    console.log('Products in utils', products);

    if (categories.length === 0) return products;
    let filteredProducts = products.filter(product => {
        const categoryFound = categories.find(category => category === product.category.name);
        return product.category.name === categoryFound; 
    })

    console.log('FilteredProducts in utils', filteredProducts);
    return filteredProducts;
}

export default filterProductsByCategory;
    


