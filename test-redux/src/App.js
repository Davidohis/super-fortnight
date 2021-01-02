
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Monster from './pages/monster'
import Home from './pages/home';
import Items from './pages/items';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
        <Router>
         <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' exact component={Monster} />
                <Route path='/shop/:id' component={Items} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
