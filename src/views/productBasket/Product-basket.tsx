import React, {  useEffect, useState } from 'react';

import { ProductGridItem } from '../productGrid/product-grid.interface';

interface ProductItemProps {
    productItemBasket: ProductGridItem[],
}

   
const ProductBasket: React.FC<ProductItemProps> = (ProductItemProps) =>  {

    const [productsList, setProductsList]  = useState([]);
    const [loading, setLoading]  = useState(true);
  
  useEffect(() => {

   }, []);

   const IncrementDecrementQuantity = (o,isIncrement) => {

    // const quantityModifyedInArry = cart.map(item => {
    //   if(item.id !== o.id) return item;
    //   return  {...item, quantity: isIncrement ? item.quantity + 1  : item.quantity -1}

    // }).filter(item => item.quantity > 0 );

    // setCart(quantityModifyedInArry);
  }

//    const getTotal = () =>   {ProductItemProps.productItemBasket.reduce((acum, current) => (parseInt(acum) + (parseInt(current.price) * parseInt(current.quantity)))  ,0);
   const getTotal = () =>  ProductItemProps.productItemBasket.reduce((acum, current) => (0)  ,0);

   const checkArryEqual = (cartIds, discountArray) => {
    //  const sortedCartIds = cartIds.slice().sort();
    //  const sortedDiscountArray = discountArray.slice().sort();
    //  return (JSON.stringify(sortedCartIds) === JSON.stringify(sortedDiscountArray));
   }
   
     const searchDiscount = (cartIds, discountArray) => {
       let returnDiscount =0;
    //    for (let i = 0; i < cartIds.length; i++) {
    //      for (let j = 0; j < discountArray.length; j++) {
    //        if (checkArryEqual(cartIds, discountArray[j].m)) {
    //          returnDiscount = discountArray[j].discount;
    //          break;
    //        }
    //      }
    //    }
       return returnDiscount;
     };
 
     const getDiscount = () => {
    //    const cartIds = cart.map((item) => item.id);
    //    const discount = searchDiscount(cartIds, discountRules);
    //    const formatedDiscount = parseFloat(Math.round(discount * 100) / 100).toFixed(2);
    //    return formatedDiscount;
     }
    
     const getGranTotal = () => {
    //    const discount = ((getDiscount() * getTotal())/100);
    //    const granTotal =  getTotal() - discount;
    //    const formatedGranTotal = parseFloat(Math.round(granTotal * 100) / 100).toFixed(2);
    //    return formatedGranTotal;
     }
  
  
  return (
    <div className="movies__cart">

         <ul>
          {ProductItemProps.productItemBasket.map(x => (
            <li className="movies__cart-card">
              <ul>
                <li>
                  ID: {x.id}
                </li>
                <li>
                  Name: {x.title}
                </li>
                <li>
                  Price: ${x.price}
                </li>
              </ul>
              <div className="movies__cart-card-quantity">
                <button onClick={() => IncrementDecrementQuantity(x, false)}>
                  -
                </button>
                <span>
                  {/* {x.quantity} */}
                </span>
                <button onClick={() => IncrementDecrementQuantity(x, true)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul> 
        {/* <div className="movies__cart-total">
          <p>Total: ${getTotal()}</p>
        </div>
        <div className="movies__cart-total">
          <p>Discount: ${getDiscount()}</p>
        </div>
        <div className="movies__cart-total">
          <p>Gran Total: ${getGranTotal()}</p>
        </div> */}
    </div>
    );
  }
  
  export default  ProductBasket;