import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Task = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Task;