import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import SitebarUser from "../../components/Sitebar/SitebarUser/SitebarUser"

import Personal from "../User/UserSettings/Personal";
import Payments from "../User/UserSettings/Payments";
import Transactions from "..//User/UserSettings/Transactions";
import Password from "..//User/UserSettings/Password";

const User = () => {
    return (
        <Router>
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
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Router>
    )
}

export default User;