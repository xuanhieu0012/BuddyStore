import React from 'react';
import Header from '../NavBar/Header'
import Parallelogram from './Parallelogram'
import StoryContent from './StoryContent'
import Testimonial from '../Testtimonial/Testimonial'
import Footer from '../Footer/Footer'
export default function Story(){

    return <div>
        <Header />
        <Parallelogram />
        <StoryContent />
        <Testimonial />
        <Footer />
    </div>
}