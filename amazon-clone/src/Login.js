import React,{useState} from 'react';
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
 
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
// stops refresh while form submission
    const login=e=>{
        e.preventDefault();
        // login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in successfully, now redirect to homepage...
            history.push("/");
        })
// catch error feature is given by firebase itself
        .catch(e=>alert(e.message));
    }
    const register=e=>{
        e.preventDefault();
        // register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            // created user, redirect to home page
            history.push("/");
        })
        .catch(e => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Username</h5>
                    <input type="text" value={displayName} onChange={event => setDisplayName(event.target.value)}/>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>
                    <button onClick={login} className="login__signInButton" type="submit">Sign-in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account!</button>
            </div>
        </div>
    )
}

export default Login
