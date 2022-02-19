import React,{useState} from 'react';
import Header from '../NavBar/Header.js'
import SearchBar from '../Search Bar/SearchBar'
import ProductDisplay from '../Shop/ProductDisplay'
import './BestSeller.style.css'
function Bestseller({shopData}){

    const [searchInput, setSearchInput] = useState("")
    
    const onlyBestSeller = shopData.filter(product => product.bestSeller === true)

    const filterProduct = onlyBestSeller.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()))

    const displayProduct = filterProduct.map(product => <ProductDisplay product= {product} key = {product.id} /> )
    return <div>
        <Header />
        <SearchBar setSearchInput={setSearchInput}/>
        <div className="best-seller-container">
            <h2 id="header-best-seller">Best Seller</h2>
            <div className="best-seller-product">
                
                {displayProduct}
            </div>
        </div>
    </div>
}

export default Bestseller