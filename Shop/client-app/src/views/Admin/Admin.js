import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SitebarAdmin from "../../components/Sitebar/SitebarAdmin/SitebarAdmin"
import MainProduct from "../../components/Product/MainProducts"
import ViewsProduct from "../../components/Product/ViewsProduct"
import AddProduct from "../../components/Product/AddProduct"
import EditProduct from "../../components/Product/EditProduct"
import DeleteProduct from "../../components/Product/DeleteProduct"
import MainGenres from "../Genre/MainGenres"
import AddGenre from "../Genre/AddGenre"

import MainPlatforms from "../Platform/MainPlatform"
import AddPlatform from "../Platform/AddPlatform"

import MainNews from "../News/AdminNews/MainNews"
import AddNews from "../News/AdminNews/AddNews"
import EditNews from "../News/AdminNews/EditNews"

const Admin = () => {
    return (
        <main className="container-fluid body-wrap">
            <SitebarAdmin />
            <section className="main-panel">
                <Router></Router>
                <Switch>
                    <Route path="/admin/products" component={MainProduct} />
                    <Route path="/admin/views-product" component={ViewsProduct} />
                    <Route path="/admin/add-product" component={AddProduct} />
                    <Route path="/admin/edit-product" component={EditProduct} />
                    <Route path="/admin/delete-product" component={DeleteProduct} />

                    <Route path="/admin/genres" component={MainGenres} />
                    <Route path="/admin/add-genre" component={AddGenre} />

                    <Route path="/admin/platforms" component={MainPlatforms} />
                    <Route path="/admin/add-platform" component={AddPlatform} />

                    <Route path="/admin/news" component={MainNews} />
                    <Route path="/admin/add-news" component={AddNews} />
                    <Route path="/admin/edit-news" component={EditNews} />


                </Switch>
            </section>
        </main>
    )
}

export default Admin;