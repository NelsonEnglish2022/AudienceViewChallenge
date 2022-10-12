import React, { Component } from 'react';
import { ProductGridItem } from './product-grid.interface';
import { Grid, Typography, GridListTile } from '@material-ui/core';


interface ProductItemProps {
  productItem: ProductGridItem,
}



const ProductItem: React.FC<ProductItemProps> = ( ProductItemProps) =>   {

  const addToCart = (o) => {

    // if(cart.findIndex( item => item.id === o.id) >= 0) {
    //   IncrementDecrementQuantity(o,true);
    // } else {
    //   setCart([...cart, {
    //     id: o.id,
    //     name: o.name,
    //     price: o.price,
    //     quantity: 1
    //   }]);
    // }
  }

 
    return (
        <Grid  >
          <Grid  container>
            <Grid item xs={10}>
              <Typography variant="h5" component="h1" gutterBottom>
                {ProductItemProps.productItem.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <img src={ProductItemProps.productItem.image} width={200} height={158} />
          </Grid>
          <Grid item xs={12} style={{ backgroundColor: "#DDDDDD",  }}>
            Price:  {ProductItemProps.productItem.price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })} 
          </Grid>
          <Grid item xs={12}  >
                <button style={{ backgroundColor: 'rgb(151, 215, 0)',  }} onClick={() => addToCart(ProductItemProps.productItem.id)}>
                  Add to cart
                </button>
                  <button style={{ backgroundColor: 'rgb(151, 215, 0)',  }} onClick={() => addToCart(ProductItemProps.productItem.id)}>
                    Remove from cart
                  </button>
          </Grid>
        </Grid>
    );
}


export default ProductItem;