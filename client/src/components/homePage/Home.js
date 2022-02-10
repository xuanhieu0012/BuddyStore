import React from "react";
import Header from "./Header"
import ImageSlider from "../ImageSlider"
import CollectionFeature from "./CollectionFeature"
import Newarrivals from "./Newarrivals"
import Sales from "./Sales";
function Home({shopData}){


    return <div>
        <Header />
        <ImageSlider />
        <CollectionFeature />
        <Newarrivals shopData={shopData}/>
        <Sales shopData={shopData} />
    </div>
}

export default Home;