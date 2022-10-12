
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

function createPages(arrayLength, pageSize) {
    let length = arrayLength;
    let numberPages = 0;
    let pages = {}

    if (length % pageSize === 0) {
        numberPages = length / pageSize;
        for (let i = 1; i <= numberPages; i++) {
            let max = (pageSize * i);
            let min = max - pageSize;

            pages[i] = [min, max]
        }
        return pages;
    }
    if (length % pageSize !== 0) {
        numberPages = Math.floor(length / pageSize);
        for (let i = 1; i <= numberPages; i++) {
            let max = (pageSize * i);
            let min = max - pageSize;

            pages[i] = [min, max]
        }
        pages[numberPages + 1] = [numberPages * pageSize, length]
        return pages;
    }
}

export {
    filterProductsByCategory,
    createPages
};
    


