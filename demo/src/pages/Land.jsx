import React from 'react';
import './styles/Land.css'; 
import { Link } from 'react-router-dom';
const Land = () => {
  return (
    <div className="landing-section">
    
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      
      <section className="about-project main-content">
      <h1>Welcome to StudentUnity!</h1>

<h3>StudentUnity is a student-focused online platform where students from different colleges and universities can connect, collaborate, and learn together. Our platform provides a vibrant and inclusive space for students to:</h3>

<h2>Connect:</h2><h4>Join a diverse community of students and expand your network beyond your college campus. Meet like-minded peers, make new friends, and build valuable relationships that can last a lifetime.</h4>

<h2>Collaborate:</h2><h4>Work on projects, share ideas, and exchange resources with fellow students. Whether you're working on academic assignments, extracurricular activities, or personal projects, StudentUnity provides the tools and support you need to collaborate effectively.</h4>

<h2>Learn:</h2><h4> Engage in meaningful discussions, explore new topics, and broaden your horizons. Access a wide range of communities, discussions, and resources to enhance your learning experience and grow personally and academically.</h4>

<h2>Join StudentUnity today to unlock a world of opportunities and take your student experience to the next level!</h2>


    <Link to='/signup'><button className='button-style'>Register now..</button></Link>    
      </section>

    
      <footer>
        <p>&copy; 2024 Student Unity. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Land;
