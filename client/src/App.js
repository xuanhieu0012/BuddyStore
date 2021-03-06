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
  const [shopData, setShopData] = useState([])

    useEffect(() => {
      const  fetchData = async () =>{
        await axios.get('/products')
        .then(res=> setShopData(res.data))
      }
      fetchData()
    },[])
    
    
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
  console.log(currentUser)
  return (
    <div className="App">
      <Switch>
          <Route exact path='/'>
            <Home shopData={shopData}/>
          </Route> 
          <Route path='/account'>
            <Account currentUser={currentUser} setCurrentUser={setCurrentUser} authChecked={authChecked} setAuthChecked={setAuthChecked} />
          </Route>
          <Route path='/collection'>
            <Collection />
          </Route>
          <Route path='/bestseller'>
            <Bestseller shopData={shopData}/>
          </Route>
          <Route path='/shop'>
            <Shop shopData={shopData}/>
          </Route>
          <Route path='/sales'>
            <Sales shopData={shopData}/>
          </Route>
          <Route path='/story'>
            <Story />
          </Route>
          <Route path='/contactus'>
            <ContactUs currentUser={currentUser}/>
          </Route>
        
      </Switch>
        
    </div>
  );
}

export default App;
