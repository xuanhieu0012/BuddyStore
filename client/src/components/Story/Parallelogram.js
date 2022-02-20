import React from 'react'
import './Parallelogram.style.css'
import story1 from '../../assets/story1.png'
import story2 from '../../assets/story2.png'
import story3 from '../../assets/story3.png'
function Parallelogram() {
  return (
    <div className="Parallelogram-container">
        <div className='parallelogram-shape1'>
        <p>Health Care</p>
            <img src={story1} />
            
        </div>
        <div className='parallelogram-shape2'>
            <img src={story2} />
            <p>Skin Care</p>
        </div>
        <div className='parallelogram-shape3'>
            <img src={story3} />
            <p>Life Style</p>
        </div>
      
        
    </div>
  )
}

export default Parallelogram