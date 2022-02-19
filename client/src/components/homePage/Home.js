import React from "react";
import Header from "../NavBar/Header"
import ImageSlider from "../ImageSlider"
import CollectionFeature from "./CollectionFeature"
import Newarrivals from "./Newarrivals"
import Sales from "./Sales";
import Testimonial from '../Testtimonial/Testimonial'
import Footer from '../Footer/Footer'
function Home({shopData}){


    return <div>
        <Header />
        <ImageSlider />
        <CollectionFeature />
        <Newarrivals shopData={shopData}/>
        <Sales shopData={shopData} />
        <Testimonial />
        <Footer />
    </div>
}

export default Home;