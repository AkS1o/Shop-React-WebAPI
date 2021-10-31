import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import store
import store from "./store";

//import views
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Products from "./views/Products/Products";
import News from "./views/News/News";
import Contacts from "./views/Contacts/Contacts";
import Cart from "./views/Cart/Cart";

import ProductDetails from "./views/Products/ProductDetails"
import NewsDetails from "./views/News/NewsDetails"

import Login from './components/Login/Login';
import Register from './components/Register/Register';

import Admin from "./views/Admin/Admin";
import AdminLogin from "./views/SingIn/AdminSingIn/AdminSingIn";

import User from "./views/User/User";

import NoMatchPage from "./views/NoMatchPage/NoMatchPage";

import "./../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import "./index.scss"

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/products" component={() => <Products />} />
                    <Route path="/news" component={News} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/cart" component={Cart} />

                    <Route path="/productsId" component={ProductDetails} />
                    <Route path="/newsId" component={NewsDetails} />
                    
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />

                    <Route path="/admin" component={Admin} />
                    <Route path="/admin-login" component={AdminLogin} />

                    <Route path="/user" component={User} />

                    <Route exact path="*" component={NoMatchPage} />
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));