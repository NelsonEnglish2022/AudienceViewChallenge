import React from 'react';
import { Grid } from '@material-ui/core';

import ProductsListGrid from "./views/productGrid/Product-gridList";
import ProductBasket from "./views/productBasket/Product-basket";


import './app.css';

const App: React.FC = () => {
  return (
    <Grid   container   direction="row"   >
          <Grid item  xs={10}  style={{ paddingRight: '2px', }} >
            <ProductsListGrid productsList={[]} loading={true}/>
          </Grid>
        <Grid  item  xs={2}  style={{ paddingLeft: '3px', borderStyle: 'solid', borderColor: 'rgba(0, 0, 0, 0.12)',  borderWidth: '0 0 0 1px'}}>
          <ProductBasket productItemBasket={[]}></ProductBasket>
        </Grid>
  </Grid>
  );
}

export default App;
