import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import ProductsListGrid from "./views/productGrid/Product-gridList";

import './app.css';
import { ProductGridItem } from './views/productGrid/product-grid.interface';
import  {ProductBasketInterface} from './views/productBasket/product-basket.interface';

import { ManagerBasketValueType } from './managerBasketType';
import ProductBasket from './views/productBasket/Product-basket';


const getDataFromServer = async () => {
  const url = await fetch('https://us-central1-techtaskapi.cloudfunctions.net/offers');
  const data = await url.json();
  return data;
}

const App: React.FC = () => {

  const [productBasket, setProductBasket] = React.useState([]);

  const [productsList, setProductsList]  = React.useState([]);
  const [loading, setLoading]  = React.useState<boolean>(true);

  React.useEffect(() => {
    getDataFromServer().then(data => {
      setTimeout(() => {
        setProductsList(data.items as ProductGridItem[]);
        setLoading(false);
      }, 3000);
      

    }).catch(error => { throw Error(' error in getDataFromServer...') })
}, []);


  const handleBasketAction = (ProductGridItem: ProductGridItem, basketAction: ManagerBasketValueType) => {
    if(basketAction === ManagerBasketValueType.ADD ) {
      if(productBasket.findIndex( item => item.id === ProductGridItem.id) >= 0) {
      } else {
        setProductBasket([...productBasket, {
          id: ProductGridItem.id,
          title: ProductGridItem.title,
          price: ProductGridItem.price,
          quantity: 1
        }]);
      }

    } else   if(basketAction === ManagerBasketValueType.DELETE ){
      setProductBasket(productBasket.filter(item => item.id !== ProductGridItem.id));
    }
  };

  return (
    <Grid   container   direction="row"   >
          <Grid item  xs={10}  style={{ paddingRight: '2px', }} >
            <ProductsListGrid productsList={productsList} productBasket={productBasket} loading={loading} ManagerBasket={handleBasketAction} />
          </Grid>
        <Grid  item  xs={2}  style={{ paddingLeft: '2px', paddingRight: '20px', borderStyle: 'solid', borderColor: 'rgba(0, 0, 0, 0.12)',  borderWidth: '0 0 0 1px'}}>
            <Typography variant="h6" component="h4" >
                  Offers Basket        
              </Typography>
          <ProductBasket productBasket={productBasket}></ProductBasket>
        </Grid>
  </Grid>
  );
}

export default App;