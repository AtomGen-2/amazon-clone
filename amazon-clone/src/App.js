import './App.css';
import React,{useEffect} from "react";
import Checkout from "./Checkout.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Login from "./Login.js";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const[{basket, user}, dispatch] = useStateValue();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        // user logged in
        dispatch({
          type : "SET_USER", 
          user: authUser
        });
      }else{
        // user is logged out
        dispatch({
          type: "SET_USER", 
          user: null
        });
      }
    });
    return () => {
      // cleanup operations
      unsubscribe();
    }
  }, []);
  console.log("user is >", user);
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
