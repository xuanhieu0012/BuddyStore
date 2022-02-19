import React,{useState} from 'react';
import Header from '../NavBar/Header'
import Searchbar from '../Search Bar/SearchBar'
import ProductDisplay from '../Shop/ProductDisplay'
import '../Shop/Product.style.css'
function Sales({shopData}){
    const [searchInput, setSearchInput] = useState('')
    const salesProductArray = shopData.filter(product => product.salePrice !== null)

    const filterSearch = salesProductArray.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()))

    const displayProduct = filterSearch.map(product => <ProductDisplay product= {product} key = {product.id} /> )
    return <div>
        <Header />
        <Searchbar setSearchInput={setSearchInput}/>
        <div className="best-seller-container">
            <h2 id="header-best-seller">Best Seller</h2>
            <div className="best-seller-product">
                {displayProduct}
            </div>
        </div>
    </div>

}


export default Sales;