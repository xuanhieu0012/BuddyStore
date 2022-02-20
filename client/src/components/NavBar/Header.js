import React,{useState} from 'react';
import logo from "../../assets/logo.png"
import {Link, useLocation} from "react-router-dom";
import {VscAccount} from "react-icons/vsc"
import {BsSearch} from "react-icons/bs"
import {RiShoppingBag3Line} from "react-icons/ri"
import {GiHamburgerMenu} from 'react-icons/gi'
import './Style.css'
function Header(){
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    console.log(splitLocation)
    function isResponsive() {
        let x = document.getElementById("link-container");
        if (x.className === "header-link-content") {
          x.className += " responsive";
        } else {
          x.className = "header-link-content";
        }
      }
    return <div className="header-container">
                <div className="header-content">
                    <div className="buddy-store-logo">
                        <Link to='/'><img  src={logo} alt="buddy-logo"/></Link>
                        
                    </div>
                    <div>
                        <GiHamburgerMenu className='icon' onClick={() =>isResponsive()} />
                    </div>
                </div>
                    <div className="header-link-content" id='link-container'>
                        <div className="nav-link-container">
                            <Link to='/bestSeller' className={splitLocation[1] === 'bestSeller' ? 'active' : ''}>Best Seller</Link>
                            <Link to='/collection' className={splitLocation[1] === 'collection' ? 'active' : ''}>Collection</Link>
                            <Link to='/shop'className={splitLocation[1] === 'shop' ? 'active' : ''}>Shop</Link>
                            <Link to='/sales' className={splitLocation[1] === 'sales' ? 'active' : ''}>Sales</Link>
                            <Link to='/story' className={splitLocation[1] === 'story' ? 'active' : ''}>Story</Link>
                            <Link to='/contactUs' className={splitLocation[1] === 'contactUs' ? 'active' : ''}>Contact Us</Link>
                        </div>
                        <div className='user-header-content'>
                            <Link to='/account'><VscAccount size='30px'/></Link>
                            <Link><BsSearch size='30px' color=' #c4c4c4'/></Link>
                            <Link to='/cart'><RiShoppingBag3Line size='30px'/></Link>
                        </div>
                        
                    </div>
                    
                
            </div>
}

export default Header;