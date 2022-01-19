import React from 'react';
import Header from '../homePage/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
function Account({currentUser, setCurrentUser, authChecked, setAuthChecked}){


    if(!authChecked) {return <div>You must be logged in</div>}
    return <div>
        {/* <Header /> */}
        <Router>
        {currentUser ? (
            <AuthenticatedApp
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
            />
            ) : (
            <UnauthenticatedApp
                setCurrentUser={setCurrentUser}
            />
            )
        }
        </Router>
    </div>
}

export default Account;