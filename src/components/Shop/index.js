import React, { useState } from 'react';
import {
  ShopHeader,
  ViewCartBtn,
  ViewProductBtn,
} from './ShopElements'
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Shop() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="Shop">
      <ShopHeader>
      <ViewProductBtn onClick={() => navigateTo(PAGE_PRODUCTS)}>
          Products page
        </ViewProductBtn>

        <ViewCartBtn onClick={() => navigateTo(PAGE_CART)}>
          View cart ({getCartTotal()})
        </ViewCartBtn>       
      </ShopHeader>

      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}


export default Shop;
