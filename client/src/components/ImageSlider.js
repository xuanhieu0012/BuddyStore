import React,{useState, useEffect, useRef} from "react";

function ImageSlider(){
    const colors=["#0088FE", "#00C49F", "#FFBB28"]
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
                    {colors.map((backgroundColor, index) => (
                    <div 
                        className="slide" 
                        key={index} 
                        style={{backgroundColor}} /> 
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