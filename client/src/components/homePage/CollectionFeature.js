import React from 'react';
import sunscreens from '../../assets/sunscreen.jpg'
import tea from '../../assets/tea.jpg'
import teaPiano from '../../assets/teaPiano.jpg'
import DBH from '../../assets/DBH.png'
import skinCare from '../../assets/skinCare.png'
import teaCup from '../../assets/teaCup.png'
function CollectionFeature(){


    return <div className="collection-container">
        <p id="collection-header">Collection </p>
        <div className="collection-feature-container">

            <div className="image-wrap-container">
                <img className="image-container" src={sunscreens} alt='sunscreens' />
                <p className="image-description">Beauty And Body Care</p>
            </div>

            <div className="image-wrap-container">
                <img className="image-container" src={teaPiano} alt='teaPiano' />
                <p className="image-description">Life Style</p>
            </div>

            <div className="image-wrap-container">
                
                <img className="image-container" src={tea} alt='tea' />
                <p className="image-description">Health Care</p>
                </div>

            <div className="image-wrap-container">
                <img className="image-container" src={skinCare} alt='skinCare'/>
                <p className="image-description">Skin Care</p>
            </div>
         
        </div>
    </div>
}



export default CollectionFeature