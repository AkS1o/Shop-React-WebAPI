import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../store";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import SitebarUser from "../../components/Sitebar/SitebarUser/SitebarUser"

import Personal from "../User/UserSettings/Personal";
import Payments from "../User/UserSettings/Payments";
import Transactions from "..//User/UserSettings/Transactions";
import Password from "..//User/UserSettings/Password";


//import Home from "../Home/Home";
//import About from "../About/About";
//import Products from "../Products/Products";
//import News from "../News/News";
//import Contacts from "../Contacts/Contacts";

const User = () => {
    return (
        /*        <Router>*/
        <Fragment>
            
                        <Header />
                        <main className="main">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <SitebarUser />
                                    </div>
                                    <div className="col-9">
                                        <Switch>
                                            <Route path="/user/personal" component={Personal} />
                                            <Route path="/user/payments" component={Payments} />
                                            <Route path="/user/transactions" component={Transactions} />
                                            <Route path="/user/password" component={Password} />

                                            {/*<Route path="/" component={Home} />*/}
                                            {/*<Route path="/about" component={About} />*/}
                                            {/*<Route path="/products" component={Products} />*/}
                                            {/*<Route path="/news" component={News} />*/}
                                            {/*<Route path="/contacts" component={Contacts} />*/}


                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer />
        </Fragment>
        /*        </Router>*/
    )
}

export default User;