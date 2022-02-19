import React from 'react';
import Header from "../NavBar/Header"
import { BrowserRouter as Router, Route , Redirect, Link} from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
function Account({currentUser, setCurrentUser, authChecked, setAuthChecked}){
console.log(currentUser)

    if(!authChecked) {return <div>You must be logged in</div>}
    return <div>
        <Header />
        {currentUser ? ( <div className="login-header"><h1>Account Details </h1> </div> ): (<div className="login-header">
            <h1>Account</h1>

        </div>)  }
        
        <Router>
        {currentUser ? 
                <AuthenticatedApp setCurrentUser={setCurrentUser} currentUser={currentUser} />
                
            
      
            : 
            
            <UnauthenticatedApp
                setCurrentUser={setCurrentUser}
            />
            
        }
        </Router>
    </div>
}

export default Account;