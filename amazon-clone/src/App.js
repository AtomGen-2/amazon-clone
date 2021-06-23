import './App.css';
import Checkout from "./Checkout.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Login from "./Login.js";

function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Header/>
              <Home/>
            </Route>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
