import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.less';

// pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
