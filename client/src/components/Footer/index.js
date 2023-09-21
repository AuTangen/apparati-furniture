import React, { useEffect } from 'react';

import { Link } from "react-router-dom";

import {FaPhoneAlt} from 'react-icons/fa'

function Footer() {


    return (
        
      <div className='footer-container'>
        <div className='footer-nav-container'>
          <ul className='footer-links'>
            <Link to="/">
            <li>About</li>
            </Link>
            <Link to="/">
            <li>Store Locator</li>
            </Link>
            <Link to="/">
            <li>FAQ</li>
            </Link>
            <Link to="/">
            <li>News</li>
            </Link>
            <Link to="/">
            <li>Careers</li>
            </Link>
            <Link to="/">
            <li>Contact</li>
            </Link>

          </ul>
        </div>
      <div className='footer-bottom'>
        <p>Copyright Apparati Furniture &copy;</p>
        <p> {<FaPhoneAlt/>} (555)-555-5555</p>
      </div>
      </div>
        
    )
}

export default Footer