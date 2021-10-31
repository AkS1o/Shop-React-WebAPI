import React from "react"
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { faUser, faCog, faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../Logo/Logo";

const Header = () => {
    const dropdownOpen = () => {
        let dropdownMenu = document.getElementById('dropdown-menu');
        dropdownMenu.style.display = 'block';

        window.addEventListener('click', dropdownClose)
    }

    const dropdownClose = (event) => {
        let dropdown = document.getElementById('dropdown');
        let dropdownToggle = document.getElementById('dropdown-toggle');

        if (!dropdown.contains(event.target) && !dropdownToggle.contains(event.target)) {
            let dropdownMenu = document.getElementById('dropdown-menu');
            dropdownMenu.style.display = 'none';

            window.removeEventListener('click', dropdownClose);
        }
    }

    return (
        <Fragment>
            <header>
                <div className="container">
                    <div className="header-wrap">
                        <Logo />
                        <nav className="nav">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/news">News</Link></li>
                                <li><Link to="/contacts">Contacts</Link></li>
                            </ul>
                        </nav>
                        <div className="btn-group">
                            <Link to="/login" className="btn btn-outline-primary">Login</Link>
                            <Link to="/register" className="btn btn-primary">Register</Link>
                        </div>
                        <div id="dropdown" className="dropdown" onClick={dropdownOpen}>
                            <div id="dropdown-toggle" className="dropdown-toggle">
                                <FontAwesomeIcon icon={faUserCircle} />
                            </div>
                            <ul id="dropdown-menu" className="dropdown-menu">
                                <li>
                                    <Link to="/user/profile">
                                        <FontAwesomeIcon icon={faUser} />
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/user/settings">
                                        <FontAwesomeIcon icon={faCog} />
                                        Setings
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                        logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;