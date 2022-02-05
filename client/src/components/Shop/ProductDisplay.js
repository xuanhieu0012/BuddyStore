import React from 'react';


function ProductDisplay({product}){
    
    
   
    
    console.log(product)
    return <div>
        <img src={product.image_url[0]} alt='product' />
        <b>{product.name}</b>
    </div>
}


export default ProductDisplay