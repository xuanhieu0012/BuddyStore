import React from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'

function AuthenticatedApp({currentUser, setCurrentUser}){
    const history = useHistory()

    const handleLogout = () =>{
        fetch('/logout',{
            method: 'DELETE',
            credentials: `include`
        })
        .then(res =>{
            if (res.ok){
                setCurrentUser(null)
                history.push('/')
            }
        })
    }
    return <div>
        <button onClick={handleLogout}>Logout</button>
        <h1>You have been logged in</h1>
    </div>

    
}

export default AuthenticatedApp