import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import LivingRoom from './living-room.jpg'
import { Link } from "react-router-dom";

function HeroBannerLeft() {


    return (

        <div className='hero-container'>
            <div className='hero-container-img'>
                <img className='hero-image' src={LivingRoom}></img>
            </div>

            <div className='hero-container-text'>
                <div className='hero-text-area'>
                    <h3 className='hero-title'>Lounge in style</h3>
                    <p className='hero-call2action'>Entertain guests or enjoy a night in with the family. We can help you level up your living room</p>
                    <Link to='/shop'>
                        <button className='hero-button'>

                            Shop Now

                        </button>
                    </Link>
                </div>
            </div>


        </div>

    )
}

export default HeroBannerLeft