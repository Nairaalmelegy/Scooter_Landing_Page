import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow-point-to-right.png';
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <nav className="shadow-xs border-b border-gray-200 pr-3 pl-3">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a className="flex items-center" href="#">
          <img src={logo} alt="Logo" className="h-12 pl-5" /> 
        </a>
        <button className="text-dark lg:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden lg:flex justify-center" id="navbarNav">
          <ul className="flex space-x-20">
            <li className="nav-item dropdown d-flex justify-center">
              <a className="text-dark hover:text-gray-500 flex items-center" onClick={handleDropdownToggle} href="#">PRODUCTS 
                <span className='ml-2'> <img src={arrow} alt="arrow right" className='h-2 transform rotate-90'></img></span>
              </a>
              {dropdownOpen && (
                <ul className="absolute bg-white shadow-md mt-2 rounded-md">
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Product 1</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Product 2</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Product 3</a></li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a className="text-dark hover:text-gray-500" href="#">GALLERY</a>
            </li>
            <li className="nav-item">
              <a className="text-dark hover:text-gray-500" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4 ">
          <button className="btn btn-outline-primary  pl-4 pr-4 pt-2 pb-2 rounded-md hover:cursor-pointer hover:border-b hover:border-gray-400" type="button">Log In</button>
          <button className="btn bg-gray-700 text-white pl-4 pr-4 pt-2 pb-2 rounded-md hover:cursor-pointer hover:rounded-xl" type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;