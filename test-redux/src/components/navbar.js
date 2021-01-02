import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav'>  
                <span>Logo</span>
                <nav>
                    <Link className='link' to='/'>
                        <li>Home</li>
                    </Link>
                
                    <Link className='link' to='/shop'>
                        <li>Shop</li>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
