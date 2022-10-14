import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactLoading from 'react-loading';
import {  ImageList, ImageListItem } from '@material-ui/core';

import { ProductGridItem } from './product-grid.interface';
import ProductItem from './Product-item';
import { ManagerBasketValueType } from '../../managerBasketType';
import { ProductBasketInterface } from '../productBasket/product-basket.interface';

interface ProductsListGridState {
  productsList: ProductGridItem[],
  productBasket: ProductBasketInterface[],
  loading: Boolean | undefined,
   ManagerBasket: (ProductGridItem: ProductGridItem, basketAction: ManagerBasketValueType) => void
}


const ProductsListGrid: React.FC<ProductsListGridState> = (ProductItemProps) =>  {

  const getTotal = () => ProductItemProps.productBasket.reduce((acum, current) => (acum + current.price * current.quantity)  ,0);
  const getQuantity = () => ProductItemProps.productBasket.reduce((acum, current) => (acum + current.quantity)  ,0);


const getContent = () =>  {
  let content: any[] = [];
  if(!ProductItemProps.loading) {
    for (const productItem of ProductItemProps.productsList) {
      content.push(<ImageListItem key={productItem.id} className="product-item" cols={1}><ProductItem productItem={productItem} ManagerBasket={ProductItemProps.ManagerBasket} /></ImageListItem>);
    }
    return content;
  } else {
      return <div  style={{ color:'#0000FF'}}> Loading    <ReactLoading type='spin' color='#0000FF' /></div>;
  }
    
}

return (
      <Container>
        
        <Box my={12}>
          <Typography variant="h2" component="h2" align='center'   style={{ paddingTop: '5%', paddingBottom:'5%',}} >
            Audience View E-Commerce        
          </Typography>
        </Box>
        <Box my={12}>
            <Typography variant="h4" component="h1" >
                  Offers List        
              </Typography>
        </Box>
        <Box my={12}>
          <div
            style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', overflow: 'hidden',}}
          >
              <ImageList
                rowHeight={160}
                cols={4} >
                {getContent()}
              </ImageList>
            </div>
        </Box>
        <Box my={12}>
          <Typography variant="h4" component="h1" style={{ paddingTop: '2%', paddingBottom:'5%',}} >
            {`Number of items in the Basket : ${getQuantity()} / Total Basket amount:  ${getTotal().toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })} `}
          </Typography>
        </Box>
      </Container>
  );
}

export default  ProductsListGrid;
