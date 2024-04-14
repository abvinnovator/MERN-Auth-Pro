import React, { useState } from 'react';
import axios from 'axios';
import './styles/signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/signup', { username, email, password })
            .then(response => {
              if(response.data.status){
                navigate('/login')
                console.log(response)
              }
              
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>REGISTER NOW..</h2>
                <label htmlFor='username'>Username</label>
                <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='******' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Sign Up</button>
                <p>have an Account?</p><Link to='/login'>Login now</Link>
            </form>
        </div>
    );
};

export default SignUp;
