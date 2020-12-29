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

function App() {
  return (
    <div className="App">
        <Router>
         <Navbar />
        
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/shop' component={Shop} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
