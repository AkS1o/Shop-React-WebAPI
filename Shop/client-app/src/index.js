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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Admin from "./views/Admin/Admin";
import NoMatchPage from "./views/NoMatchPage/NoMatchPage";

import ProductDetails from "./views/Products/ProductDetails"
import NewsDetails from "./views/News/NewsDetails"

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
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/admin" component={Admin} />

                    <Route path="/productsId" component={ProductDetails} />
                    <Route path="/newsId" component={NewsDetails} />

                    <Route exact path="*" component={NoMatchPage} />
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));