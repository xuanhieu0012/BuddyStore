import React from 'react';
import ProductDisplay from '../Shop/ProductDisplay'

function Newarrivals({shopData}){
    console.log(shopData)
    const displayNewarrivals = shopData.slice(shopData.length - 8, shopData.length).map(product => <ProductDisplay product={product}/>)

    return <div className="collection-container">
        <p className="arrivals-header">New Arrivals </p>
        <div className="home-product-container">
            {displayNewarrivals}
            
        </div>
        <button>Show All</button>
    </div>
}

export default Newarrivals;