import { Grid } from '@material-ui/core'
import React from 'react'
import { ProductListing } from './product-listing'
import { useState } from 'react';
import CategoryFilter from '../filters/CategoryFilters';
import { getVisibleProducts } from '../../api/products-api';
import CartRow from '../cart/cart-row';
import ReviewListing from '../detail/review-listing';


export default function Collection() {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const products = getVisibleProducts(selectedCategory);

    // const onChangeCategoryHandler = (category, isChecked) => {
    //     if(isChecked){
    //         setSelectedCategory([...selectedCategory], category);
    //     }    
    //     else{
    //         setSelectedCategory(selectedCategory.filter(cat => cat !== category))
    //     }
    // }

    return (
        <>
            <Grid container>
                <Grid item lg={2}>
                    <CategoryFilter 
                    selectedItems={selectedCategory} 
                    // onChangeCategory={onChangeCategoryHandler}
                />
                </Grid>
                <Grid item lg={10}>
                    <ProductListing 
                        products={products}
                    />


                    <h1>Cart Items</h1>
                    <hr />
                    <CartRow/>

                    <h1>Reviews</h1>
                    <hr />
                    <ReviewListing/>
                </Grid>
            </Grid>

        </>
    )
}
