import React from 'react';
import {Switch, Route, Redirect, useHistory, Link} from 'react-router-dom'
import Profile from '../UserNavBar/Profile';
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
    return (<div>
        
        <div className='login-user'>
            <h1>Welcome back, {currentUser.username}</h1>
            <button onClick={handleLogout}>Logout</button>
            
        </div>
        {/* <div className='User-nav-bar'>
            <Link to='/profile'>Profile</Link> 
            <Link to='/orders'>Order History</Link>
            <Link to='qu'
        </div> */}
    

    </div>)
}

export default AuthenticatedApp;

{/* <Route path='/admin'>
<AdminHomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
</Route> */}