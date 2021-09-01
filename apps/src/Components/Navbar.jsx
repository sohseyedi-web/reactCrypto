import React from 'react'
import './Style.scss'
import Logo from '../logo.svg'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar-items">
            <div className="navbar-items__right">
                <img src={Logo} alt="logo" className="navbar-items__right-logo" />
                <Link to="/price" className="navbar-items__right-link">قیمت</Link>
                <Link to="/" className="navbar-items__right-link">تماس با ما</Link>
            </div>
        </nav>
    );
}

export default Navbar;