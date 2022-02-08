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
import axios from 'axios';
function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [shopData, setShopData] = useState(null)

    useEffect(() => {
      async function fetchData(){
        await axios.get('/products')
        fetch('/products')
        .then(res => res.json())
        .then(data => setShopData(data))
      }
      fetchData()
    },[])
    
    console.log(shopData)
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
            <Shop shopData={shopData}/>
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
        
      </Switch>
        
    </div>
  );
}

export default App;
