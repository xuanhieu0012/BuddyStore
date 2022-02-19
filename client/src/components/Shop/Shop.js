import React,{useEffect, useState} from 'react';
import ProductDisplay from './ProductDisplay';
import Header from "../NavBar/Header"
import shopimage from '../../assets/shopimage.png'
import line from '../../assets/line.png'
function Shop({shopData}){
    

    
    const healthCareProduct = shopData.slice(0,8).map(product =>  <ProductDisplay product={product} key={product.id}/> )
    // product.category.includes('healthcare') ?: null
    
    
    return <div>
        <Header />
        <div>
            <div className="top-image-shop">
                <img src={shopimage} alt='buddy-shop' id='shopimage'/>
                <img src={line} alt='buddy-shop' id='shoplineimage'/>
            </div>
            <div className='shop-health-care'>
                <h1>Health Care</h1>
                <div className='home-product-container'>
                    {healthCareProduct}
                </div>
                <button>Show All</button>
            </div>
            
        </div>
    </div>;
}

export default Shop

// product.description.split('\n').map(x => <div dangerouslySetInnerHTML={{__html: x.toUpperCase()}}></div>)