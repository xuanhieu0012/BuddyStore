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
                <img class="image-container" src={sunscreens}/>
                <p className="image-description">Skin Care</p>
            </div>

            <div className="image-wrap-container">
                <img class="image-container" src={teaPiano}/>
                <p className="image-description">Life Style</p>
            </div>

            <div className="image-wrap-container">
                
                <img class="image-container" src={tea}/>
                <p className="image-description">Tea</p>
                </div>

            <div className="image-wrap-container">
                <img class="image-container" src={skinCare}/>
                <p className="image-description">Skin Saver</p>
            </div>
            <div className="image-wrap-container">
                <img class="image-container" src={DBH}/>
                <p className="image-description">DBH Skin Care</p>
            </div>
            <div className="image-wrap-container">
                <img class="image-container" src={teaCup}/>
                <p className="image-description">Tea</p>
            </div>
        </div>
    </div>
}



export default CollectionFeature