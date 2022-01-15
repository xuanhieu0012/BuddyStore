import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/homePage/Home'
function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/'>
            <Home />
            </Route> 
      </Switch>
        
    </div>
  );
}

export default App;
