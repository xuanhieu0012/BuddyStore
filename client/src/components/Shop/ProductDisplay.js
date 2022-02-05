import React from 'react';


function ProductDisplay({product}){
    
    
   
    
    console.log(product)
    return <div className="product-container">
        <img src={product.image_url[0]} alt='product' className='product-image'/>
        <b>{product.name}</b>
        {product.salePrice === null ? <p>$ {product.price}</p> : <span className="product-price">
                                                                    <del>$ {product.price} </del>
                                                                    <p>$ {product.salePrice}</p>
                                                                </span>}
    </div>
}


export default ProductDisplay