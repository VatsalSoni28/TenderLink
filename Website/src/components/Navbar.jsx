import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/tenders">Tenders</a>
        <a href="/blogs">Blogs</a>
        <a href="/offers">Offers</a>
      </div>
      <div className="navbar-login">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
