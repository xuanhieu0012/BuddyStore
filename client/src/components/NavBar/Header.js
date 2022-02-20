import React,{useState} from 'react';
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import {VscAccount} from "react-icons/vsc"
import {BsSearch} from "react-icons/bs"
import {RiShoppingBag3Line} from "react-icons/ri"
import {GiHamburgerMenu} from 'react-icons/gi'
import './Style.css'
function Header(){
   
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
                            <Link to='/bestSeller'>Best Seller</Link>
                            <Link to='/collection'>Collection</Link>
                            <Link to='/shop'>Shop</Link>
                            <Link to='/sales'>Sales</Link>
                            <Link to='/story'>Story</Link>
                            <Link to='/contactUs'>Contact Us</Link>
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