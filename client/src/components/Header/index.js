import React, { useEffect } from 'react';
import LogoFull from './logofull.png'
import { Link } from "react-router-dom";

function Header() {


    return (
        
      <div className='header-container'>
        <img src={LogoFull}/>
     
      </div>
        
    )
}

export default Header