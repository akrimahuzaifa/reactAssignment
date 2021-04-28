import {products} from '../data/products';

export const getVisibleProducts = (selectedCategory) => {
    // console.log(selectedCategory);
    // console.log(products);
    if (!selectedCategory.length)
        return products;

    return ( products.filter(
        product => selectedCategory.includes(product.category)
        )
    )
}