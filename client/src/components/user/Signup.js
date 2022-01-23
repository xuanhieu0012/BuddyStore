import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import Header from '../homePage/Header'
function Signup({setCurrentUser}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation
        })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(user => {
                setCurrentUser(user)
                
            })
            } else {
                res.json().then(errors => {
                console.error(errors)
            })
            }
        })
    }
      return (
        <div className="login">
        
        <form  onSubmit={handleSubmit}>
            <div className="sign-up-form"> 
            <h1 className="signup-text">Sign Up</h1>
        <p>
            <label
                className="username-signup"
                htmlFor="username"
            >
                Username
            </label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="username-signup-box"
                />
            </p>
        <p>
            <label
                className="username-signup"
                htmlFor="password"
            >
                Password
            </label>
                <input
                    type="password"
                    name=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password-signup-box"
            />
            </p>
            <p>
            <label 
                htmlFor="password_confirmation"
                className="password-confirmation-text"
            >
                Password Confirmation
            </label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="password-signup-confirmation-box"
            />
            </p>
            <p><button className="signup-button-two" type="submit">Sign Up</button></p>
            <p className="or-text-two">~  or ~</p>
            <p className="text-center"><Link className="login-link" to="/account">Log In</Link></p>
            </div>
        </form>
        </div>
    )
    }
    
    export default Signup
