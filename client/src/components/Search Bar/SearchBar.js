import React from 'react'
import './SearchBar.style.css'
import {AiOutlineSearch} from 'react-icons/ai'
function SearchBar() {

  return (
    <div className="search-bar-container">
        <input type="text" placeholder="Type product name"></input>
        <AiOutlineSearch className='search-icon' />
    </div>
  )
}

export default SearchBar