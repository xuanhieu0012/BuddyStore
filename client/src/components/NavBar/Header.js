import React from 'react';
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import {VscAccount} from "react-icons/vsc"
import {BsSearch} from "react-icons/bs"
import {RiShoppingBag3Line} from "react-icons/ri"
import './Style.css'
function Header(){

    return <div className="header-container">
        <div className="header-content">
            <div>
                <Link to='/'><img id="buddy-store-logo" src={logo} alt="buddy-logo"/></Link>
            </div>
            <div className="header-link-content">
                <Link to='/bestSeller'>Best Seller</Link>
                <Link to='/collection'>Collection</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/sales'>Sales</Link>
                <Link to='/story'>Story</Link>
                <Link to='/contactUs'>Contact Us</Link>
            </div>
            <div className='user-header-content'>
                <Link to='/account'><VscAccount size='30px'/></Link>
                <BsSearch size='30px' color=' #c4c4c4'/>
                <Link to='/cart'><RiShoppingBag3Line size='30px'/></Link>
            </div>
        </div>
    </div>
}

export default Header;