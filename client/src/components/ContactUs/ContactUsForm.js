import React,{ useEffect, useState } from 'react'


import contactusbanner from '../../assets/contactusbanner.png'
import './ContactUsForm.style.css'
function ContactUsForm({currentUser}) {
    const [formData, setFormData] = useState({
        id: currentUser ? currentUser.id : null,
        name: "",
        email: "",
        message: "",
    })
    function handleSubmit(e){
        e.preventDefault()
        let email = document.getElementById('email')
        if(!(email.value).includes('@')){
            document.getElementById('email-error').innerHTML ="Please enter a valid email address"
            
            return false

        }else{
            console.log(formData)


            setFormData({
                id: currentUser ? currentUser.id : null,
                name: "",
                email: "",
                message: "",
            })
        }
        
    }

    function handleOnChange(e){
        let key = e.target.name
        setFormData({...formData, [key] : e.target.value})   
        
        
    }

  return (
    <div className="contact-us-content-container">
        <img src={contactusbanner}></img>
        <p>If you have any question or comment about the product, please fill the form below with all of your detail information and we will get back to you within 24 hours. Or feel free to contact us at 469-714-6970 or 469-803-2992. We'll available to take your call between 9 am to 5 pm.</p>
        <div className="contact-us-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label><b>Name:*</b></label>
                    <input type="text" placeholder="enter your name" name="name" value={formData.name} onChange={handleOnChange}></input>
                    
                    <label><b>Email:*</b></label>
                    <input type="text" placeholder="enter your email" name="email" value={formData.email}onChange={handleOnChange} id='email'></input>
                    <span id='email-error'></span>
                </div>
                <div class="form-textarea">
                    <label><b>Message:*</b></label>
                        <textarea type="text" placeholder='write your question'value={formData.message} name='message' onChange={handleOnChange}></textarea>
                    
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUsForm