import React, { useState } from 'react';
import axios from 'axios';
import './styles/signup.css';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/login', {  email, password })
            .then(response => {
              if(response.data.status){
                navigate('/home');
              }
              
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='******' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                <Link to='/forgotpassword'>Forgot password ?</Link>
                <p>Dont't have an Account?</p><Link to='/signup'>Register</Link>
            </form>
        </div>
    );
};

export default Login;
