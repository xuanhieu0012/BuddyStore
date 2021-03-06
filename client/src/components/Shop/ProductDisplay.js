import React from 'react';
import './Product.style.css'

function ProductDisplay({product}){
    
    
   function handleBuyProduct(e){

   }
   function handleAddToCart(e){
       
   }
    
    
    return <div className="product-container">
        <img src={product.image_url[0]} alt='product' className='product-image'/>
        <b>{product.name}</b>
        {product.salePrice === null ? <p>$ {product.price}</p> : <span className="product-price">
                                                                    
                                                                    <del>$ {product.price} </del>
                                                                    <p>$ {product.salePrice}</p>
                                                                </span>}
        <button onClick={handleBuyProduct} >Buy Now</button>
        <button onClick ={handleAddToCart}>Add to cart</button>
    </div>
}


export default ProductDisplay