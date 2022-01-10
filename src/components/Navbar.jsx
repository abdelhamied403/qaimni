import React from 'react';
import logo from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const Navbar = (props) => {
  return (
    <nav>
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <img className="w-48" src={logo} alt="" />
          <Link className="text-xl" to="tes">
            الرئيسية
          </Link>
          <Link className="text-xl" to="tes">
            الأقسام
          </Link>
        </div>
        <div className="actions">
          <SearchOutlined />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
