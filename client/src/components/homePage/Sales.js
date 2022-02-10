import React from 'react';
import ProductDisplay from '../Shop/ProductDisplay'
export default function Sales({shopData}){
    
    const filterSales = shopData.filter(product => product.salePrice !== null)
    
    const displaySales = filterSales.slice(0,8).map(product => <ProductDisplay product={product} />)
    return <div className="collection-container">
                    <p className="arrivals-header">Sales </p>
                <div className="home-product-container">
                        {displaySales}
                </div>
                <button>Show All</button>
            </div>
}