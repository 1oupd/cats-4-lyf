import './App.css';
import Home from './Home'
import Contacts from './Contacts'
import About from './About'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Basket from './Basket';

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* ANYTHING HERE WILL BE PERMANENTLY SHOWN */}
        <Navbar/>

        <div className = "content">
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path = "/about">
              <About />
            </Route>

            <Route exact path = "/contact">
              <Contacts/>
              
              {/* Basket takes 'props'. messsage displays a <h2> tag. total needs to be calculated, then passed in*/}
              <Basket message="Total" total="499.99"/>
            </Route>
            
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

