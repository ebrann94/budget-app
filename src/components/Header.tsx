import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <div>
        <h1>Header</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/add-expense">Add Expense</NavLink>
    </div>
);

export default Header;