import React,{useState} from 'react';
import {Link} from 'react-router-dom'

function Login({setCurrentUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username,password})
        })
        .then( res => {
            if (res.ok){
                res.json().then(user =>{
                    setCurrentUser(user)
                })
            } else {
                res.json().then(errors => {
                    console.error(errors)
                })
            }
        })
    }
    return <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
        <div className="Login-form">
        <h1 className="login-text">Login</h1>
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
        <p><button className="signup-button-two" type="submit">Log In</button></p>
        <p className="or-text-two">~  or ~</p>
        <p className="text-center"><Link className="signup-button" to="/signup">Sign Up</Link></p>
        </div>
    </form>
    </div>
}

export default Login