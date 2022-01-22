import React,{useState, useEffect, useRef} from "react";
import skinsaverHN from '../assets/skinsaverHN.jpg'
import Slide1 from '../assets/Slide1.jpg'
import bannerImage from '../assets/bannerImage.jpg'
function ImageSlider(){
    const colors=[skinsaverHN, Slide1, bannerImage]
    const [index, setIndex] = useState(0);
    const timeOutRef = useRef(null)
    function resetTimeOut(){
        if (timeOutRef.current){
            clearTimeout(timeOutRef.current);
        }
    }
    useEffect(()=>{
        resetTimeOut();
        timeOutRef.current = setTimeout(()=> setIndex((prevIndex) =>prevIndex === colors.length - 1 ? 0 : prevIndex + 1)
        , 4000)
        return () => { resetTimeOut();};
    },[index])
    return <div className="slideShow">
                <div className="slideShowSlider" style={{transform: `translate3d(${-index * 100}%,0,0)`}}>
                    {colors.map((picture, index) => (
                    // <div 
                    //     className="slide" 
                    //     key={index} 
                    //     style={{backgroundColor}} /> 
                    <img className="slide" key={index} src={picture} alt='buddy'/>
                        ))}
                    
                </div>
                <div className="slideshowDots">
                    {colors.map((_, idx) =>(
                        <div key={idx} 
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() =>{
                                setIndex(idx);
                            }}
                        ></div>
                    ))}

                </div>
    </div>
}

export default ImageSlider;