import React,{useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate(); 
  const [user, setUser] = useState(null);

  
    axios.get('http://localhost:3000/users', { withCredentials: true })
    .then(res => setUser(res.data))
    .catch(err => console.log(err));

  const handleLogout = () => {
    axios.post('http://localhost:3000/auth/logout')
      .then(response => {
        if (response.data.status) {
          alert("You are logged out");
          navigate('/login'); 
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Home Component</h1>

      <button onClick={handleLogout}>Logout</button>
      {user ? (
        <h1>Welcome, {user.username}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
