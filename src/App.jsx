import React from 'react';
import Navbar from './Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <p>App</p>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;