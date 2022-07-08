import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h1>After</h1>
            <ul>
                <li>Camisas</li>
                <li>Remeras</li>
                <li>Gorras</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
