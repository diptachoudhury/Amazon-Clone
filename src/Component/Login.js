import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login">
        <Link to ='/'>
        <img 
            className="login__logo"
            src ='https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg'/>
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type ='text'/>
                <h5>Password</h5>
                <input type='password'/>
                <button className="login__signInButton">Sign_In</button>
            </form>

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <button className="login__registerButton">Create your Amazon Account</button>
        </div>




    </div>
  )
}

export default Login
