import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 shadow-sm border-b border-dark">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a className="flex items-center" href="#">
          <img src={logo} alt="Logo" className="h-8" /> 
          <span className="ml-2 text-white font-bold">BrandName</span>
        </a>
        <button className="text-white lg:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden lg:flex justify-center" id="navbarNav">
          <ul className="flex space-x-4">
            <li className="nav-item">
              <a className="text-white hover:text-gray-300" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="text-white hover:text-gray-300" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="text-white hover:text-gray-300" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="text-white hover:text-gray-300" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-2">
          <button className="btn btn-outline-primary me-2" type="button">Sign In</button>
          <button className="btn btn-primary" type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;