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




import ViewsProduct from "../../components/View/ViewProduct/ViewProduct"
import MainProduct from "../Products/AdminProducts/MainProducts"
import AddProduct from "../Products/AdminProducts/AddProduct"
import EditProduct from "../Products/AdminProducts/EditProduct"
import DeleteProduct from "../Products/AdminProducts/DeleteProduct"

import MainGenres from "../Genre/MainGenres"
import AddGenre from "../Genre/AddGenre"

import MainPlatforms from "../Platform/MainPlatform"
import AddPlatform from "../Platform/AddPlatform"

import MainNews from "../News/AdminNews/MainNews"
import AddNews from "../News/AdminNews/AddNews"
import EditNews from "../News/AdminNews/EditNews"

import ViewNews from "../../components/View/ViewNews/ViewNews"



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


                                <Route path="/user/products" component={MainProduct} />
                                <Route path="/user/views-product" component={ViewsProduct} />
                                <Route path="/user/add-product" component={AddProduct} />
                                <Route path="/user/edit-product" component={EditProduct} />
                                <Route path="/user/delete-product" component={DeleteProduct} />

                                <Route path="/user/genres" component={MainGenres} />
                                <Route path="/user/add-genre" component={AddGenre} />

                                <Route path="/user/platforms" component={MainPlatforms} />
                                <Route path="/user/add-platform" component={AddPlatform} />

                                <Route path="/user/news" component={MainNews} />
                                <Route path="/user/add-news" component={AddNews} />
                                <Route path="/user/edit-news" component={EditNews} />
                                <Route path="/user/views-news" component={ViewNews} />



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