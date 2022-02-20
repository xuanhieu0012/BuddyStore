import React from 'react'
import collection1 from '../../assets/collection1.png'
import line from '../../assets/line.png'
import './CollectionContent.style.css'
import collectionLifeStyle from '../../assets/collectionLifeStyle.png'
import collectionSkinCare from '../../assets/collectionSkinCare.png'
import collectionTea from '../../assets/collectionTea.png'
function CollectionContent() {
  return (
    <div className="CollectionContent-container">
        <div className="collection-image-header"> 
            <img src={collection1} alt="collectionheader" />
            <img src={line} alt='line' />
        </div>

        <div className="collection-life-style">
            <div className="collection-image">
                <img src={collectionLifeStyle} alt='lifestyle' />
            </div>
            <div className='collection-content'>
                <h2>Life Style</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                <button>Show more</button>
            </div>
        </div>
        <div className="collection-life-style">
            <div className='collection-content'>
                <h2>Skin Care</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                <button>Show more</button>
            </div>
            <div className="collection-image">
                <img src={collectionSkinCare} alt='lifestyle' />
            </div>
            
        </div>
        <div className="collection-life-style">
            <div className="collection-image">
                <img src={collectionTea} alt='lifestyle' />
            </div>
            <div className='collection-content'>
                <h2>Tea</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                <button>Show more</button>
            </div>
        </div>
    </div>
  )
}

export default CollectionContent