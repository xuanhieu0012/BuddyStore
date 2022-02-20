import React from 'react';
import Header from '../NavBar/Header'
import CollectionContent from './CollectionContent';
import Testimonial from '../Testtimonial/Testimonial'
import Footer from '../Footer/Footer'
function Collection(){

    return <div>
        <Header />
        <CollectionContent />
        
        <Testimonial />
        <Footer />
    </div>
}

export default Collection