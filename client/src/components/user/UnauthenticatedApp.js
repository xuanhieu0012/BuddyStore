import React from 'react';
import {Switch, Route, Redirect} from  'react-router-dom'
import Login from './Login'
import Signup from './Signup';
function UnauthenticatedApp({setCurrentUser}){
    return (
    <Switch>
        <Route exact path="/account">
            <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
            <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Redirect to="/account" />
    </Switch>
    )
}

export default UnauthenticatedApp