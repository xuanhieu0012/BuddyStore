import {Switch, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'
import './App.css';
import Home from './components/homePage/Home'
import Account from './components/user/Account'
import Signup from './components/user/Signup';
import Login from './components/user/Login'
function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch('/me',{
      credentials: 'include'
    })
    .then(res => {
      if(res.ok){
        res.json().then(user =>{
          setCurrentUser(user)
          setAuthChecked(true)
        })
      } else {
        setAuthChecked(true)
      }
    })
  },[])
  return (
    <div className="App">
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route> 
          <Route path='/account'>
            <Account currentUser={currentUser} setCurrentUser={setCurrentUser} authChecked={authChecked} setAuthChecked={setAuthChecked} />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        
      </Switch>
        
    </div>
  );
}

export default App;
