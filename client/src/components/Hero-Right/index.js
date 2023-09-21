import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import HomeOffice from './home-office.jpg'
import { Link } from "react-router-dom";

function HeroBannerRight() {


    return (
        
        <div className='hero-container'>
            <div className='hero-container-text'>
                <div className='hero-text-area'>
                <h3 className='hero-title'>Build your ultimate home office</h3>
                <p className='hero-call2action'>We have everything you need to add style and comfort to your workspace to maximize productivity</p>
                <button className='hero-button'>
                <Link to='/shop'>
                    Shop Now
                    </Link>
                    </button>
                </div>
            </div>

            <div className='hero-container-img'>
            <img className='hero-image' src={HomeOffice}></img>
            </div>
        </div>
        
    )
}

export default HeroBannerRight