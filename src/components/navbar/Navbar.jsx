import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>After</h1>
            </Link>
            <ul>
                <Link className="links" to="/category/camisas">
                    Camisas
                </Link>
                <Link className="links" to="/category/remeras">
                    Remeras
                </Link>
                <Link className="links" to="/category/gorras">
                    Gorras
                </Link>
            </ul>
            <Link className="links" to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
