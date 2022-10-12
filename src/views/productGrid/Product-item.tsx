import React from 'react';
import { ProductGridItem } from './product-grid.interface';
import { Grid, Typography } from '@material-ui/core';
import { ManagerBasketValueType } from '../../managerBasketType';

interface ProductItemProps {
  productItem: ProductGridItem,
  ManagerBasket: (ProductGridItemId: string, basketAction: ManagerBasketValueType) => void;

}

const ProductItem: React.FC<ProductItemProps> = ( ProductItemProps) =>   {

 
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
                <button style={{ backgroundColor: 'rgb(151, 215, 0)',  }} onClick={() => ProductItemProps.ManagerBasket(ProductItemProps.productItem.id, ManagerBasketValueType.ADD)}>
                  Add to cart
                </button>
                  <button style={{ backgroundColor: 'rgb(151, 215, 0)',  }} onClick={() => ProductItemProps.ManagerBasket(ProductItemProps.productItem.id, ManagerBasketValueType.DELETE)}>
                    Remove from cart
                  </button>
          </Grid>
        </Grid>
    );
}


export default ProductItem;