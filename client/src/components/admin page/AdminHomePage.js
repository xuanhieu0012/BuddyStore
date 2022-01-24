import React from 'react';
import {useHistory} from 'react-router-dom'
import Header from '../homePage/Header'
function AdminHomePage({currentUser, setCurrentUser}){
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
        <Header />
        <div className="admin-homePage">
        <h1>Admin Home</h1>
        <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
    )
}

export default AdminHomePage