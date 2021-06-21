import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header.js";

function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Header/>
              <h1>Home screen</h1>
            </Route>
            <Route path="/checkout">
              <h1>checkout</h1>
            </Route>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
