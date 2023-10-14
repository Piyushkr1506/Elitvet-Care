import React from 'react';
import './Navbar.css';
import services from './ServiceTable'; 
import {useNavigate} from 'react-router-dom';
import main_img from '../../Images/download.jpeg'

const Navbar = () => {
    const history = useNavigate()
    const handleLogout = () => {
       history("/") // This is a placeholder. In a real-world scenario, you'd have more actions here.
    };

    const handleService = (e) => {
      e.preventDefault()
        //alert('Logged out'); // This is a placeholder. In a real-world scenario, you'd have more actions here.
       history("/services")
    };
    const handleDashboard = (e)=>{
      e.preventDefault();
      history("/dashboard")
    }
    const handleAbout = (e)=>{
      e.preventDefault();
      history("/about")
    }

  return (
    <nav className="navbar">
      <div className="navbar-brand"><img src={main_img} height={"28px"}></img>  ELITVET</div>
      <ul className="navbar-menu">
        <li className="navbar-item" onClick={handleDashboard}><a href="/">Dashboard</a></li>
        <li className="navbar-item" onClick={handleAbout}><a href="/about">About</a></li>
        <li className="navbar-item" onClick={handleService}><a href="/services">Services</a></li>
       
      </ul>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
