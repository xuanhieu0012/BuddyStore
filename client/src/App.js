import {Switch, Route, Link} from 'react-router-dom';
import {useState, useEffect} from 'react'
import './App.css';
import Home from './components/homePage/Home'
import Account from './components/user/Account'
import Collection from './components/Collection Page/Collection'
import Bestseller from './components/BestSeller/Bestseller'
import Shop from './components/Shop/Shop'
import Sales from './components/Sales/Sales'
import Story from './components/Story/Story'
import ContactUs from './components/ContactUs/ContactUs'
import AdminHomePage from './components/admin page/AdminHomePage';
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
          <Route path='/collection'>
            <Collection />
          </Route>
          <Route path='/bestseller'>
            <Bestseller />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/sales'>
            <Sales />
          </Route>
          <Route path='/story'>
            <Story />
          </Route>
          <Route path='/contactus'>
            <ContactUs />
          </Route>
          {currentUser === null ? null : currentUser.admin ? <Route exact path='/admin/dashboard'>
              <AdminHomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </Route> : <div>
            <h1>You're not allow to access this page</h1>
            <Link to="/">Go Back to Home Page</Link>
          </div>}
         
      </Switch>
        
    </div>
  );
}

export default App;
