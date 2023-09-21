import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import { pluralize } from "../utils/helpers"

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  const [itemQuantity, setItemQuantity] = useState(1);

  const [totalPrice, setTotalPrice] = useState(1)

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
     setTotalPrice(currentProduct.price)
      
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  // const removeFromCart = () => {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     _id: currentProduct._id,
  //   });

  //   idbPromise('cart', 'delete', { ...currentProduct });
  // };




  return (
    <>
      {currentProduct && cart ? (
        <div className=' container product-page'>
        <Link to="/shop">← Back to Products</Link>
        <div className="container my-1 product-page product-detail">
        
          <div className='detail-left'>
            <img
              src={`/images/furniture/${currentProduct.image}`}
              alt={currentProduct.name}
            />
          </div>

          <div className='detail-right'>
            <div className='detail-title'>
            <h2>{currentProduct.name}</h2>
            </div>
            
          <div className='detail-description'>
            <p>{currentProduct.description}</p>

            <p><strong>Price: </strong>${currentProduct.price}{' '}</p>
            <p> { currentProduct.quantity > 0 ? (<span>In Stock </span>) : <span>Out Of Stock</span>}<span>{currentProduct.quantity} {pluralize("item", currentProduct.quantity)}</span> left</p>

         
            <div className='detail-cart-buttons'>
            <button onClick={addToCart}>Add to Cart</button>
            {/* <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button> */}
            </div>
            </div>
          </div>
        </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
