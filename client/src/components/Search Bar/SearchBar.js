import React from 'react'
import './SearchBar.style.css'
import {AiOutlineSearch} from 'react-icons/ai'
function SearchBar({setSearchInput}) {
    function handleOnChange(e){
        setSearchInput(() => e.target.value)
    }
  return (
    <div className="search-bar-container">
        <input type="text" placeholder="Type product name" onChange={handleOnChange}></input>
        <AiOutlineSearch className='search-icon' />
    </div>
  )
}

export default SearchBar