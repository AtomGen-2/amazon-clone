import React from 'react';
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
 
function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="login__signInButton" type="submit">Sign-in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="login__registerButton">Create your Amazon Account!</button>
            </div>
        </div>
    )
}

export default Login
