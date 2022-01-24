import React from 'react';
import Header from '../homePage/Header'
import { BrowserRouter as Router, Route , Redirect, Link} from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import AdminHomePage from '../admin page/AdminHomePage'
function Account({currentUser, setCurrentUser, authChecked, setAuthChecked}){
console.log(currentUser)

    if(!authChecked) {return <div>You must be logged in</div>}
    return <div>
        <Header />
        {currentUser ? ( currentUser.admin ? <div className="login-header"> <h1>Admin</h1> </div> : <div className="login-header"><h1>Account Details </h1> </div> ): (<div className="login-header">
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