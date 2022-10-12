import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import ProductsListGrid from "./views/productGrid/Product-gridList";
import ProductBasket from "./views/productBasket/Product-basket";

import './app.css';
import { ProductGridItem } from './views/productGrid/product-grid.interface';
import { ManagerBasketValueType } from './managerBasketType';


const getDataFromServer = async () => {
  const url = await fetch('https://us-central1-techtaskapi.cloudfunctions.net/offers');
  const data = await url.json();
  return data;
}

const App: React.FC = () => {

  const [productArry, setProductArry] = React.useState([]);

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


  const handleBasketAction = (ProductGridItemId: string, basketAction: ManagerBasketValueType) => {
    alert(ProductGridItemId);
    if(basketAction === ManagerBasketValueType.ADD ) {

    } else   if(basketAction === ManagerBasketValueType.DELETE ){
      // setProductArry(arry.filter(item => item.id !== ProductGridItemId));
    }
  };

  return (
    <Grid   container   direction="row"   >
          <Grid item  xs={10}  style={{ paddingRight: '2px', }} >
            <ProductsListGrid productsList={productsList} loading={loading} ManagerBasket={handleBasketAction} />
          </Grid>
        <Grid  item  xs={2}  style={{ paddingLeft: '3px', borderStyle: 'solid', borderColor: 'rgba(0, 0, 0, 0.12)',  borderWidth: '0 0 0 1px'}}>
            <Typography variant="h6" component="h4" >
                  Offers Basket        
              </Typography>
          <ProductBasket productItemBasket={[]}></ProductBasket>
        </Grid>
  </Grid>
  );
}

export default App;

