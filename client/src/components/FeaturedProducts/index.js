
import React, { useEffect, useState } from 'react';
import FeaturedItem from '../FeaturedItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

import {FaCaretSquareLeft} from 'react-icons/fa'
import {FaCaretSquareRight} from 'react-icons/fa'






import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


function FeaturedProducts() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const [width, setWidth] = useState(window.innerWidth);

  const [visSlides, setVisSlides] = useState(5)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    if (window.innerWidth > 798) {
     
      setVisSlides(5)
    }
    if (window.innerWidth < 798 && window.innerWidth > 500) {
      setVisSlides(3)
    }
    if (window.innerWidth < 500) {
      setVisSlides(2)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
   
  }, []);


  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    return state.products.filter((product) => product.featured === true);
  }




  const featuredProducts = filterProducts();

  const renderSlides = featuredProducts.map((product) => (
    <FeaturedItem
      key={product._id}
      _id={product._id}
      image={product.image}
      name={product.name}
      price={product.price}
      quantity={product.quantity}
    />
  ));

  return (
    <>
    <h2>Top Picks for you</h2>
<CarouselProvider
className='carousel-container'
  naturalSlideWidth={100}
  naturalSlideHeight={300}
  totalSlides={featuredProducts.length}
  visibleSlides={visSlides}
>
  
  <ButtonBack className='slider-btn prev-button'>&#x2190;</ButtonBack>
  <ButtonNext className='slider-btn next-button'>&#x2192;</ButtonNext>
  
  <Slider className='slider'>
    {renderSlides.map((slide) => (
      <Slide className='carousel__inner-slide' key={slide.id}>{slide}</Slide>
    ))}
  </Slider>
  
</CarouselProvider>


  
    </>
  )
  

  
}

export default FeaturedProducts