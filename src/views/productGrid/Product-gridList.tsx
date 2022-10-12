import React, { Component, useEffect, useState } from 'react';
import MaterialTable from "material-table";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactLoading from 'react-loading';
import { Grid, ImageList, ImageListItem } from '@material-ui/core';

import { ProductGridItem } from './product-grid.interface';
import ProductItem from './Product-item';

interface ProductsListGridState {
productsList: ProductGridItem[],
loading: Boolean
}


const getDataFromServer = async () => {
  const url = await fetch('https://us-central1-techtaskapi.cloudfunctions.net/offers');
  const data = await url.json();
  return data;
}


const ProductsListGrid: React.FC<ProductsListGridState> = () =>  {

  const [productsList, setProductsList]  = useState([]);
  const [loading, setLoading]  = useState(true);

useEffect(() => {
  getDataFromServer().then(data => {
    setTimeout(() => {
      setProductsList(data.items as ProductGridItem[]);
      setLoading(false);
    }, 3000);
    

  }).catch(error => { throw Error(' error in getDataFromServer...') })
}, []);

const getContent = () =>  {
  let content: any[] = [];
  if(!loading) {
    for (const productItem of productsList) {
      content.push(<ImageListItem key={productItem.id} className="product-item" cols={1}><ProductItem productItem={productItem} /></ImageListItem>);
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
            Number of items in the Basket :  Total Basket amount:        
          </Typography>
        </Box>
      </Container>
  );
}

export default  ProductsListGrid;
