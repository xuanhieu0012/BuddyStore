import React from 'react';
import {BsFillHeartFill} from 'react-icons/bs'

export default function Testimonial(){
    const heartIcon = "❤❤❤❤❤"
    return<div>
        <div className="testimonial-container">
            <div className="testimonial-content">
                <span>{heartIcon}</span>
                <b> Thomas J. Watson</b>
                <p>“Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.”</p>
            </div>
            <div className="testimonial-content">
                <span>{heartIcon}</span>
                <b> Rachel Hogue</b>
                <p>"Imagine your customer is your best friend—listen to their concerns, be a shoulder to lean on and then shift the focus from what went wrong to how you can help make it right."</p>
            </div>
            <div className="testimonial-content">
                <span>{heartIcon}</span>
                <b> Micheal Leboeuf</b>
                <p>“A satisfied customer is the best business strategy of all.”</p>
            </div>
        </div>
    </div>
}