import React from "react"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux"

import { faUser, faCog, faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loginBuyer } from "../../actions/BuyerListAction";
import { getAllBuyersVM } from "../../actions/BuyerListAction";
import { changeCurrentBuyerVM } from "../../actions/BuyerListAction";
import apiService from "../../services/APIService";

import Logo from "../Logo/Logo";


const Header = ({ CurrentBuyer, CurrentBuyerVM, loginBuyer, getAllBuyersVM, changeCurrentBuyerVM, BuyersListVM }) => {

    useEffect(() => {

        apiService.fetchCurentBuyer().then(data => {
            loginBuyer(data.Buyer);
        })

        if (CurrentBuyer == null || CurrentBuyer == undefined) {
            console.log("current buyer", CurrentBuyer)
            let elem = document.getElementById("login_regist");
            let link1 = document.createElement("a")
            link1.setAttribute("class", "btn btn-outline-primary");
            link1.setAttribute("href", "/login");
            link1.innerHTML = "Login"

            let link2 = document.createElement("a")
            link2.setAttribute("class", "btn btn-primary");
            link2.setAttribute("href", "/register");
            link2.innerHTML = "Register"

            elem.appendChild(link1);
            elem.appendChild(link2);
        }
        else {
            console.log("current buyer", CurrentBuyer)

            let elem = document.getElementById("login_regist");

            let link1 = document.createElement("a")
            link1.setAttribute("class", "btn btn-outline-primary");
            link1.innerHTML = CurrentBuyer.Email;

            let btn = document.createElement("button");
            btn.setAttribute("class", "btn btn-primary")
            btn.innerHTML = "LOGOUT";

            elem.appendChild(link1);
            elem.appendChild(btn);


            apiService.fetchBuyerListVM().then(data => {
                getAllBuyersVM(data.List);
            })


            if (CurrentBuyerVM == null || CurrentBuyerVM == undefined) {
                BuyersListVM.forEach((item) => {
                    if (item.Email == CurrentBuyer.Email) {
                        changeCurrentBuyerVM(item);
                    }
                })
            }
            else {
                changeCurrentBuyerVM(CurrentBuyerVM);
            }
            


            console.log("getAllBuyersVM", BuyersListVM);

            console.log("currentBuyerVM", CurrentBuyerVM);
        }

    }, []);

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
                        <div className="btn-group" id="login_regist">
                            {/*<Link to="/login" className="btn btn-outline-primary">Login</Link>*/}
                            {/*<Link to="/register" className="btn btn-primary">Register</Link>*/}
                        </div>
                        <div id="dropdown" className="dropdown" onClick={dropdownOpen}>
                            <div id="dropdown-toggle" className="dropdown-toggle">
                                <FontAwesomeIcon icon={faUserCircle} />
                            </div>
                            <ul id="dropdown-menu" className="dropdown-menu">
                                <li>
                                    <Link to="user/personal">
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

const mapStateToProps = ({  BuyerListReducer }) => {
    const { CurrentBuyer, CurrentBuyerVM, BuyersListVM } = BuyerListReducer;
    return { CurrentBuyer, CurrentBuyerVM, BuyersListVM }
}

const mapDispatchToProps = {
    loginBuyer,
    getAllBuyersVM,
    changeCurrentBuyerVM
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
