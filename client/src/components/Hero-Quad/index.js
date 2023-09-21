import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import Kitchen from './kitchen.jpg'
import Bathroom from './bathroom.jpg'
import Bedroom from './bedroom.jpg'
import Lighting from './lighting.jpg'

import { Link } from "react-router-dom";

function HeroQuad() {


    return (
        <div className='container-div'>
            <div className='hero-quad'>

                <div className='hero-quad-big'>
                    <Link to='/shop'>
                        <img className='quad-hover' src={Kitchen}></img>
                        <h3 className='hero-quad-title'>Kitchen</h3>
                    </Link>
                </div>
                
                <div className='hero-quad-medium hero-quad-mobile'>
                    <Link to='/shop'>
                        <img className='quad-hover' src={Bathroom}></img>
                        <h3 className='hero-quad-title'>Bathroom</h3>
                    </Link>
                </div>
                <div className='hero-quad-small hero-quad-mobile'>
                    <div className='hero-small-div hero-small'>
                        <Link to='/shop'>
                            <img className='quad-hover' src={Bedroom}></img>
                            <h3 className='hero-quad-title'>Bedroom</h3>
                        </Link>
                    </div>
                    <div className='hero-small-div2 hero-small'>
                        <Link to='/shop'>
                            <img className='quad-hover' src={Lighting}></img>
                            <h3 className='hero-quad-title'>Lighting</h3>
                        </Link>
                    </div>
                </div>




            </div>


        </div>

    )
}

export default HeroQuad