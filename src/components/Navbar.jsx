import React from 'react';
import logo from 'assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav>
      <div className="flex items-center text-white space-x-4 rtl:space-x-reverse">
        <img className="w-48 mb-8" src={logo} alt="" />
        <Link to="tes">الرئيسية</Link>
        <Link to="tes">الأقسام</Link>
      </div>
    </nav>
  );
};

export default Navbar;
