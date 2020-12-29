import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Shop from './pages/shop';
import Navbar from './components/navbar';
import Items from './pages/items';

function App() {
  return (
    <div className="App">
        <Router>
         <Navbar />
        
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/shop' exact component={Shop} />
                <Route path='/shop/:id' component={Items} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
