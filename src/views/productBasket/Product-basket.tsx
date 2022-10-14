import React, {  useEffect, useState } from 'react';
import { ProductBasketInterface } from '../productBasket/product-basket.interface';

import './styles.css'
interface ProductBasketProps {
    productBasket: ProductBasketInterface[],
}
   
const ProductBasket: React.FC<ProductBasketProps> = (ProductBasketProps) =>  {

  return (
    <div className="movies__cart">
         <ul>
          {ProductBasketProps.productBasket.map(x => (
            <li key={x.id} className="movies__cart-card">
              <ul>
                <li key={x.id}>
                  Title: {x.title}
                </li>
                <li key={x.id}>
                  Price: {x.price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}
                </li>
              </ul>
            </li>
          ))}
        </ul> 
    </div>
    );
  }
  
  export default  ProductBasket;