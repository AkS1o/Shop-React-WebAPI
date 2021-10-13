import React from "react"
import { Fragment } from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

const Header = () => {
    window.addEventListener('click', (event)=>{
        let dropdown = document.getElementById('dropdown');
        let dropdownToggle = document.getElementById('dropdown-toggle');

        if (!dropdown.contains(event.target) && !dropdownToggle.contains(event.target)) {
            let dropdownMenu = document.getElementById('dropdown-menu');
            dropdownMenu.style.display = 'none';
        }
    })
     
    const dropdown = () => {
        let dropdownMenu = document.getElementById('dropdown-menu');
	    dropdownMenu.style.display = 'block';
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
                        <div id="dropdown" className="dropdown" onClick={dropdown}>
                            <div id="dropdown-toggle" className="dropdown-toggle">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <ul id="dropdown-menu">
                                <li><Link to="#">home</Link></li>
                                <li><Link to="#">about</Link></li>
                                <li><Link to="#">galery</Link></li>
                                <li><Link to="#">setings</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;